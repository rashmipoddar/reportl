import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginSubmit } from '../actions/index';

class LoginField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onInputChangeUsername = this.onInputChangeUsername.bind(this);
    this.onInputChangePassword = this.onInputChangePassword.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  onInputChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.loginSubmit(JSON.stringify(this.state));
    this.setState({ username: '', password: '' });
  }

  renderList() {
    return this.props.login.map(logins =>
      <li key={logins}>{logins}</li>,
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="add a username"
            value={this.state.username}
            onChange={this.onInputChangeUsername}
          />
          <input
            placeholder="add a password"
            value={this.state.password}
            onChange={this.onInputChangePassword}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

LoginField.propTypes = {
  login: React.PropTypes.string,
  loginSubmit: React.PropTypes.function,
};

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginSubmit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginField);
