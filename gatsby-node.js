const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPost = require.resolve(`./src/templates/project.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {fileAbsolutePath: {regex: "/projects/"}}
          limit: 1000
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
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const projects = result.data.allMdx.edges

    projects.forEach((project, index) => {
      const previous = index === projects.length - 1 ? null : projects[index + 1].node
      const next = index === 0 ? null : projects[index - 1].node

      createPage({
        path: project.node.fields.slug,
        component: projectPost,
        context: {
          slug: project.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
    createNodeField({
      node,
      name: 'image',
      value: `${value}${node.frontmatter.image}`
    });
  }
}