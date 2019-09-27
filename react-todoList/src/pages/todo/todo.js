import React, { Component } from 'react';
import './todo.css';
import { TodoInput } from "../../components/header/todoInput";
import { TodoWrap } from "../../components/body/todoWrap";
import { Hook } from "../hook/Hook";
import { Sku, WordAdder } from "../sku/Sku";

class Todo extends Component {

  render() {
    return (
      <div className="app">
        <TodoInput />
        <TodoWrap />
        <Hook />
        <Sku />
        <WordAdder />
      </div>
    );
  }
}

export default Todo;
