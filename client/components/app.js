import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Link to='/'>|....Login....|</Link>&nbsp;
          <Link to='/class'>|....Class Builder....|</Link>
          <Link to='/user'>|....Create User....|</Link>
          <Link to='/classes'>|....Get Classes....|</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
