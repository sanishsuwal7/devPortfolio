import React from "react"
import { highlightWords } from "../utils/highlightWords"
// import { StaticQuery, graphql } from "gatsby"
import { fadeIn } from "react-animations"
import styled, { keyframes } from "styled-components"

import {
  Section as S,
  Hero,
  Tags,
  Button,
  HeroP,
  ImageFull,
  Bio,
  Projects,
  SectionTag,
  Paragraph,
  Header,
  CupContainer,
  colors,
} from "../styles/components"
import { HighlightedWords } from "./HighlightedWords"
const FadeIn = keyframes`${fadeIn}`
const Section = styled(S)`
  animation: 1s ${FadeIn};
`
type Props = {
  project: {
    action: string
    body: string
    link: string
    tags: string[]
    title: string
    image: string
  }
}
export default function ProjectsV2({ project }: Props) {
  const { action, body, link, tags, title, image, children } = project

  return (
    <>
      <>
        <SectionTag className="latest" style={{ gridArea: "top" }}>
          {role || `FULL STACK DEVELOPER`}
        </SectionTag>
        <Header style={{ gridArea: "title" }}>
          <HighlightedWords title={title} />
        </Header>
        <Tags>
          {details.stack.split(" ").map((li, i) => (
            <li key={i}>{li.replaceAll("_", " ")}</li>
          ))}
        </Tags>
      </>
      {/* {children} */}
    </>
  )
}

const HeroSection = styled(Section)`
  max-width: 100vw;
`

const Email = styled.a`
  font-size: 1.3rem;
  * {
    padding-bottom: 1rem;
    margin: 2rem 0 !important;
  }
  :hover {
    filter: brightness(1.2);
  }
  cursor: pointer;
`

const ProjectImage = styled.div`
  grid-area: image;

  .imageFluidContainer {
    max-width: 500px;
    border-radius: 40px;
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.2s ease-in-out;
    :hover,
    :focus {
      transform: translate(0, -2%);
      box-shadow: 0px 40px 8px -10px#585858;
      cursor: pointer;
    }
  }
`
const ReadMore = styled.div`
  font-family: Muli;
  transition: 0.8s ease-in-out;

  :hover {
    font-weight: bold;
    filter: brightness(0.8);
  }
`
