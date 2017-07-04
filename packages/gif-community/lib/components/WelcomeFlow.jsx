import React from 'react';
import { withCurrentUser, Loading } from 'meteor/vulcan:core';

const WelcomeFlow = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div className="window-content" style={{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
  }}>

    {loading ? 

      <Loading /> :
      <div>
        <h2>Let's Install ShortcutMagic</h2>
        <br />
        Installing ShortcutMagic is easy, but it requires administrative access. 
        <br />
        This is because it needs to read shortcuts from your programs.
        <br />
        <br />
        If something does not work, please send en email to matias@shortcutmagic.com so I can help! 
        <br />
        <br />
        <a className="btn btn-primary" href="/welcome-permissions">Continue</a>
      </div>
    }

  </div>

export default withCurrentUser(WelcomeFlow);