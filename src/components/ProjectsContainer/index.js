import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql} from "gatsby";
import { Grid, GridCol, ProjectSummary } from "../";

const ProjectsContainer = ({ number }) => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { 
            fields: [frontmatter___date], 
            order: DESC 
          }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                image {
                 childImageSharp {
                   fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                   }
                 }
               }
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  );

  let limit = (number === 0) ? allMdx.totalCount : number;

  return (
    <Grid>
      { allMdx.edges.slice(0, limit).map(item => (
        <GridCol className={'col-6 col-sm-12 spacing-bottom--sm'} key={`grid-${item.node.id}`}>
          <ProjectSummary
            image={item.node.frontmatter.image ? item.node.frontmatter.image.childImageSharp.fluid : null}
            title={item.node.frontmatter.title}
            slug={item.node.fields.slug}
            key={item.node.id}
          />
        </GridCol>
        )
      )}
    </Grid>
  )
}

ProjectsContainer.defaultProps = {
  number: 0
}

ProjectsContainer.propTypes = {
  number: PropTypes.number,
}

export default ProjectsContainer;
