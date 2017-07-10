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

const GifsDetails = ({loading, document, currentUser}) => {

  if (loading) {
  
    return <p>Loading…</p>
  
  } else {
  
    return (

      <div className="gifs-details">

        <div className="gifs-details-image"><img src={document.imageUrl}/></div>
        
        <div className="gifs-details-sidebar">
          
          <div className="gifs-info">
          
            <h4 className="gifs-author">{document.user.displayName}</h4>

            <div className="gifs-body">

              {document.body}

              {Gifs.options.mutations.edit.check(currentUser, document) ? 
                <Components.ModalTrigger component={<Components.Icon name="edit"/>}>
                  <GifsEditForm currentUser={currentUser} documentId={document._id} />
                </Components.ModalTrigger>
                : null
              }

            </div>

          </div>

          <CommentsList terms={{view: 'gifComments', gifId: document._id}} />
        
          {Comments.options.mutations.new.check(currentUser) ?
            <CommentsNewForm gifId={document._id} /> :
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
