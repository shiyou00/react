import React, { Component } from 'react';
import {Checkbox, Icon} from "antd";

export class TodoItem extends Component {
  render() {
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
