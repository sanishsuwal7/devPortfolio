import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
          <div>{siteMetadata.title}</div>
        </Link>
        <ul>
          {/* Links to all pages */}
          {nodes.map(node => {
            const path = node.path
            if (path.includes("404") || path === "/") {
              return null
            }
            return (
              <Link to={path}>
                <li>{path.replace(new RegExp("/", "g"), "")}</li>
              </Link>
            )
          })}
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
  display: flex;
  width: 100%;
  padding: 1rem 3rem;
  > div {
    position: relative;
    width: 100%;
  }

  ul {
    position: absolute;
    top: 0;
    right: 0;
  }

  li {
    position: relative;
    margin-right: 2rem;
    border-bottom: 5px ${colors.accent} solid;
    transition: border-bottom 0.2s ease-in-out;

    :hover {
      border-bottom: 10px ${colors.accent} double;
    }
  }
`
