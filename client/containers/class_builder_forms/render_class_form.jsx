import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClassById } from '../../actions/index';

class RenderClassForm extends Component {

  componentWillMount() {
    this.props.getClassById(this.props.classId);
  }

  renderClasses() {
    return this.props.selectedClass.map(eachClass => (
      <li key={eachClass.class_name}>
        <div>Class Name: {eachClass.name} ; Class Description: {eachClass.course_id}</div>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h2>All Classes</h2>
        <ol>
          {this.renderClasses()}
        </ol>
      </div>
    );
  }
}

RenderClassForm.propTypes = {
  getClassById: React.PropTypes.func,
  classId: React.PropTypes.func,
  selectedClass: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { classId: state.classId, selectedClass: state.selectedClass };
}

export default connect(mapStateToProps, { getClassById })(RenderClassForm);
