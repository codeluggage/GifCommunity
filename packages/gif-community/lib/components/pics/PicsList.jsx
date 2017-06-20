/* 

List of pics. 
Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React, { PropTypes, Component } from 'react';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';

import Pics from '../../modules/pics/collection.js';
import PicsItem from './PicsItem.jsx';
import CommentsList from '../comments/CommentsList.jsx';
import Header from '../common/Header.jsx'

const PicsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div className="pics-list">

    {loading ? 

      <Loading /> :

      <div className="pics-list-content">
        <Header />

        <div className="pics-list-grid">
          {results.map(pic =>
            <div key={pic._id}>
              <PicsItem pic={pic} currentUser={currentUser} />
              <div className="pics-details-sidebar">
                <CommentsList terms={{
                  view: 'picComments',
                  picId: pic._id
                }} />
              </div>
            </div>
          )}
        </div>

        <div className="pics-list-footer">
          {totalCount > results.length ?
            <a className="load-more" href="#" onClick={e => {
              e.preventDefault();
              loadMore();
            }}>Load More ({totalCount - count} left)</a> : <p className="no-more">No more gifs :( Why not make some?</p>
          }
        </div>
        
      </div>
    }

  </div>

const options = {
  collection: Pics,
  fragmentName: 'PicsItemFragment',
  limit: 6
};

export default withList(options)(withCurrentUser(PicsList));