import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export class TodoHandle extends Component {

  componentDidMount() {
    this.props.changehandleStatus('all');

  }

  render() {
    const {status, total, changehandleStatus, clearCompleted} = this.props;
    return (
      <div className="todo-handle-position">
        <div className="todo-handle">
          <span className="todo-handle-total">总数: <span style={{color:"#1890ff"}}>{total}</span></span>
          <div className="todo-handle-status">
            <Button type={status === 'all' ? 'primary':''} onClick={()=>{changehandleStatus('all')}}>所有</Button>
            <Button type={status === 'unchecked' ? 'primary':''} onClick={()=>{changehandleStatus('unchecked')}}>未选中</Button>
            <Button type={status === 'checked' ? 'primary':''} onClick={()=>{changehandleStatus('checked')}}>已选中</Button>
          </div>
          <div className="todo-handle-completed">
            <Button onClick={clearCompleted}>清除选中的</Button>
          </div>
        </div>
      </div>
    );
  }
}
TodoHandle.propTypes = {
  status: PropTypes.oneOf(['all','unchecked','checked']),
  clearCompleted: PropTypes.func,
  changehandleStatus: PropTypes.func
};
