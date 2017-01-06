import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { searchCalendar } from '../actions/index';

class renderDailySchedule extends Component {
  componentWillMount() {
    this.props.searchCalendar({
    });
  }

  renderScheduleInformation() {
    );
  }

  render() {
    return (
      <div>
      </div>
    );
  }

}

renderDailySchedule.propTypes = {
  searchCalendar: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCalendar }, dispatch);
}

function mapStateToProps(state) {
  return { calendarSearchResult: state.calendarSearchResult };
}

export default connect(mapStateToProps, mapDispatchToProps)(renderDailySchedule);
