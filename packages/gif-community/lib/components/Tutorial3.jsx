import React from 'react';
import { withCurrentUser, Loading } from 'meteor/vulcan:core';
import Header from './common/Header.jsx'

// TODO: Decide if the app has been downloaded by checking the user agent
const Tutorial3 = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
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
        <h4>Using the shortcuts</h4>
        <ul>
            <li>Command and number keys</li>
            <li>Clicking to run</li>
        </ul>
        <br />
        <img style={{
          width: '450px',
          height: '450px',
        }} src="https://res.cloudinary.com/shortcutmagic/image/upload/v1498105564/" alt="GifCommunity"/>
      </div>
    }

  </div>

export default withCurrentUser(Tutorial3);
