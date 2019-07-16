import React, { Component } from "react";

import './h2.css';

class H2 extends Component {

  render() {
    return <h2 {...this.props} className="h2" />;
  }
}

H2.propTypes = {};

H2.defaultProps = {};

export default H2;