import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markPresent } from '../actions/index';
import MeetingFormMaker from '../containers/setMeeting';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const cardStyle = {
  display: 'block',
  borderStyle: 'solid',
  backgroundColor: 'white',
  height: '250px',
  width: '220px',
  margin: '10px',
  boxShadow: '10px 10px 5px lightgrey',
  borderWidth: 'thin',
  fontSize: 'x-large',
};

const thumbnailStyle = {
  height: '200px',
  width: '200px',
};

class RenderAttendees extends Component {

  RenderAttendees() {
    console.log('props: attendees: ', this.props.attendees);
    return this.props.attendees.map(eachAttendee => (
      <button
        onClick={() => {
          markPresent(eachAttendee.id); // placeholder
        }}
        style={cardStyle}
      >
        <img style={thumbnailStyle} alt="Attendee" src="http://localhost:8000/api/files/1" />
        {/* <img alt="Attendee" src={eachAttendee.user.imgUrl} />   */}
        <div>{eachAttendee.user.fullName}</div>
      </button>
    ));
  }

  render() {
    return (
      <div style={containerStyle}>
        <MeetingFormMaker />
        {this.RenderAttendees()}
      </div>
    );
  }
}

RenderAttendees.propTypes = {
  attendees: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  console.log('state in mapStateToProps: ', state);
  return {
    attendees: state.attendees,
  };
}

export default connect(mapStateToProps)(RenderAttendees);
