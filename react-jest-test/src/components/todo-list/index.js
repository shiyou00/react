import React, { Component } from 'react';
import { Button } from 'antd';
import { add } from 'lodash';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleTest2 = this.handleTest2.bind(this);
  }
  handleTest (){
    console.log('test');
  };

  handleTest2() {
    console.log('test2');
  }

  sum(a, b) {
    return add(a, b);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="todo-list">
        {this.props.list.map((todo, index) => (<div key={index}>
          <span className="item-text ">{todo}</span>
          <Button onClick={() => this.props.deleteTodo(index)} >done</Button>
        </div>))}
      </div>
    );
  }
}
