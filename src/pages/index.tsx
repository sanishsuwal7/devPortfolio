// import SEO from "../components/seo"

import {
  CupContainer,
  Hero,
  HeroP,
  StyledButton,
  colors,
} from "../styles/components"

import Social from "../components/Social"

import { HighlightedWords } from "@/components/HighlightedWords"
import { Email, HeroSection, Section } from "@/components/Landing"
import { BioSection } from "@/components/Landing/Bio"
import { MakeClouds } from "@/components/Landing/Clouds"
import { ProjectsSection } from "@/components/Landing/Projects"
import { useLogger } from "@/hooks/useLogger"
import { content } from "../../content"
import Cup from "../draw/cup.svg"
import Steam from "../draw/steam/steam_1.svg"

const Index = ({ data }) => {
  const _ = useLogger()

  const { title, subtitle, action } = content.mainpitch

  const ContactSection = ({ contact }) => {
    const { action, title } = contact

    return (
      <div id="contactBox">
        <Hero invert={false}>{<HighlightedWords title={title} />}</Hero>
        <CupContainer className="cup">
          <Steam />
          <Cup />
        </CupContainer>

        <Email href={"mailto:contact@aaspinwall.com"}>
          contact@aaspinwall.com
        </Email>

        <StyledButton
          style={{
            gridArea: "button",
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
        >
          {slidingButton(
            action,
            "/",
            () => (window.location.href = "https://calendly.com/aaspinwall/15"),
          )}
        </StyledButton>
      </div>
    )
  }

  return (
    <>
      {/* <SEO title="Alejandro Aspinwall | Software Engineer" /> */}
      <div
        style={{
          padding: "0 clamp(1rem, 7vw, 200px)",
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
          <HighlightedWords title={"**Featured"} />
        </h1>
        {/* <Featured /> */}
      </Section>
      <Section id="projects">
        <ProjectsSection projects={content.projects} />
      </Section>
      <Section id="contact">
        {/* <ContactSection contact={cnt.contact} /> */}
      </Section>
    </>
  )
}

export default Index
