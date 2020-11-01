import React, { useEffect, useRef, useState } from "react"
import delay from "lodash/debounce"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import styled from "styled-components"
import { colors } from "../styles/components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Container = styled.nav`
  * {
    color: ${props => (props.invert ? colors.white : colors.background)};
  }
  position: fixed;
  left: 0;
  top: 0;
  background-color: #121e27;
  z-index: 999;
  text-align: center;
  width: 100%;
  padding: 1rem 3rem;

  > div {
    position: relative;
  }

  ul {
    transition: 0.4s ease-in-out display;
    display: flex;
    justify-content: space-evenly;

    @media only screen and (max-width: 320px) {
      justify-content: center;
      li {
        margin: 0 1rem;
      }
    }
  }

  li {
    position: relative;
    margin: 0;
    padding: 0;
    border-bottom: 5px ${colors.accent} solid;
    transition: border-bottom 0.2s ease-in-out;

    :hover,
    :focus {
      border-bottom: 10px ${colors.accent} double;
      cursor: pointer;
    }
  }
  @media only screen and (min-width: 768px) {
    > div {
      display: grid;
      grid-template-columns: 50% 1fr;
      text-align: left;
    }
    ul {
      padding: 0;
      justify-content: space-evenly;
    }
  }
  @media only screen and (min-width: 1024px) {
    > div {
      display: grid;
      grid-template-columns: 80% 1fr;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .invisible {
    animation: fadeOut 0.7s forwards;
  }
`

export default function Navbar(props) {
  const [hidenav, setHidenav] = useState(true)
  const [buffer, setBuffer] = useState(null)
  const delayedFunc = delay(() => {
    const height = window.pageYOffset
    setHidenav(true)
    setBuffer(height)
  }, 1000)

  //useEffect(() => console.log(buffer), [buffer])

  useEffect(() => {
    let scroller = () => {
      setHidenav(false)
      delayedFunc()
    }
    setBuffer(window.pageYOffset)

    window.addEventListener("scroll", scroller)

    return () => window.removeEventListener("scroll", scroller)
  }, [])

  const data = useStaticQuery(graphql`
    query {
      allSitePage(
        filter: { component: { regex: "/pages/" }, componentChunkName: {} }
      ) {
        nodes {
          path
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    allSitePage: { nodes },
    site: { siteMetadata },
  } = data

  const blacklist = ["blog", "payment", "profg"]
  const delayedHide = delay(() => setHidenav(true), 1000)

  const hasLeft = () => {
    delayedHide()
  }

  return (
    <Container
      invert={true}
      onMouseOver={() => setHidenav(false)}
      onMouseLeave={hasLeft}
    >
      <Link to="/">
        <div>Alejandro Aspinwall</div>
      </Link>
      {hidenav ? null : (
        <ul className={hidenav ? "invisible" : ""}>
          {/* Links to all pages */}
          {nodes.map((node, i) => {
            if (i === 2) {
              return (
                <Link to={"/profg"} tabIndex={"0"}>
                  <li>blog</li>
                </Link>
              )
            }
            const path = node.path
            if (
              path.includes("404") ||
              path === "/" ||
              blacklist.some(e => path.includes(e))
            ) {
              return null
            }
            return (
              <Link to={path} tabIndex={"0"}>
                <li>{path.replace(new RegExp("/", "g"), "")}</li>
              </Link>
            )
          })}
          {["projects", "contact"].map((link, i) => (
            <AnchorLink
              tabIndex={"0"}
              to={`/#${link}`}
              /* onClick={() => navigate(`/#${link}`)} */
              onKeyDown={e => {
                if (e.keyCode === 13) navigate(`/#${link}`)
              }}
            >
              <li>{link}</li>
            </AnchorLink>
          ))}
        </ul>
      )}
    </Container>
  )
}
