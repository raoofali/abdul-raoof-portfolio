import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email address'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
  // Honeypot field — bots fill this, humans never see it
  company_website: z.string().max(0).optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    // Honeypot triggered — silently drop, pretend success
    if (data.company_website) {
      setStatus('success');
      reset();
      return;
    }

    setStatus('sending');
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not configured');
      }

      await emailjs.send(
        serviceId,
        templateId,
        { from_name: data.name, from_email: data.email, message: data.message },
        publicKey
      );

      setStatus('success');
      reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact — Abdul Raoof</title>
        <meta
          name="description"
          content="Get in touch with Abdul Raoof for full-stack MERN development, freelance, or frontend engineering opportunities."
        />
      </Helmet>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="~/contact"
            title="Let's build something"
            description="Have a role, project, or idea in mind? Send a message and I'll get back to you."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <div className="card-surface space-y-6 p-6 sm:p-8">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-ink-secondary hover:text-ink transition-colors"
                >
                  <Mail size={18} className="text-accent" />
                  {profile.email}
                </a>
                <div className="flex items-center gap-3 text-ink-secondary">
                  <MapPin size={18} className="text-accent" />
                  {profile.location}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="card-surface space-y-5 p-6 sm:p-8"
              >
                {/* Honeypot — hidden from real users, visible to bots */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute -left-[9999px]"
                  aria-hidden="true"
                  {...register('company_website')}
                />

                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-sm text-ink-secondary">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register('name')}
                    className="w-full rounded-md border border-border bg-bg-elevated px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-sm text-ink-secondary">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full rounded-md border border-border bg-bg-elevated px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-sm text-ink-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className="w-full resize-none rounded-md border border-border bg-bg-elevated px-4 py-2.5 text-ink outline-none transition-colors focus:border-accent"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-accent-dim disabled:opacity-60 disabled:pointer-events-none sm:w-auto"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                  <Send size={16} />
                </button>

                {status === 'success' && (
                  <p role="status" className="flex items-center gap-2 text-sm text-signal-green">
                    <CheckCircle2 size={16} /> Message sent — thanks for reaching out!
                  </p>
                )}
                {status === 'error' && (
                  <p role="alert" className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={16} /> Something went wrong. Email me directly at{' '}
                    {profile.email}.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
