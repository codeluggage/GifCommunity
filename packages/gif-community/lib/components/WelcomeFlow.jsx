import React from 'react';
import { withCurrentUser, Loading } from 'meteor/vulcan:core';

import Header from './common/Header.jsx'

const WelcomeFlow = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div className="welcome-flow">

    {loading ? 

      <Loading /> :

      <div className="welcome-flow-content">

        Welcome!
        <br />
        We will now install and set up ShortcutMagic on your computer. 
        <br />
        ShortcutMagic requires some special permissions, so it is important
        <br />
        that you follow the instructions step by step. 
        <br />
        <br />
        If you have any problems, please reach out to matias@shortcutmagic.com so we can help you! 
        <br />
        <br />
        <a href="/welcome-permissions">Next</a>

      </div>

    }

  </div>

export default withCurrentUser(WelcomeFlow);