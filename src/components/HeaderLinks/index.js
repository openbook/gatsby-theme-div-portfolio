import React from 'react'

class HeaderLinks extends React.Component {
  render() {
    const { github, email, linkedIn } = this.props.links
    return (
      <div id="footer">
        <div className="inner">
          <ul className={'list-inline--spaced mx-0 px-0'}>
            <li className={'list-inline-item'}>
              <a href={github} className={'link link--icon'}>
                <i className='icon icon--github' />
                <span className={'sr-only'}>Github</span>
              </a>
            </li>
            <li className={'list-inline-item'}>
              <a href={linkedIn} className={'link link--icon'}>
                <i className='icon icon--linkedin' />
                <span className={'sr-only'}>LinkedIn</span>
              </a>
            </li>
            <li className={'list-inline-item'}>
              <a href={`mailto:${email}`}>
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderLinks