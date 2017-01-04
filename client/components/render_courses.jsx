import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCourses } from '../actions/index';

class RenderClassesforCourse extends Component {
  componentWillMount() {
    this.props.getAllCourses();
  }

  renderCourses() {
    return this.props.allCourses.map(clas => (
      clas.data.map(courses => (
        <li><strong>{courses.name}</strong>: {courses.description} <br />
          <div>{courses.classes.map(singleClass => (
            <div>{singleClass.name} {singleClass.size}</div>
            ))}</div>
        </li>))));
  }

  render() {
    return (
      <div>
        <h3>Course Details</h3>
        <ol>
          {this.renderCourses()}
        </ol>
      </div>
    );
  }
}

RenderClassesforCourse.propTypes = {
  getAllCourses: React.PropTypes.func,
  allCourses: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { allCourses: state.allCourses };
}

export default connect(mapStateToProps, { getAllCourses })(RenderClassesforCourse);
