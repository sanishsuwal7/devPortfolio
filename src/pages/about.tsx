import React from "react"
import Layout from "../templates/layout"
import PropTypes from "prop-types"
import { Hero, Section, Markdown } from "../styles/components"
import ReadTime from "../components/ReadTime"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"

export const AboutPageTemplate = ({ title, content }) => {
  const { html } = content

  return (
    <Section>
      <Hero>{title}</Hero>
      <ReadTime text={html} />
      <Markdown dangerouslySetInnerHTML={{ __html: html }}></Markdown>
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
      <SEO title={"About me"} />
      <AboutPageTemplate title={title} content={{ html }} />
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
