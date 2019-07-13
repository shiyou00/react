import React, { Component } from 'react';
import './todo.css';
import { TodoInput } from "../../components/header/todoInput";
import { TodoWrap } from "../../components/body/todoWrap";

class Todo extends Component {

  render() {
    return (
      <div className="app">
        <TodoInput />
        <TodoWrap />
      </div>
    );
  }
}

export default Todo;
