import React from 'react';
import { Components, withCurrentUser, getFragment } from 'meteor/vulcan:core';
import Gifs from '../modules/gifs/collection.js';

if (Meteor.isClient) {
  Meteor.startup(function() {
      const appName = "?app=";
      const shortcutName = "&shortcut=";
      if (this.location && this.location.search) {

        let shortcut = "";
        let app = "";

        this.location.search.split(appName).map(outer => outer.split(shortcutName).map(inner => {
          console.log(inner);
          if (inner && !app) app = inner;
          else if (inner && app) shortcut = inner;
        }));

        window.document.getElementsByName("app")[0].value = app;
        window.document.getElementsByName("shortcut")[0].value = shortcut;
      }
  });
}

const QuickUploadForm = ({currentUser, closeModal}) =>

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

export default withCurrentUser(QuickUploadForm);