import React from 'react';
import { browserHistory } from 'react-router'
import { Components, withCurrentUser, getFragment } from 'meteor/vulcan:core';
import Gifs from '../modules/gifs/collection.js';

let shortcutVal = "";
let appVal = "";
let fileVal = "";

function preFillForm() {
  const appName = "?app=";
  const shortcutName = "&shortcut=";
  const fileName = "&gif=";

  if (this.location && this.location.search) {
    // Split the query parameters apart and grab the values
    this.location.search.split(appName).map(outer => outer.split(shortcutName).map(mid => mid.split(fileName).map(inner => {
      if (inner) {
        // Split in 3
        if (!appVal) appVal = inner;
        else if (!shortcutVal) shortcutVal = inner;
        else if (!fileVal) fileVal = inner;
      }
    })));

    // Pre fill form to upload gif with query parameter values
    // window.document.getElementsByName("app")[0].value = appVal;
    // window.document.getElementsByName("shortcut")[0].value = shortcutVal;
    window.document.getElementById("gif").value = fileVal;

    return {
      app: appVal,
      shortcut: shortcutVal,
      // Gif: fileVal,
    };
  }
}

function successRedirect() {
  browserHistory.push('/');
}

// if (Meteor.isClient) {
//   Meteor.startup(preFillForm);
// }

const QuickUploadForm = ({currentUser}) =>

  <div>

    <h2>Thank you for contributing to the community!</h2>
    <br />
    <br />

    <i>Click here to find it on your computer (it was recorded as:</i> <input style={{width: '30%'}} type="text" readOnly id="gif"></input><i>)</i>

    <br />
    <br />

    {Gifs.options.mutations.new.check(currentUser) ?
      <Components.SmartForm 
        collection={Gifs}
        mutationFragment={getFragment('GifsItemFragment')}
        successCallback={successRedirect}
        prefilledProps={preFillForm()}
      /> :
      null
    }

  </div>

export default withCurrentUser(QuickUploadForm);