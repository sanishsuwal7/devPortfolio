// Gatsby supports TypeScript natively!
import React, { useEffect } from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Section, Hero } from "../styles/components"

import Layout from "../templates/layout"

const Index = ({ data }) => {
  const {
    allMarkdownRemark: {
      nodes: [fileAbsolutePath],
    },
  } = data

  const content = fileAbsolutePath.frontmatter
  const { title, subtitle, action } = content.mainpitch
  return (
    <Layout>
      <Section>
        <Hero>{title}</Hero>
        <p>{subtitle}</p>
        <button>{action}</button>
        <section dangerouslySetInnerHTML={{ __html: fileAbsolutePath.html }} />
      </Section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/landing/" } }) {
      nodes {
        fileAbsolutePath
        html
        frontmatter {
          title
          mainpitch {
            title
            subtitle
            action
          }
        }
      }
    }
  }
`
