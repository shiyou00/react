import React, { Component } from 'react';
import { createRandomId, emitter } from "../../processors";
import { message } from 'antd';
import "./todo.css";
import { TodoHandle } from "../footer/todohandle";
import { TodoItem } from "./todoItem";
import { cloneDeep } from "lodash";

export class TodoWrap extends Component {

  list = [];
  eventEmitter = null;

  constructor(props){
    super(props);
    this.state = {
      todoList:[],
      status:'all'
    }
  }

  componentDidMount() {
    this.eventEmitter = emitter.on('changeMessage', (todo) => {
      const obj = {
        id: createRandomId(),
        content: todo,
        checked: false
      };
      this.list.push(obj);
      this.updateTodoList();
    });
  }

  checkboxChange = (item,e)=>{
    this.list.forEach((val)=>{
      if(val.id === item.id){
        item.checked = e.target.checked;
      }
    });
    this.updateTodoList();
  };

  componentWillUnmount() {
    emitter.off('changeMessage',this.eventEmitter);
  }

  deleteTodo = (todo)=>{
    this.list.forEach((item,index)=>{
      if(item.id === todo.id){
        this.list.splice(index,1);
      }
    });
    this.updateTodoList();
  };

  updateTodoList = ()=>{
    this.setState({
      todoList: this.list
    });
  };

  setStatus = (status)=>{
    this.setState({
      status: status
    })
  };


  changeStatus = (status) =>{
    if(this.list.length === 0){
      return ;
    }
    let _todoList = cloneDeep(this.list);
    _todoList = _todoList.filter((item)=>{
      if(status === 'checked'){
        return item.checked;
      }else if(status === 'unchecked'){
        return !item.checked
      }
      return true;
    });
    this.setState({
      todoList: _todoList
    });
    this.setStatus(status);
  };

  clearCompleted = ()=>{
    if((this.list.filter((item)=>{
      return item.checked
    })).length === 0){
      message.info('没有代办事项可删除');
      return ;
    }
    this.list = this.list.filter(item => !item.checked);
    this.updateTodoList();
    message.info('删除成功');
    this.setStatus('all');
  };

  render() {

    return (
      <div className="todo-wrap">
        <TodoItem todoList={this.state.todoList} checkboxChange={this.checkboxChange} deleteTodo={this.deleteTodo}/>
        <TodoHandle total={this.state.todoList.length} status={this.state.status} changehandleStatus={this.changeStatus} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}
