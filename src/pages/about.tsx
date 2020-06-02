import React from "react"
import Layout from "../templates/layout"
import PropTypes from "prop-types"
import { Wrapper, Hero, Section } from "../styles/components"
import Content, { HTMLContent } from "../components/Content"
import { graphql } from "gatsby"

export const AboutPageTemplate = ({ title, content }) => {
  const PageContent = Content
  //console.log(title)
  return (
    <Section>
      <Hero>{title}</Hero>
      <PageContent className="content" content={content} />
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
