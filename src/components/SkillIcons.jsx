import React from "react"
import styled from "styled-components"
import { Tags } from "../styles/components"

export default function SkillIcons() {
  return (
    <Wrapper>
      <AllTags>
        <li>E-commerce</li>
        <li>Comprehensive Analytics</li>
        <li>Machine Learning</li>
        <li>Web Optimization</li>
        <li>Social media pipelines</li>
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
