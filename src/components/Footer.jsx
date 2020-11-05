import React from "react"
import { colors as c } from "../styles/components"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/core"
import styled from "styled-components"

const Foot = styled.footer`
  position: relative;
  padding: 0px clamp(1rem, 7vw, 200px);
  z-index: 2;
  width: 100%;
  padding: 3.2rem 2rem 3.2rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: ${c.background};
  > * {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

const Heading = styled.div`
  color: ${c.grey};
  margin-bottom: 1rem;
`

const A = ({ text, link }) => (
  <a target="blank" href={link}>
    {text}
  </a>
)
const To = ({ text, link }) => <Link to={link}>{text}</Link>

const Logo = styled.div`
  color: white;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: left;
  font-family: "Montserrat";
  margin-bottom: 1rem;
`

const Div = Box

export default function Footer() {
  return (
    <Foot>
      <>
        <Div maxW="200px" color={c.faded}>
          <Logo>Alejandro Aspinwall</Logo>
          <div>
            © {new Date().getFullYear()}, Built and designed by Alejandro
            Aspinwall
          </div>
        </Div>

        <Div>
          <Heading>Links</Heading>
          <Grid>
            <To text="About" link="/about"></To>
            <To text="Blog" link="/profg"></To>
            <To text="Projects" link="/#projects"></To>
            <To text="Contact" link="/#contact"></To>
          </Grid>
        </Div>

        <Div display="grid">
          <Heading>Social</Heading>
          <Div display="grid">
            <A text="twitter" link="https://twitter.com/aaspinwall"></A>
            <A text="linkedin" link=""></A>
            <A text="github" link=""></A>
          </Div>
        </Div>
      </>
    </Foot>
  )
}
