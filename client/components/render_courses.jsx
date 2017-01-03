import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourseDetails } from '../actions/index';

class RenderClassesforCourse extends Component {
  componentWillMount() {
    this.props.getCourseDetails();
  }

  render() {
    console.log('props:course: ', this.props.course);
    return (
      <div>
        <h3>Course Details</h3>
        <li>
          <div>Id: {this.props.course.id}</div>
          <div>Name: {this.props.course.name}</div>
          <div>Description: {this.props.course.description}</div>
        </li>
      </div>
    );
  }
}

RenderClassesforCourse.propTypes = {
  getCourseDetails: React.PropTypes.func,
  course: React.PropTypes.shape({
    id: React.PropTypes.integer,
    name: React.PropTypes.string,
    description: React.PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return { course: state.course };
}

export default connect(mapStateToProps, { getCourseDetails })(RenderClassesforCourse);
