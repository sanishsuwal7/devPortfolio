import React from "react"
import styled from "styled-components"
import Bio from "../components/bio"
import { Header, Wrapper } from "../styles/components"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Layout({ children }) {
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
    <Wrapper>
      <Link className="inh" to="/">
        <Header>{siteMetadata.title}</Header>
        <ul>
          {nodes.map(node => {
            const path = node.path
            if (path.includes("404") || path === "/") {
              return null
            }
            return (
              <Link to={path}>
                <li>{path.replace("/", "")}</li>
              </Link>
            )
          })}
        </ul>
      </Link>
      <Bio />
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Wrapper>
  )
}
