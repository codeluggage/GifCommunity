import React from 'react';
import { withCurrentUser, Loading } from 'meteor/vulcan:core';

import Header from './common/Header.jsx'

        // <br />
        // Watch the gif below to see what will happen: 
        // <br />
        // <div className="pics-details-image">
        //   <img style={{
        //     width: '450px',
        //     height: '450px',
        //   }} src="https://res.cloudinary.com/shortcutmagic/image/upload/v1498105564/" alt="Allow admin access"/>
        // </div>


// TODO: Decide if the app has been downloaded by checking the user agent
const WelcomePermissions = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div className="welcome-permissions">

    {loading ? 

      <Loading /> :

      <div className="welcome-permissions-content">

        Now, ShortcutMagic needs access to learn shortcuts from your programs.
        <br />
        This requires administrative access. This can sound scary, but it is just
        <br />
        a few clicks to give ShortcutMagic access, and then we are done. 
        <br />
        <ul>
          <li>Click the green button at the top of the screen</li>
          <li>Allow access by entering your password</li>
          <li>Wait for the ShortcutMagic window to finish loading shortcuts</li>
        </ul>
        <br />
        By the way, the code that makes all this work is open and freely available,
        <br />
        so ShortcutMagic is harmless and for everyone. 
        <br />
        <a href="https://github.com/codeluggage/ShortcutMagic">Advanced - Open a website with the code for ShortcutMagic to see how this works.</a>

      </div>

    }

  </div>

export default withCurrentUser(WelcomePermissions);