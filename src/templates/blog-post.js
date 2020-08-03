import React from "react"
import { Link, graphql } from "gatsby"
import { Space } from "../styles/components"
import Bio from "../components/bio"
import Layout from "../templates/layout"
import SEO from "../components/seo"
import Readtime from "../components/ReadTime"
import { rhythm, scale } from "../utils/typography"
import { sizing } from "../styles/components"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Space>
        <article>
          <header>
            <h1
              style={{
                marginTop: sizing.paddingExterior.base,
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <Readtime text={post.timeToRead} />
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: sizing.paddingExterior.base,
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: sizing.paddingExterior.base,
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Space>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
