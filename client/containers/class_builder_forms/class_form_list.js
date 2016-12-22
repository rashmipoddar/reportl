import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectForm } from '../../actions/index';
import ClassMaker from './class-maker';
import ScheduleForm from './scheduling';
import ModuleForm from './modules';
import AssetForm from './assets';
import AnnouncementsForm from './announcements';
import AssignmentsForm from './assignments';
import EventsForm from './events';
import ExamsForm from './exams';

class FormList extends Component {

  render() {
    return (
      <div>
        <h2>This is the Form List</h2>
        <ol>
          <li>
            <button onClick={() => { this.props.selectForm(<ClassMaker />); }}>
              Class Maker
            </button>
          </li>
          <li>
            <button onClick={() => { this.props.selectForm(<ScheduleForm />); }}>
              Schedule Form
            </button>
          </li>
          <li>
            <button onClick={() => { this.props.selectForm(<ModuleForm />); }}>
              Module Form
            </button>
          </li>
          <li>
            <button onClick={() => { this.props.selectForm(<AssetForm />); }}>
              Asset Form
            </button>
          </li>
          <li>
            <button onClick={() => { this.props.selectForm(<AnnouncementsForm />); }}>
              Announcements Form
            </button>
          </li>
          <li>
            <button onClick={() => { this.props.selectForm(<AssignmentsForm />); }}>
              Assignments Form
            </button>
          </li>
          <li>
            <button onClick={() => { this.props.selectForm(<EventsForm />); }}>
              Events Form
            </button>
          </li>
          <li>
            <button onClick={() => { this.props.selectForm(<ExamsForm />); }}>
              Exams Form
            </button>
          </li>
        </ol>
      </div>
    );
  }
}

FormList.propTypes = {
  selectForm: React.PropTypes.function,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectForm }, dispatch);
}

function mapStateToProps(state) {
  return { selectedForm: state.selectedForm };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
