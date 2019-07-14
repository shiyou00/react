import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export class TodoHandle extends Component {

  componentDidMount() {
    this.changeStatus('all');
  }

  changeStatus = (status)=>{
    this.props.changehandleStatus(status);
  };

  clear = ()=>{
    this.props.clearCompleted();
  };

  render() {
    return (
      <div className="todo-handle-position">
        <div className="todo-handle">
          <span className="todo-handle-total">总数: <span style={{color:"#1890ff"}}>{this.props.total}</span></span>
          <div className="todo-handle-status">
            <Button type={this.props.status === 'all' ? 'primary':''} onClick={this.changeStatus.bind(this,'all')}>所有</Button>
            <Button type={this.props.status === 'unchecked' ? 'primary':''} onClick={this.changeStatus.bind(this,'unchecked')}>未选中</Button>
            <Button type={this.props.status === 'checked' ? 'primary':''} onClick={this.changeStatus.bind(this,'checked')}>已选中</Button>
          </div>
          <div className="todo-handle-completed">
            <Button onClick={this.clear.bind(this)}>清除选中的</Button>
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
