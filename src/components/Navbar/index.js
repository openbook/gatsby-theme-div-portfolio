import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

export default () => (
  <Location>
    {({location}) => (
      <nav className={'navbar'}>
        <section className="navbar-section">
          <Link to={'/'} className={`navbar-item ${location.pathname === '/' ? 'active' : null}`}>Home</Link>
          <Link to={'/about'} className={`navbar-item ${location.pathname === '/about' ? 'active' : null}`}>About</Link>
          <Link to={'/projects'} className={`navbar-item ${location.pathname === '/projects' ? 'active' : null}`}>Projects</Link>
        </section>
      </nav>
    )}
  </Location>
)

