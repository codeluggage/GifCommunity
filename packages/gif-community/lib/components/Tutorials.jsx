import React from 'react';
import { withCurrentUser, Loading } from 'meteor/vulcan:core';
import Header from './common/Header.jsx'

// TODO: Decide if the app has been downloaded by checking the user agent
const WelcomePermissions = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
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
        <h2>Learn about ShortcutMagic</h2>
        <br />
        <h4>The floating window</h4>
        <ul>
            <li>Hovering on top of other windows</li>
            <li>The window remembers where you want it to be</li>
        </ul>
        <br />
        <img style={{
          width: '450px',
          height: '450px',
        }} src="https://res.cloudinary.com/shortcutmagic/image/upload/v1498105564/" alt="GifCommunity"/>
        <br />
        <h4>Opening a program for the first time</h4>
        <ul>
            <li>Loading takes a while</li>
            <li>Contributing to the community makes it faster for everyone</li>
        </ul>
        <br />
        <img style={{
          width: '450px',
          height: '450px',
        }} src="https://res.cloudinary.com/shortcutmagic/image/upload/v1498105564/" alt="GifCommunity"/>
        <br />
        <h4>Exploring the shortcuts</h4>
        <ul>
            <li>Searching</li>
            <li>Hiding and adding favorites</li>
        </ul>
        <br />
        <img style={{
          width: '450px',
          height: '450px',
        }} src="https://res.cloudinary.com/shortcutmagic/image/upload/v1498105564/" alt="GifCommunity"/>
        <br />
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
        <br />

      </div>

    }

  </div>

export default withCurrentUser(WelcomePermissions);