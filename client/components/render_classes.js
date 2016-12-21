import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllClasses } from '../actions/index';

class RenderClasses extends Component {
  componentWillMount() {
    this.props.getAllClasses();
  }

  renderClasses() {
    return this.props.allClasses.map(eachClass => (
      <li key={eachClass.firstName}>
        <div>Class Name: {eachClass.firstName} ; Class Description: {eachClass.lastName}</div>
      </li>
    ));
  }

  render() {
    return (
      <ol>
        {this.renderClasses()}
      </ol>
    );
  }
}

RenderClasses.propTypes = {
  getAllClasses: React.PropTypes.function,
  allClasses: React.PropTypes.arr,
};

function mapStateToProps(state) {
  return { allClasses: state.allClasses };
}

export default connect(mapStateToProps, { getAllClasses })(RenderClasses);
