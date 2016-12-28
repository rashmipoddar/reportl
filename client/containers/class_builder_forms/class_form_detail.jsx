import React from 'react';
import { connect } from 'react-redux';

const FormDetail = ({ selectedForm }) => (
  <div>
    { selectedForm[0] }
  </div>
);

FormDetail.propTypes = {
  selectForm: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    selectedForm: state.selectedForm,
  };
}

export default connect(mapStateToProps)(FormDetail);
