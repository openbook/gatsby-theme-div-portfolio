import React from 'react'

const Grid = props => {

  return (
    <div className={`columns ${props.className && props.className || null}`}>
      {props.children}
    </div>
  )
}

export default Grid
