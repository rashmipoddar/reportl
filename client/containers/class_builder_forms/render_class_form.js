import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllClasses } from '../../actions/index';

class RenderClassForm extends Component {

  componentWillMount() {
    this.props.getAllClasses();
  }

  renderClasses() {
    return this.props.allClasses.map(eachClass => (
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
  getAllClasses: React.PropTypes.function,
  allClasses: React.PropTypes.arr,
};

function mapStateToProps(state) {
  return { allClasses: state.allClasses };
}

export default connect(mapStateToProps, { getAllClasses })(RenderClassForm);
