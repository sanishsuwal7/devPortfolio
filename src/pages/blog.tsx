// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Wrapper, Hero, Space } from "../styles/components"
import Layout from "../templates/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
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

const BlogIndex = ({ data }: PageProps<Data>) => {
  //const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <Space>
        <article>
          <header>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={"/profg"}>
                {`Prof G's Brand Strategy Sprint - About The Sprinters`}
              </Link>
            </h3>
            <small>{`October 31, 2020`}</small>
          </header>
          <section>
            <p>{`Being part of Prof G’s brand strategy sprint has been unique from day one. It’s been a huge opportunity to meet people from very diverse backgrounds. We come together because we’re embracing change and want to be part of this massive learning experience.`}</p>
          </section>
        </article>
        {posts.map(({ node }) => {
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
      </Space>
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
    allMarkdownRemark(
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
            draft
          }
        }
      }
    }
  }
`
