const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const url = 
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
            frontmatter {
                posttype
            }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(edge => {
        if (edge.node.frontmatter.posttype === 'project') {
            createPage({
              path:  edge.node.fields.slug,
              component: path.resolve(`./src/templates/project-post-template.js`),
              context: {
                slug:  edge.node.fields.slug,
              }
            });
          } else { // blog post
            createPage({
              path: edge.node.fields.slug,
              component: path.resolve(`./src/templates/blog-post-template.js`),
              context: {
                slug: edge.node.fields.slug, 
              }
            });
          }
      })
    })
  }