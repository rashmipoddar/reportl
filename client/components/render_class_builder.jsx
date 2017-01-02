import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormList from '../containers/class_builder_forms/class_form_list';
import FormDetail from '../containers/class_builder_forms/class_form_detail';
import { addClassId } from '../actions/index';

class RenderClassBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localclassId: '',
      visibility: { visibility: 'visibile' },
    };

    this.onIdSubmit = this.onIdSubmit.bind(this);
    this.onInputChangeId = this.onInputChangeId.bind(this);
  }

  onInputChangeId(event) {
    this.setState({ localclassId: event.target.value });
  }

  onIdSubmit(event) {
    event.preventDefault();
    this.props.addClassId(this.state.localclassId);
    this.setState({ localclassId: '', visibility: { visibility: 'hidden' } });
  }

  renderClassId() {
    return (
      <h4>Class Id: {this.props.classId}</h4>
    );
  }

  render() {
    return (
      <div>
        <FormList />
        <h3>Add Class Id</h3>
        <div>{this.renderClassId()}</div>
        <div style={this.state.visibility}>
          <form>
            <input
              placeholder="ClassId"
              value={this.state.classId}
              onChange={this.onInputChangeId}
            />
            <button onClick={this.onIdSubmit}>Add Id</button>
          </form>
        </div>
        <FormDetail />
      </div>
    );
  }
}

RenderClassBuilder.propTypes = {
  addClassId: React.PropTypes.func,
  classId: React.PropTypes.arrayOf(React.PropTypes.number),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addClassId }, dispatch);
}

function mapStateToProps(state) {
  return {
    classId: state.classId,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderClassBuilder);
