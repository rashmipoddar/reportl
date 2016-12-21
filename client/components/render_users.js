import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../actions/index';

class RenderUsers extends Component {
  componentWillMount() {
    this.props.getAllUsers();
  }

  renderUsers() {
    return this.props.allUsers.map(eachUser => (
      <li key={eachUser.name}>
        <div>Name: {eachUser.fullName}</div>
        <div>Email: {eachUser.email}</div>
      </li>
    ));
  }

  render() {
    return (
      <ul>
        {this.renderUsers()}
      </ul>
    );
  }
}

RenderUsers.propTypes = {
  getAllUsers: React.PropTypes.function,
  allUsers: React.PropTypes.arr,
};

function mapStateToProps(state) {
  return { allUsers: state.allUsers };
}

export default connect(mapStateToProps, { getAllUsers })(RenderUsers);
