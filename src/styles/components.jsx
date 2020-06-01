import styled from "styled-components"

export const colors = {
  background: "#121e27",
  accent: "#ff715b",
  green: "#0dab76",
  faded: "#b7b4b9",
  white: "#fdfffc",
  grey: "#c7c7c7",
  contrast: "#f9efe7",
}

export const ThumbnailImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  object-fit: cover;
  margin-right: 1rem;
`
export const ImageFull = styled.div`
  max-width: 30rem;
  margin: auto;
  img {
    border-radius: 60px;
    grid-area: image;
  }
`

export const Button = styled.a`
  display: block;
  width: 300px;
  height: 100px;
  position: relative;

  div {
    position: absolute;
    font-size: 1.2rem;
    text-align: center;
    top: 0;
    left: 0;
    padding: 1rem 2.5rem 1.1rem;
  }
  > div:nth-child(1) {
    background: ${props => (props.invert ? colors.green : colors.accent)};
    color: ${colors.white};
    z-index: 100;
    transform: translate3d(-8px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transition: transform 0.3s ease-in-out;
    :hover {
      transform: translate3d(2px, 2px, 2px);
    }
  }
  > div:nth-child(2) {
    z-index: 0;
    border: 2px ${props => (props.invert ? colors.white : colors.background)}
      solid;
    position: absolute;
    color: transparent;
  }
`

export const Tags = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  grid-area: tags;

  li {
    height: 2rem;
    list-style: none;
    padding-right: 0.5rem;
    background: ${colors.background};
    color: ${colors.white};
    padding: 0.25rem 0.55rem;
    margin-right: 0.25rem;
    font-size: 0.8rem;
    font-weight: 700;
  }
`

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 89rem;
  padding: 1.5rem 0.75rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 400;
  }

  .inh {
    color: inherit;
  }
  .logo {
  }
  .highlight {
    position: relative;
    z-index: 100;
    > div:nth-child(2) {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40%;
      transform: translateX(0.25rem);
      background: ${colors.accent};
      z-index: -100;
    }
  }
`

export const Section = styled.div`
  background: ${props => (props.invert ? colors.background : colors.white)};
  color: ${props => (props.invert ? colors.white : colors.background)};
  padding: ${props => (props.top ? "22vh 3rem 22vh" : "3.2rem 3rem 3.2rem")};
`
export const Bio = styled.div`
  #bioContainer {
    grid-template-areas:
      "header "
      "image"
      "text";
    display: grid;
    h1 {
      grid-area: header;
    }
  }
  #bioText {
    grid-area: text;
    max-width: 40rem;
    margin: 0 auto auto 0;
  }
  #bioImage {
    padding: 0;
  }
  @media only screen and (min-width: 768px) {
    #bioContainer {
      grid-template-areas:
        "header text"
        "image  text";
      display: grid;
    }
    #bioImage {
      padding: 0rem 2rem 2rem 0;
    }
  }
  @media only screen and (min-width: 1024px) {
    #bioContainer {
      grid-template-areas:
        "header header"
        "image text";
    }
    #bioImage {
      padding: 2rem 2rem 2rem 0;
    }
  }
`
export const Projects = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  > * {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    max-width: 30rem;
  }

  .projectImage {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    > img {
      padding: 0;
      margin: 0;
      border: 0;
    }
  }
  @media only screen and (min-width: 768px) {
    .projectImage {
      background: ${colors.contrast};
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      > img {
        padding: 0 10% 0;
        margin: 0;
        border: 0;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-areas:
      "title image"
      "tags image"
      "button image"
      "text image";
    .projectImage {
      margin: auto;
      background: transparent;
      > img {
        padding: 0 2rem 0;
        margin: 0;
        border: 0;
      }
    }
  }
`

export const Hero = styled.h1`
  color: ${props => (props.invert ? colors.white : colors.background)};
  font-size: 3.5rem;
  font-weight: normal;
  max-width: 60rem;
  @media only screen and (min-width: 768px) {
    font-size: 4rem;
  }
`
export const HeroP = styled.p`
  color: ${colors.grey};
  font-size: 1.2rem;
  max-width: 30rem;
`
