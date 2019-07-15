import React, { Component } from 'react';

export class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { area: ''};
  }
  handleChange(e) {
    this.setState({
      area: e.target.value
    });
  }
  render() {
    const { area } = this.state;
    return (
      <div>
        <select value={area} onChange={this.handleChange}>
          <option value="beijing">北京</option>
          <option value="shanghai">上海</option>
          <option value="hangzhou">杭州</option>
        </select>
      </div>
    );
  }
}
