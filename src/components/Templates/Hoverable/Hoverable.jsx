import React, { Component } from 'react';

// class Hoverable extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isHovering: false,
//     };

//     this.mouseEnter = this.mouseEnter.bind(this);
//     this.mouseLeave = this.mouseLeave.bind(this);
//   }

//   mouseEnter() {
//     this.setState({ isHovering: true });
//   }

//   mouseLeave() {
//     this.setState({ isHovering: false });
//   }

//   render() {
//     const { children } = this.props;
//     const { isHovering } = this.state;

//     return children(
//       isHovering,
//       this.mouseEnter,
//       this.mouseLeave,
//     );
//   }
// }

class Hoverable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
    };

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ isHovering: true });
  }

  mouseLeave() {
    this.setState({ isHovering: false });
  }

  render() {
    const { children } = this.props;
    const { isHovering } = this.state;

    return (
      <React.Fragment>
        <div
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          {children}
        </div>
        {isHovering
          && <div>Hovering right now!</div>
        }
      </React.Fragment>
    );
  }
}

export default Hoverable;


/*
getInitialState() {
  return {
    isMouseInside: false
  };
}
mouseEnter = () => {
  this.setState({ isMouseInside: true });
}
mouseLeave = () => {
  this.setState({ isMouseInside: false });
}
render() {
  return (
    <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
      {this.state.isMouseInside ? <button>Your Button</button> : null}
    </div>
  );
}
*/

/*
There is another approach that uses a reusable render component that would make components 'hoverable' or 'revealable' - whatever makes sense.

class Hoverable extends Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false
    };
  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }

  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  }

  render() {
    return this.props.children(
      this.state.isMouseInside, 
      this.mouseEnter, 
      this.mouseLeave
    )
  }
}
Then create the functional component that represents the hoverable element. E.g an album

const HoverableElement = props => (
  <Hoverable>
    {(isMouseInside, mouseEnter, mouseLeave) => (
      <div className="menu-item"> 
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <h2>{props.title}</h2>
        </div>
        {isMouseInside && props.children}
      </div>
    )}
  </Hoverable>
)
Finally, use the HoverableElement to render a list of elements that will each be 'hoverable' e.g an array of albums

class HoverableElementsList extends Component {
  render() {
    return (
      <div>
        <HoverableElement title="First Menu">
          <p>Some children content</p>
        </HoverableElement>
      </div>
    )
  }
}
*/
