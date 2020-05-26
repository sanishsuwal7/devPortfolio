import React from "react"
import Layout from "../templates/layout"
import { graphql } from "gatsby"

export default function about({ data }) {
  const {
    allMarkdownRemark: {
      nodes: [fileAbsolutePath],
    },
  } = data
  console.log(fileAbsolutePath)
  const content = fileAbsolutePath.frontmatter
  return (
    <Layout>
      <h3>{content.title}</h3>
      <p>{fileAbsolutePath.excerpt}</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
        }
        excerpt
      }
    }
  }
`
