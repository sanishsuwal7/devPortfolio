import React from "react"
import Layout from "../templates/layout"
import PropTypes from "prop-types"
import { Hero, Section, Markdown } from "../styles/components"
import Social from "../components/ui/Social"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Button from "../components/ui/button"

export const AboutPageTemplate = ({ title, content }) => {
  const { body } = content

  return (
    <Section>
      <Hero>{title}</Hero>
      <MDXRenderer>{body}</MDXRenderer>
      <Social inline={true} />
    </Section>
  )
}

const AboutPage = ({ data }) => {
  const {
    allMdx: {
      nodes: [fileAbsolutePath],
    },
  } = data

  const content = fileAbsolutePath.frontmatter
  const { title } = content
  const { body } = fileAbsolutePath

  return (
    <Layout>
      <SEO
        title={"About Alejandro Aspinwall"}
        keywords={"software engineer, JavaScript, nodejs, nextjs"}
      />
      <AboutPageTemplate title={title} content={{ body }} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
          internal
        }
        body
      }
    }
  }
`
