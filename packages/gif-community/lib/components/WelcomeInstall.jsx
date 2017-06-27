import React from 'react';
import { withCurrentUser, Loading } from 'meteor/vulcan:core';

import Header from './common/Header.jsx'

// TODO: Decide if the app has been downloaded by checking the user agent

const WelcomeInstall = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div className="welcome-install">

    {loading ? 

      <Loading /> :

      <div className="welcome-install-content">

        The first step is to download ShortcutMagic. 
        <br />
        <a href="/welcome-permissions">Next</a>

      </div>

    }

  </div>

export default withCurrentUser(WelcomeInstall);