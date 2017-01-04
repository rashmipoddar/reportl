import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDepartmentInformation, selectDepartment } from '../actions/index';

class RenderDepartments extends Component {
  componentWillMount() {
    this.props.getDepartmentInformation();
  }

  renderDepartments() {
    return this.props.departments.map(department => (
      <div key={department.id}>
        <li><button onClick={() => { this.props.selectDepartment(department.id); }}>
          {department.name}
        </button></li>
      </div>
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
  selectDepartment: React.PropTypes.func,
  departments: React.PropTypes.arrayOf(React.PropTypes.object),

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDepartmentInformation, selectDepartment }, dispatch);
}

function mapStateToProps(state) {
  return { departments: state.departments };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderDepartments);
