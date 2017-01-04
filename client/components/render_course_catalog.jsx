import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import FormList from '../containers/class_builder_forms/class_form_list';
// import FormDetail from '../containers/class_builder_forms/class_form_detail';
import { getDepartmentInformation } from '../actions/index';

class RenderCourseCatalog extends Component {
  componentWillMount() {
    getDepartmentInformation();
  }


}

RenderCourseCatalog.propTypes = {
  getDepartmentInformation: React.PropTypes.func,
  departments: React.PropTypes.arrayOf(React.PropTypes.string),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDepartmentInformation }, dispatch);
}

function mapStateToProps(state) {
  return {
    classId: state.classId,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderCourseCatalog);
