import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ProjectSummary = ({image, title, slug}) => {
  return (
    <Link to={slug}>
      {image && <Img fluid={image} />}
      {!image && <h5>{title}</h5>}
    </Link>
)
}

export default ProjectSummary;