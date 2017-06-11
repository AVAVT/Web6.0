import React, { Component } from 'react';

class UserBox extends Component {
  render() {
    return (
      <div className="col-md-3 user_box">
        <button><span className="glyphicon glyphicon-camera" aria-hidden="true"></span></button>
        <button><span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></button>
        <div className="current_user_name">Bach Le</div>
      </div>
    );
  }
}

export default UserBox;
