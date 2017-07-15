/* 

A component to configure the "edit gif" form.

*/

import React, { PropTypes, Component } from 'react';
import { Components, registerComponent, getFragment } from "meteor/vulcan:core";

import Gifs from '../../modules/gifs/collection.js';

const GifsEditForm = ({gifId, closeModal}) =>

  <Components.SmartForm 
    collection={Gifs}
    documentId={gifId}
    mutationFragment={getFragment('GifsDetailsFragment')}
    showRemove={true}
    successCallback={document => {
      closeModal();
    }}
  />

export default GifsEditForm;