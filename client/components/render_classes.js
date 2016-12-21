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
      <div>
        <h2>All Classes</h2>
        <ol>
          {this.renderClasses()}
        </ol>
      </div>
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
