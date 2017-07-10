import React from 'react';
import { withCurrentUser, Loading } from 'meteor/vulcan:core';
import Header from './common/Header.jsx'

        // <br />
        // Watch the gif below to see what will happen: 
        // <br />
        // <div className="gifs-details-image">
        //   <img style={{
        //     width: '450px',
        //     height: '450px',
        //   }} src="https://res.cloudinary.com/shortcutmagic/image/upload/v1498105564/" alt="Allow admin access"/>
        // </div>


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
        <h2>Administrative access</h2>
        <br />
        ShortcutMagic works very closely with your computer. These kinds of programs are often 
        <br />
        called assistive access programs. They can control limited parts of the computer for you,
        <br />
        like clicking buttons or typing by voice. ShortcutMagic interacts with your programs for you,
        <br />
        and to do all of that it needs administrative access. 
        <br />
        <br />
        Here is a gif showing what will happen:
        <br />
        <img style={{
          width: '450px',
          height: '450px',
        }} src="https://res.cloudinary.com/shortcutmagic/image/upload/v1498105564/wizard_x7n0am.png" alt="GifCommunity"/>
        <br />
        <br />
        <br />

      </div>

    }

  </div>

export default withCurrentUser(WelcomePermissions);