import React from "react";
import { Link } from "gatsby";

export default ({path}) => (
  <p className={'ta-r spacing-top--sm'}>
    <Link to={path}>read more</Link>
  </p>
)