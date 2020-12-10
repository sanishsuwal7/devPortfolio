import React from "react"
import Layout from "../templates/layout"
import PropTypes from "prop-types"
import { Section, Markdown } from "../styles/components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import styled from "styled-components"

export const Project = ({ data }) => {
  const { title, body } = data

  return (
    <Section top={true}>
      <h1>{title.split(":")[0]}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </Section>
  )
}

const ProjectPage = ({ data }) => {
  const {
    mdx: {
      body,
      frontmatter: { title },
    },
  } = data

  return (
    <Layout>
      <Project data={{ title, body }} />
    </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
