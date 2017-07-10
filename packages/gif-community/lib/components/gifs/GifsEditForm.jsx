/* 

A component to configure the "edit gif" form.

*/

import React, { PropTypes, Component } from 'react';
import { Components, registerComponent, getFragment } from "meteor/vulcan:core";

import Gifs from '../../modules/gifs/collection.js';

const GifsEditForm = ({documentId, closeModal}) =>

  <Components.SmartForm 
    collection={Gifs}
    documentId={documentId}
    mutationFragment={getFragment('GifsDetailsFragment')}
    showRemove={true}
    successCallback={document => {
      closeModal();
    }}
  />

export default GifsEditForm;