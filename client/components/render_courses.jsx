import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourseDetails } from '../actions/index';

class RenderClassesforCourse extends Component {
  componentWillMount() {
    this.props.getCourseDetails();
  }

  renderClasses() {
    if (this.props.course.classes) {
      return this.props.course.classes.map(clas => (
        <div key={clas.id}>
          <li>
            <div>Name: {clas.name}</div>
            <div>Size: {clas.size}</div>
          </li>
        </div>
      ));
    }
    return (<div />);
  }

  render() {
    console.log('props:course: ', this.props.course);
    console.log('Classes in a course: ', this.props.course.classes);
    return (
      <div>
        <h3>Course Details</h3>
        <li>
          <div>Id: {this.props.course.id}</div>
          <div>Name: {this.props.course.name}</div>
          <div>Description: {this.props.course.description}</div>
          <div>
            <ul>
              {this.renderClasses()}
            </ul>
          </div>
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
    classes: React.PropTypes.arrayOf(React.PropTypes.object),
  }),
};

function mapStateToProps(state) {
  return { course: state.course };
}

export default connect(mapStateToProps, { getCourseDetails })(RenderClassesforCourse);
