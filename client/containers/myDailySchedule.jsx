import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchCalendar } from '../actions/index';

const calendarStyle = {
  display: 'block',
  borderStyle: 'solid',
  backgroundColor: 'white',
  height: '500px',
  width: '500px',
  margin: '10px',
  borderWidth: 'thick',
  fontSize: 'x-large',
};

const meetingStyle = {
  borderStyle: 'none',
  backgroundColor: 'grey',
  height: '100px',
  width: '500px',
  margin: '50px 0 0 0',
  fontSize: '25px',
};

class renderDailySchedule extends Component {
  componentWillMount() {
    this.props.searchCalendar({
      from_day_of_month: 17,
      from_month: 'February',
      to_day_of_month: 17,
      to_month: 'February',
    });
  }

  renderScheduleInformation() {
    return (
      <div>{this.props.calendarSearchResult.map(day => (
        <div>
          <div>{day.weekDay}</div>
          <div>{day.meetings.map(meetings => (
            <button style={meetingStyle}>
              <div>{meetings.class.name}</div>
              <div>{meetings.startTime}</div>
              <div>{meetings.endTime}</div>
            </button>
            ))}</div>
        </div>
      ))}</div>
    );
  }
  render() {
    return (
      <div>
        <div>
          <h3>Daily Schedule</h3>
          <div style={calendarStyle}>
            {this.renderScheduleInformation()}
          </div>
        </div>
      </div>
    );
  }

}

renderDailySchedule.propTypes = {
  searchCalendar: React.PropTypes.func,
  calendarSearchResult: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCalendar }, dispatch);
}

function mapStateToProps(state) {
  return { calendarSearchResult: state.calendarSearchResult };
}

export default connect(mapStateToProps, { searchCalendar })(renderDailySchedule);
