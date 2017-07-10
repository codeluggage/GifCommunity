/* 

A component to configure the "new comment" form.

The "prefilledProps" option lets you prefill specific form fields
(in this case "gifId"). This works even if the field is not actually
displayed in the form, as is the case here
(gifId's "hidden" property is set to true in the Comments schema)

*/

import React, { PropTypes, Component } from 'react';
import { Components, registerComponent, getFragment } from 'meteor/vulcan:core';

import Comments from '../../modules/comments/collection.js';

const CommentsNewForm = ({gifId}) =>

  <div className="comments-new-form">

      <Components.SmartForm 
        collection={Comments}
        mutationFragment={getFragment('CommentsItemFragment')}
        prefilledProps={{gifId}}
      />

  </div>

export default CommentsNewForm;