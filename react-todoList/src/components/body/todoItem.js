import React, { Component } from 'react';
import {Checkbox, Icon} from "antd";
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  constructor(props){
    super(props);
    console.log('初始化组件状态');
  }

  componentWillMount() {
    console.log('组件挂载之前');
  }

  componentDidMount() {
    console.log('组件挂载完成');
  }

  componentWillUpdate = () =>{
    console.log('组件将要更新');
  }

  componentDidUpdate = () =>{
    console.log('组件更新完成');
  }

  componentWillUnmount = () =>{
    console.log('组件将卸载');
  }

  render() {

    console.log('组件挂载中');

    const listItems = this.props.todoList.map((item) =>
      <li key={item.id} className="todo-item">
        <Checkbox checked={item.checked} onChange={(e)=>{this.props.checkboxChange(item,e)}}>
          <span className="todo-content">{item.content}</span>
        </Checkbox>
        <Icon className="todo-close" type="close" onClick={()=>{this.props.deleteTodo(item)}} />
      </li>
    );
    return (
      <React.Fragment>
        {
          listItems.length > 0 ?
            (<ul>
              {listItems}
            </ul>)
            :
            (<p className="todo-null">暂无待做事项</p>)
        }
      </React.Fragment>
    );
  }
}

TodoItem.propTypes = {
  todoList: PropTypes.array,
  checkboxChange: PropTypes.func,
  deleteTodo: PropTypes.func
};
