import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          <button><Link to="/">Login</Link>&nbsp;</button>
          <button><Link to="/class">Class Builder</Link></button>
          <button><Link to="/user">Create User</Link></button>
          <button><Link to="/classes">View All Classes</Link></button>
          <button><Link to="/users">View All Users</Link></button>
          <button><Link to="/updateprofile">Create Profile</Link></button>
          <button><Link to="/profile">View Profile</Link></button>
          <button><Link to="/department">View Department</Link></button>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
