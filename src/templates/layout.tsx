import React from "react"
import "../styles/styles.css"
//import Bio from "../components/bio"
import SEO from "../components/seo"
import { Wrapper, Space } from "../styles/components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link, graphql, useStaticQuery } from "gatsby"

interface Props {
  children: any
  invert?: boolean
}

export default function Layout({ children, invert }: Props) {
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
      <Navbar invert={invert} />
      {children}
      <Footer />
    </Wrapper>
  )
}
