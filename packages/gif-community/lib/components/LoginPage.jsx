import React, { PropTypes, Component } from 'react';
import { Components, withCurrentUser, Loading } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import PicsNewForm from './pics/PicsNewForm';
import PicsList from './pics/PicsList.jsx';

// navigation bar component when the user is logged out

const NavLoggedOut = ({currentUser}) =>

  <div className="header-nav header-logged-out">
    
      <Components.ModalTrigger label="Sign Up/Log In" size="small">
        <Components.AccountsLoginForm />
      </Components.ModalTrigger>

  </div>

const NavLoggedIn = ({currentUser}) =>

  <div className="header-nav header-logged-in">
    
      <div className="header-accounts">

        Welcome!&nbsp;
        <a href="/gifs">Continue</a>
        
        <Components.ModalTrigger label={Users.getDisplayName(currentUser)} size="small">
          <div>
            {Users.isAdmin(currentUser) ? <p>Admin</p> : null}
            <Components.AccountsLoginForm />
          </div>
        </Components.ModalTrigger>

      </div>

      <Components.ModalTrigger label="Upload">
        <PicsNewForm />
      </Components.ModalTrigger>

  </div>


const LoginPage = ({ currentUser, loading }) => 
  
  <div className="login-page">

    {loading ? 

      <Loading /> :

      <div className="pics-list-content">

        {currentUser ? 

          <PicsList currentUser={currentUser}/> : 

          <NavLoggedOut currentUser={currentUser}/>
          
        }

      </div>

    }

  </div>

export default withCurrentUser(LoginPage);
