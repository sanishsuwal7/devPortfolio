import React from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import styled from "styled-components"
import { colors } from "../styles/components"

export default function Navbar(props) {
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
  return (
    <Container invert={props.invert}>
      <div>
        <Link to="/">
          <div>Alejandro Aspinwall</div>
        </Link>
        <ul>
          {/* Links to all pages */}
          {nodes.map((node, i) => {
            const path = node.path
            if (path.includes("404") || path === "/" || path.includes("blog")) {
              return null
            }
            return (
              <Link to={path} tabIndex={"0"}>
                <li>{path.replace(new RegExp("/", "g"), "")}</li>
              </Link>
            )
          })}
          {["projects", "contact"].map((link, i) => (
            <div
              tabIndex={"0"}
              onClick={() => navigate(`/#${link}`)}
              onKeyDown={e => {
                if (e.keyCode === 13) navigate(`/#${link}`)
              }}
            >
              <li>{link}</li>
            </div>
          ))}
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.nav`
  * {
    color: ${props => (props.invert ? colors.white : colors.background)};
  }
  position: absolute;
  text-align: center;
  width: 100%;
  padding: 1rem 3rem;

  > div {
    position: relative;
  }

  ul {
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

    :hover {
      border-bottom: 10px ${colors.accent} double;
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
`
