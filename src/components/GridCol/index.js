import React from 'react'

const GridCol = props => {

  return (
    <div className={`column ${props.className && props.className || null}`}>
      {props.children}
    </div>
  )
}

export default GridCol
