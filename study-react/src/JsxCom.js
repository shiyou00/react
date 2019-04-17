import React, { Component } from 'react';

class JsxCom extends Component {
    user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    render() {
      return (
        <div className="JsxCom">
          <h1>
            Hello, {this.formatName(this.user)}!
          </h1>
        </div>
      );
    }
}

export default JsxCom;
