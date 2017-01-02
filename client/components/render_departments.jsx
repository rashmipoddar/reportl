import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDepartmentInformation } from '../actions/index';

class RenderDepartments extends Component {
  componentWillMount() {
    this.props.getDepartmentInformation();
  }

  renderDepartments() {
    console.log('props: department: ', this.props.department);
    return this.props.department.map(eachDepartment => (
      eachDepartment.map(singleDepartment =>
        <div>
          <li key={singleDepartment.id}>
            <div>ID: {singleDepartment.id}</div>
            <div>Name: {singleDepartment.name}</div>
          </li>
        </div>
      )

    ));
  }

  render() {
    return (
      <div>
        <h3>Departments</h3>
        <ul>
          {this.renderDepartments()}
        </ul>
      </div>
    );
  }

}

RenderDepartments.propTypes = {
  getDepartmentInformation: React.PropTypes.func,
};

function mapStateToProps(state) {
  return { department: state.department };
}

export default connect(mapStateToProps, { getDepartmentInformation })(RenderDepartments);
