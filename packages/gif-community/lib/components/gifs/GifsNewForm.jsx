/* 

A component to configure the "new gif" form.

We're using Gifs.options.mutations.new.check (defined in modules/gifs/mutations.js)
to check if the user has the proper permissions to actually insert a new gifture. 

*/

import React, { PropTypes, Component } from 'react';
import { Components, registerComponent, withCurrentUser, getFragment } from 'meteor/vulcan:core';

import Gifs from '../../modules/gifs/collection.js';

const GifsNewForm = ({currentUser, closeModal}) =>

  <div>

    {Gifs.options.mutations.new.check(currentUser) ?
      <Components.SmartForm 
        collection={Gifs}
        mutationFragment={getFragment('GifsItemFragment')}
        successCallback={closeModal}
      /> :
      null
    }

  </div>

export default withCurrentUser(GifsNewForm);