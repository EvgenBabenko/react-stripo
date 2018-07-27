import React from 'react';

import Hoverable from '../Hoverable/Hoverable';

const HoverableElement = props => (
  <Hoverable>
    {(isHovering, mouseEnter, mouseLeave) => (
      <div className="menu-item">
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <h2>{props.title}</h2>
        </div>
        {isHovering && props.children}
      </div>
    )}
  </Hoverable>
);

export default HoverableElement;
