/* 

An item in the gifs list.

*/

import React, { PropTypes, Component } from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

import GifsDetail from './GifsDetails.jsx';

const GifsItem = ({gif, currentUser}) =>

  <div className="gifs-item">

    <Components.ModalTrigger className="gifs-details-modal" component={<div className="gifs-image"><img src={gif.imageUrl}/></div>}>
      <GifsDetail documentId={gif._id} currentUser={currentUser} />
    </Components.ModalTrigger>

    <div className="gifs-meta">

      <div className="gifs-comment-count">
        <Components.Icon name="comment" /> {gif.commentsCount}
      </div>
      
    </div>

  </div>

export default GifsItem;