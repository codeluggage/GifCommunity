/* 

A component that shows a detailed view of a single picture. 
Wrapped with the "withDocument" container.

*/

import React, { PropTypes, Component } from 'react';
import Gifs from '../../modules/gifs/collection.js';
import { Components, withDocument } from 'meteor/vulcan:core';
import CommentsList from '../comments/CommentsList.jsx';
import CommentsNewForm from '../comments/CommentsNewForm.jsx';
import GifsEditForm from './GifsEditForm.jsx';
import Comments from '../../modules/comments/collection.js';

const GifsDetails = ({loading, gif, currentUser}) => {

  if (loading) {
  
    return <p>Loading…</p>
  
  } else {
  
    return (

      <div className="gifs-details">

        <div className="gifs-details-image"><img src={gif.imageUrl}/></div>
        
        <div className="gifs-details-sidebar">
          
          <div className="gifs-info">
          
            <h4 className="gifs-author">{gif.user.displayName}</h4>

            <div className="gifs-body">

              {gif.app}
              {gif.shortcut}

              {Gifs.options.mutations.edit.check(currentUser, gif) ? 
                <Components.ModalTrigger component={<Components.Icon name="edit"/>}>
                  <GifsEditForm currentUser={currentUser} gifId={gif._id} />
                </Components.ModalTrigger>
                : null
              }

            </div>

          </div>

          <CommentsList terms={{view: 'gifComments', gifId: gif._id}} />
        
          {Comments.options.mutations.new.check(currentUser) ?
            <CommentsNewForm gifId={gif._id} /> :
            null
          }

        </div>
      
      </div>

    )
  }
}

const options = {
  collection: Gifs,
  fragmentName: 'GifsDetailsFragment',
};

export default withDocument(options)(GifsDetails);
