const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  const projectsTemplate = path.resolve(`./src/templates/projects.js`)
  const blogQuery = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { internal: { ne: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )
  const projectsQuery = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {
            frontmatter: { internal: { ne: true } }
            fileAbsolutePath: { regex: "/projects/" }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (projectsQuery.errors) {
    throw projectsQuery.errors
  }
  if (blogQuery.errors) {
    throw blogQuery.errors
  }

  // Create blog posts pages.
  const posts = projectsQuery.data.allMarkdownRemark.edges
  const projects = blogQuery.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
  posts.forEach((post, index) => {
    createPage({
      path: post.node.fields.slug,
      component: projectsTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
