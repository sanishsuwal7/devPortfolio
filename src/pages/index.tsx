// import SEO from "../components/seo"

import { Hero, HeroP, colors } from '../styles/components';

import Social from '../components/Social';

import { HighlightedWords } from '@/components/HighlightedWords';
import { HeroSection, Section } from '@/components/Landing';
import { BioSection } from '@/components/Landing/Bio';
import { MakeClouds } from '@/components/Landing/Clouds';
import { ContactSection } from '@/components/Landing/Contact';
import { ProjectsSection } from '@/components/Landing/Projects';
import { useLogger } from '@/hooks/useLogger';
import { content } from '../../content';

const Index = () => {
  const _ = useLogger();

  const { title, subtitle, action } = content.mainpitch;

  return (
    <>
      {/* <SEO title="Alejandro Aspinwall | Software Engineer" /> */}
      <div
        style={{
          padding: '0 clamp(1rem, 7vw, 200px)',
          background: colors.background,
        }}
      >
        <HeroSection invert={true}>
          <div>
            <MakeClouds cloudCount={30} mult={1} />
            <div className="marquee">
              <Hero invert={true}>
                <HighlightedWords title={title} />
              </Hero>
              <Social />
              <HeroP>{subtitle}</HeroP>
            </div>
          </div>
        </HeroSection>
      </div>
      <Section id="bio">
        <BioSection bio={content.bio} />
      </Section>
      <Section id="featured">
        <h1>
          <HighlightedWords title={'**Featured'} />
        </h1>
        {/* <Featured /> */}
      </Section>
      <Section id="projects">
        <ProjectsSection projects={content.projects} />
      </Section>
      <Section id="contact">
        <ContactSection contact={content.contact} />
      </Section>
    </>
  );
};

export default Index;
