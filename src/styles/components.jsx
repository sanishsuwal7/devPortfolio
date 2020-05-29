import styled from "styled-components"

export const colors = {
  background: "#121e2",
  accent: "#ff715b",
  green: "#0dab76",
  faded: "#b7b4b9",
  white: "white",
}

export const ThumbnailImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  object-fit: cover;
  margin-right: 1rem;
`

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 45rem;
  padding: 1.5rem 0.75rem;

  .inh {
    color: inherit;
  }
  .logo {
  }
  .highlight {
    /* border-bottom: 1rem solid ${colors.accent}; */
    position: relative;
    z-index: 100;
    >div:nth-child(2){
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40%;
      transform: translateX(.25rem);

      background: ${colors.accent};
      z-index: -100;
    }
  }
`

export const Section = styled.div`
  background: ${props => (props.invert ? colors.background : colors.white)};
  color: ${props => (props.invert ? colors.white : colors.background)};
`

export const Hero = styled.h1`
  color: ${props => (props.invert ? colors.white : colors.background)};
  font-size: 4rem;
`
