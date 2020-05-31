import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

export default function Navbar() {
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
    <Container>
      <Link to="/">
        <header>{siteMetadata.title}</header>
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
    </Container>
  )
}

const Container = styled.div`
  list-style: none;
  * {
    margin: 0;
  }
  ul {
    display: flex;
    justify-content: flex-start;
  }
  li {
    list-style: none;
    padding-right: 2rem;
  }
`
