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
  max-width: ${props => (props.inline ? "inherit" : "675px")};
  padding: ${props => (props.inline ? "0" : "auto")};
  h2 {
    font-family: Montserrat;
    font-weight: bold;
  }
`
const Hero = styled(H)`
  font-size: 2.3rem !important;
`

const Soc = props => {
  return (
    <>
      <Section inline={props}>
        <Hero>Let's have a chat</Hero>
        <p>I'd love to hear from you ☁️</p>
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
    </>
  )
}

export default Soc
