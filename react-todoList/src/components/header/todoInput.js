import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { emitter } from '../../processors';

export class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleTodo = () => {
    if(this.state.inputValue === ''){
      return ;
    }
    emitter.emit('changeMessage', this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  };

  render() {
    return (
      <div style={{display: 'flex'}}>
        <Input placeholder="输入你想做的事情"
               value={this.state.inputValue}
               onChange={this.handleChange.bind(this)}
        />
        <Button style={{marginLeft: '8px'}} type="primary" onClick={this.handleTodo.bind(this)}>添加</Button>
      </div>
    );
  }
}

