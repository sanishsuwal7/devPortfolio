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

export const SkillIcons = styled.div`
  display: flex;
  max-width: 200px;
  flex-wrap: wrap;
  justify-content: flex-start;
  > div {
    padding: 0 1rem 0 0;
  }
`

export const sizing = {
  paddingExterior: {
    base: "3.2rem 3rem 3.2rem",
    tablet: "3.2rem 3rem 3.2rem",
    desktop: "3.2rem 3rem 3.2rem",
  },
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
    border-radius: 20px;
    grid-area: image;
  }
`

export const Button = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 20vh;
  padding-bottom: 2rem;

  div {
    position: absolute;
    font-size: 1.2rem;
    text-align: center;
    top: 0;
    left: 0;
    padding: 1rem 2.5rem 1.1rem;
    margin-top: 2rem;
  }
  > div:nth-child(1) {
    background: ${props => (props.invert ? colors.green : colors.accent)};
    color: ${colors.white};
    z-index: 100;
    transform: translate3d(-8px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transition: transform 0.2s ease-in-out;
    :hover {
      transform: translate3d(2px, 2px, 2px);
      cursor: pointer;
    }
  }
  > div:nth-child(2) {
    z-index: 0;
    border: 2px ${props => (props.invert ? colors.white : colors.background)}
      solid;
    position: absolute;
    color: transparent;
  }
  @media only screen and (max-width: 400px) {
    div {
      font-size: 1rem;
    }
  }
  :focus {
    outline: none;
  }
`

export const Tags = styled.ul`
  display: flex;
  justify-content: flex-start;
  grid-area: tags;
  flex-wrap: wrap;
  @media only screen and (min-width: 768) {
    padding-right: 4rem;
  }

  li {
    list-style: none;
    background: ${colors.background};
    color: ${colors.white};
    padding: 0.25rem 0.7rem;
    margin: 0 0.25rem 1rem 0;
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Space = styled.div`
  padding: ${sizing.paddingExterior.base};
`

export const Wrapper = styled.div`
  /*   margin-left: auto;
  margin-right: auto; */
  position: relative;
  /* max-width: 89rem; */

  margin: 0rem;
  a {
    color: ${colors.accent};
  }

  ul {
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0;
  }
  li {
    list-style: none;
  }

  h1 {
    /* font-size: 3.5rem; */
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
      transition: width 0.4s ease-in-out;
      transform: translateX(0.25rem);
      background: ${colors.accent};
      z-index: -100;
    }
    @keyframes sw {
      from {
        width: 100%;
      }
      50% {
        width: 33%;
      }
      to {
        width: 100%;
      }
    }
    :hover > div:nth-child(2) {
      animation: sw 0.4s ease-in-out;
    }
  }
`

export const Section = styled.div`
  background: ${props => (props.invert ? colors.background : colors.white)};
  color: ${props => (props.invert ? colors.white : colors.background)};

  padding: ${props =>
    props.top ? "12vh 3rem 22vh" : sizing.paddingExterior.base};

  @media only screen and (min-width: 768px) {
  }
  .marquee {
    height: 65vh;
    h1 {
      margin-top: 25vh;
    }
  }
  #projectDetails {
    padding-bottom: 2rem;
    > div {
      flex-basis: 20px;
    }
    display: flex;
    justify-content: space-around;
    h3 {
      margin: 1rem 0 1rem;
      font-family: Inter;
    }
    div {
      font-family: Muli;
    }
  }
  .projectImage {
    display: flex;
    justify-content: center;
    flex-direction: column;
    img {
      max-width: 100%;
      margin: auto;
    }
  }
  #contactBox {
    position: relative;
  }
  .cup {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    top: 7rem;
    left: 100%;
    z-index: 800;
    transform: translate(-100%, 0);

    svg {
      height: 7rem;
      :first-child {
        @keyframes float {
          from {
            filter: opacity(0);
            transform: translate(0, -10px) rotate(-7deg);
          }
          50% {
            transform: translate(-2px, -20px) rotate(-2deg);
            filter: opacity(1);
          }
          to {
            transform: translate(5px, -50px) rotate(3deg);
            filter: opacity(0);
          }
        }
        animation: float 7s ease-in-out infinite;
      }
      :nth-child(2) {
        transition: transform 0.4s ease-in-out;
        @keyframes ring {
          from {
            transform: translateX(0) rotate(0);
          }
          50% {
            transform: translateX(-10px) rotate(-2deg);
          }
          to {
            transform: translateX(10px) rotate(2deg);
          }
        }
        :hover {
          animation: ring 1s ease-in-out alternate infinite;
        }
      }
    }
    @media only screen and (max-width: 400px) {
      position: relative;
      height: 12rem;
      margin: 1rem 0 3rem;
      top: 2rem;
    }
  }
`
export const Read = styled.div`
  font-family: Inter;
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

export const Markdown = styled.div`
  img {
    padding: 2rem 0 2rem;
    display: grid;
    place-items: center;
    max-width: 100%;
    margin: auto;
  }
`

export const Projects = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  padding-bottom: 10vh;

  > * {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    max-width: 30rem;
  }
  h1 {
    font-size: 4rem;
    margin: 0 0 1rem 0;
  }

  .projectImage {
    margin: 0;
    padding: 0;
    border-radius: 40px;
    > img {
      padding: 0;
      margin: 0;
      border: 0;
    }
    transition: transform 0.3s ease-in-out, box-shadow 0.2s ease;
    :hover,
    :focus {
      transform: translate(1%, -1%);
      box-shadow: -17px 17px 20px 8px grey;
      outline: none;
      cursor: pointer;
    }
  }

  .latest {
    font-family: Muli;

    color: grey;
    margin: 0 0 1rem;
    padding: 0;
    letter-spacing: 0.1rem;
  }
  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
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
      "top top"
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
  font-size: 2.5rem;
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
