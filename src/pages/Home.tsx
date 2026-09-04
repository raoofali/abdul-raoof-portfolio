import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Experience } from '@/components/sections/Experience';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ABDUL RAOOF — Full Stack MERN Developer</title>
        <meta
          name="description"
          content="Full Stack MERN Developer and React.js Frontend Engineer building fast, accessible, production-ready web applications."
        />
      </Helmet>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <ContactCTA />
    </>
  );
}
