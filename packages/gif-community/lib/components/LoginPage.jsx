import React, { PropTypes, Component } from 'react';
import { Components, withCurrentUser, Loading } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import GifsNewForm from './gifs/GifsNewForm';
import GifsList from './gifs/GifsList.jsx';

// navigation bar component when the user is logged out


  // <input type="text" id="serverInfo" ></input>

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

      <div className="gifs-list-content">

        {currentUser ? 

          <GifsList currentUser={currentUser}/> : 

          <NavLoggedOut />

        }

      </div>

    }

  </div>

);

export default withCurrentUser(LoginPage);
