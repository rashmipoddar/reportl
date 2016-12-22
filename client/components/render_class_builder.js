import React, { Component } from 'react';
import FormList from '../containers/class_builder_forms/class_form_list';
import FormDetail from '../containers/class_builder_forms/class_form_detail';

class RenderClassBuilder extends Component {

  render() {
    return (
      <div>
        <FormList />
        <FormDetail />
      </div>
    );
  }
}

export default RenderClassBuilder;
