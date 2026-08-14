import { Helmet } from 'react-helmet-async';
import { Rss } from 'lucide-react';
import { blogPosts } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Abdul Raoof</title>
        <meta
          name="description"
          content="Writing on React, MERN stack development, and lessons learned building production apps."
        />
      </Helmet>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="~/blog"
            title="Notes & writing"
            description="Thoughts on React, the MERN stack, and things I learn while building."
          />

          <div className="mt-14">
            {blogPosts.length === 0 ? (
              <Reveal>
                <div className="card-surface flex flex-col items-center gap-3 p-16 text-center">
                  <Rss className="text-accent" size={26} />
                  <p className="text-ink-secondary">
                    No posts published yet — check back soon.
                  </p>
                  <p className="font-mono text-xs text-ink-tertiary">
                    Add entries to{' '}
                    <code className="text-ink-secondary">src/data/profile.ts</code> →{' '}
                    <code className="text-ink-secondary">blogPosts</code> to populate
                    this page.
                  </p>
                </div>
              </Reveal>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {blogPosts.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 0.06}>
                    <article className="card-surface p-6">
                      <p className="font-mono text-xs text-ink-tertiary">{post.date}</p>
                      <h3 className="mt-2 text-lg font-semibold text-ink">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-secondary">{post.excerpt}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
