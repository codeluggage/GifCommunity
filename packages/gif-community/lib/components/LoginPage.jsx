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
      textAlign: 'center',
      flexDirection: 'column'
  }}>

      <h1 style={{
        flex: 1,
        textAlign: 'center',
      }}>
        <img style={{
          width: '150px',
          height: '150px',
        }} src="https://res.cloudinary.com/shortcutmagic/image/upload/v1498105564/wizard_x7n0am.png" alt="GifCommunity"/>
      </h1>

    <div style={{
      display: 'flex',
      flex: 1,
      marginTop: '20px',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>


      <div style={{
        marginBottom: '20px',
      }}>

        Log in or create an account:

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
