// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Wrapper, Hero, Space, Section as S } from "../styles/components"
import Layout from "../templates/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import config from "dotenv/config"

const isDev = process.env.GATSBY_STATE === "development"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMdx: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const Section = styled(S)`
  margin-top: 1rem;
  min-height: 75vh;
`

const BlogIndex = ({ data }: PageProps<Data>) => {
  //const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={"blog, data analysis, javascript, react, nodejs, graphql"}
      />
      <Section>
        <article>
          <header>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={"/profg"}>
                {`Prof G: About The Sprinters `}
              </Link>
            </h3>
            <small>{`October 31, 2020`}</small>
          </header>
          <section>
            <p>{`Being part of Prof G’s brand strategy sprint has been unique from day one. It’s been a huge opportunity to meet people from very diverse backgrounds. We come together because we’re embracing change and want to be part of this massive learning experience.`}</p>
          </section>
        </article>
        {posts.map(({ node }) => {
          if (node.fields.slug.includes("drafts")) {
            return isDev ? (
              <div>
                <div>draft: </div>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {node.fields.slug}
                </Link>
              </div>
            ) : null
          }
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p>{node.frontmatter.description || node.excerpt}</p>
              </section>
            </article>
          )
        })}
      </Section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { internal: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
