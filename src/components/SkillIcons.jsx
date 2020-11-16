import React from "react"
import styled from "styled-components"
import { Tags } from "../styles/components"

export default function SkillIcons() {
  return (
    <Wrapper>
      <AllTags>
        <li>Javascript</li>
        <li>Python</li>
        <li>React</li>
        <li>NodeJS</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>AWS</li>
      </AllTags>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    padding: 0 1rem 0 0;
  }
`
const AllTags = styled(Tags)`
  width: 100%;
  justify-content: center !important;
  @media only screen and (min-width: 768px) {
    padding-right: 0;
    max-width: 100%;
    width: 100%;
    justify-content: flex-start !important;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 100%;
  }
  li {
    font-size: 1rem;
  }
`
