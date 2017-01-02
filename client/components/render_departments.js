import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDepartmentInformation } from '../actions/index';

class RenderDepartments extends Component {
  componentWillMount() {
    this.props.getDepartmentInformation();
  }

  render() {
    return (
      <div>
        <h3>Departments</h3>
        <div>
          {this.props.department.id}
          {this.props.department.name}
        </div>
      </div>
    )
  }
}

RenderDepartment.propTypes = {
  getDepartmentInformation: React.PropTypes.function,
};

function mapStateToProps(state) {
  return { department: state.department };
}

export default connect(mapStateToProps, { getDepartmentInformation })(RenderDepartments);
