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

  
export default withCurrentUser(WelcomeFlow);