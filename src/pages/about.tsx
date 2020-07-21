import React from "react"
import Layout from "../templates/layout"
import PropTypes from "prop-types"
import { Hero, Section, Markdown } from "../styles/components"
import { graphql } from "gatsby"

export const AboutPageTemplate = ({ title, content }) => {
  return (
    <Section>
      <Hero>{title}</Hero>
      <Markdown dangerouslySetInnerHTML={{ __html: content }}></Markdown>
    </Section>
  )
}

const AboutPage = ({ data }) => {
  const {
    allMarkdownRemark: {
      nodes: [fileAbsolutePath],
    },
  } = data
  const content = fileAbsolutePath.frontmatter
  const { title } = content
  const { html } = fileAbsolutePath

  return (
    <Layout>
      <AboutPageTemplate title={title} content={html} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
          internal
        }
        html
      }
    }
  }
`
