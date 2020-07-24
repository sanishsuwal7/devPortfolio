import React from "react"
import styled from "styled-components"

export default function SkillIcons() {
  return null
  return (
    <Wrapper>
      <div>Languages</div>
      <div>
        <div>Javascript</div>
        <div>Python</div>
        <div>C#</div>
        <div>C++</div>
      </div>
      <div>Frameworks</div>
      <div>
        <div>React</div>
        <div>Unity3D</div>
        <div></div>
        <div>C++</div>
      </div>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  max-width: 200px;
  flex-wrap: wrap;
  justify-content: flex-start;
  > div {
    padding: 0 1rem 0 0;
  }
`
