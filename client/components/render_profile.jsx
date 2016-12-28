import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileInformation } from '../actions/index';

class RenderProfile extends Component {
  componentWillMount() {
    this.props.getProfileInformation();
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <div>
          {this.props.profile.image}
          {this.props.profile.email}
          {this.props.profile.description}
          {this.props.profile.address}
          {this.props.profile.phone}
          {this.props.profile.dob}
        </div>
      </div>
    );
  }
}

RenderProfile.propTypes = {
  getProfileInformation: React.PropTypes.func,
};

function mapStateToProps(state) {
  return { profile: state.profile };
}

export default connect(mapStateToProps, { getProfileInformation })(RenderProfile);
