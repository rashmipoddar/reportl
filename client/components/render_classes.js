import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllClasses } from '../actions/index';

class RenderClasses extends Component {
  componentWillMount() {
    this.props.getAllClasses();
  }

  renderClasses() {
    this.props.allClasses.map((eachClass) => (
        <li key={eachClass.class_name}>
          <div>Class Name: {eachClass.class_name}</div>
          <div>Class Description: {eachClass.description}</div>
        </li>
      );
    });

  render() {
    return (
      <ul>
        {this.renderClasses()}
      </ul>
    );
  }
}

RenderClasses.propTypes = {
  getAllClasses: React.PropTypes.function,
  allClasses: React.PropTypes.arr,
};

function mapStateToProps(state) {
  return { allClasses: state.allClasses.all };
}

export default connect(mapStateToProps, { getAllClasses })(RenderClasses);
