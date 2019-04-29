import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";

import MDXRenderer from "gatsby-mdx/mdx-renderer"

import { Layout, SEO } from "../components"

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          location={'test'}
        />
        <h2 className={'h1 spacing-bottom--sm'}>{post.frontmatter.title}</h2>
        <p className={'spacing-bottom'}
        >
          {post.frontmatter.date}
        </p>
        {post.frontmatter.image && <Img className={'spacing-bottom'} fluid={post.frontmatter.image.childImageSharp.fluid} />}
        {post.frontmatter.skills && <p><strong>Skills used:</strong> {post.frontmatter.skills}</p>}
        <MDXRenderer>
          {post.code.body}
        </MDXRenderer>
        <hr/>

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
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      code {
        body
        scope
      }
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
        description
        skills
        image {
         childImageSharp {
           fluid(maxWidth: 630, quality: 100) {
              ...GatsbyImageSharpFluid
           }
         }
       }
      }
    }
  }
`