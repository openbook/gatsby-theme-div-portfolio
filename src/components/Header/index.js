import React from 'react'
import HeaderLinks from '../HeaderLinks';
import { StaticQuery, graphql } from "gatsby"

class Header extends React.Component {
  render() {
    return (
      <StaticQuery
        query={siteMetaQuery}
        render={data => {
          const { title, description, links, role } = data.site.siteMetadata;
          return (
            <header id="header" className="blue">
              <div className="inner col-ml-auto">
                <h1 className='site-title'>{title}</h1>
                <h2>{role}</h2>
                <p>{description}</p>
                <HeaderLinks links={links} />
              </div>
            </header>
          )
        }}
        />
    )
  }
}

const siteMetaQuery = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
        description
        role
        links {
          github
          email
          linkedIn 
        }
      }
    }
  }
`

export default Header
