import React from "react"
import {
  Hero as H,
  Section as S,
  Markdown,
  HeroP,
  colors,
} from "../../../styles/components"
import Button from "../../../components/ui/button"
import { FaVideo } from "react-icons/fa"
import Social from "../../Social"
import styled from "styled-components"

const Section = styled(S)`
  max-width: 600px;
  h2 {
    font-family: Montserrat;
    font-weight: bold;
  }
`
const Hero = styled(H)`
  font-size: 2.3rem !important;
`
const Sub = styled(Hero)`
  font-size: 1.2rem;
  font-weight: bold;
`
const Email = styled.a`
  font-size: 1.3rem;
  margin: 2rem 0;
  :hover {
    filter: brightness(1.2);
  }
  cursor: pointer;
`

const P = styled.p``

const Soc = () => {
  return (
    <>
      <Section>
        <Hero>Let's have a chat</Hero>
        <P>
          The digital world changes fast ⚡️ We would love to help you move with
          it ☁️
        </P>
        <Social c={"black"} h={colors.accent} />
        <Button
          to="https://calendly.com/aaspinwall/15"
          style={{ gridArea: "button" }}
        >
          <div className="center">
            {" "}
            {<FaVideo />} <div style={{ paddingLeft: "1rem" }}>Book a call</div>{" "}
          </div>
        </Button>
      </Section>
      {/* <Section>
        <P>Thoughts? I'd love to hear from you</P>
        <Email href={"mailto:contact@aaspinwall.com"}>contact@aaspinwall.com</Email>
      </Section> */}
    </>
  )
}

export default Soc
