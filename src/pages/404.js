import React from "react"
import { graphql } from "gatsby"
import { Section } from "../styles/components"
import Layout from "../templates/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <Section>
        <h1>404 Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
