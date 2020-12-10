const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  const projectsTemplate = path.resolve(`./src/templates/projects.js`)
  const blogQuery = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            frontmatter: { internal: { ne: true } }
            fileAbsolutePath: { regex: "/blog/" }
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
  const projectsQuery = await graphql(
    `
      {
        allMdx(
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
  const posts = blogQuery.data.allMdx.edges
  const projects = projectsQuery.data.allMdx.edges

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

  projects.forEach(post => {
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

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
