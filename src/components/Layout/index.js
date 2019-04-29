import React from 'react'
import { MDXProvider } from '@mdx-js/tag';
import { Header, Navbar, SEO } from '../index'
import { Location } from '@reach/router'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <MDXProvider>
        <Location>
          {({ location }) => <SEO location={location}/>}
        </Location>
        <Header />
        <div id='main'>
          <Navbar />
          {children}
        </div>
      </MDXProvider>
    )
  }
}

export default Layout