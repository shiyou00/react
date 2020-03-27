import React from 'react';

function MouseForHOC() {
  return function(WrappedComponent) {

    class Mouse extends React.Component {

      constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
      }

      handleMouseMove(event) {
        this.setState({
          x: event.clientX,
          y: event.clientY
        });
      }

      render() {
        return (
          <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
            <WrappedComponent mouse = {this.state} />
          </div>
        );
      }
    }
    return Mouse;
  }
}

class Cat extends React.Component  {

  render(){
    return (
      <div>Cat {this.props.mouse.x},{this.props.mouse.y}</div>
    )
  }
}

Cat = MouseForHOC()(Cat);

export {
  Cat
};
