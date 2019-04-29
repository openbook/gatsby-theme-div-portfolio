import React from 'react';

const Grid = props => (
  <section className={`${props.className ? props.className : 'spacing-bottom--lg'}`}>
    {props.children}
  </section>
);

export default Grid;
