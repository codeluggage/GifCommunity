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

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
      }}>

        <h1>Starting ShortcutMagic</h1>
        <br />
        <h4>
        To start ShortcutMagic, it needs administrative access
        </h4>
        <h4>
        which is unlocked with your computer password. 
        </h4>
        <br />
        <h4>
        ShortcutMagic doesn't know your password and it is never stored.
        </h4>
        <br />

      </div>
    }
  </div>

  
export default withCurrentUser(WelcomeFlow);