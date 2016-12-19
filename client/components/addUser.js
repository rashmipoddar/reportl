import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class User extends Component {
  constructor(props) {
  super(props);

  this.state = {
    class_name: '',
    start_date: '',
    end_date: '',
  },

  render() {
    return (
      <form>
        <input type="text" placeholder="First Name">
        <input type="text" placeholder="Last Name">
        <input type="text" placeholder="Email Address">
      </form>
    );
  }
}

