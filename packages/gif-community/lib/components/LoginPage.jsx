import React, { PropTypes, Component } from 'react';
import { Components, withCurrentUser, Loading } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import PicsNewForm from './pics/PicsNewForm';
import PicsList from './pics/PicsList.jsx';

// navigation bar component when the user is logged out

const NavLoggedOut = ({currentUser}) => (

  <div className="header-logged-out" style={{
      display: 'flex',
      justifyContent: 'center',
  }}>

    <div style={{
      marginTop: '20px',
    }}>

      <div style={{
        marginBottom: '20px',
      }}>
        Welcome to ShortcutMagic! Please log in or sign up: 
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Components.AccountsLoginForm />
      </div>

    </div>

  </div>

);

const LoginPage = ({ currentUser, loading }) => (
  
  <div className="login-page">

    {loading ? 

      <Loading /> :

      <div className="pics-list-content">

        {currentUser ? 

          <PicsList currentUser={currentUser}/> : 

          <NavLoggedOut />

        }

      </div>

    }

  </div>

);

export default withCurrentUser(LoginPage);
