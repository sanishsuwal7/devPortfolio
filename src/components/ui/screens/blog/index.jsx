import {
  Hero as H,
  Section as S,
  Markdown,
  HeroP as HP,
  colors,
} from "../../../../styles/components"

import styled from "styled-components"

export const Section = styled(S)`
  .gatsby-highlight {
    margin: 1rem auto;
    /* width: clamp(200px, 80vw, 900px); */
    width: 100%;
    overflow: auto;
  }
  max-width: 600px;
  h2 {
    font-family: Montserrat;
    font-weight: bold;
  }
  ul {
    display: grid;
    li {
      list-style: disc;
      margin-left: 2rem;
    }
  }
`
export const Hero = styled(H)`
  font-size: 2.3rem !important;
`
export const Sub = styled(Hero)`
  font-size: 1.2rem;
  font-weight: bold;
`

export const Email = styled.a`
  font-size: 1.3rem;
  margin: 2rem 0;
  :hover {
    filter: brightness(1.2);
  }
  cursor: pointer;
`
export const Note = styled(HP)`
  padding: 0;
  margin: 1rem 0;
`
export const HeroP = styled(HP)``
