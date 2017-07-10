/* 

List of gifs. 
Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React, { PropTypes, Component } from 'react';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';

import Gifs from '../../modules/gifs/collection.js';
import GifsItem from './GifsItem.jsx';
import CommentsList from '../comments/CommentsList.jsx';
import Header from '../common/Header.jsx'

const GifsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div className="gifs-list">

    {loading ? 

      <Loading /> :

      <div className="gifs-list-content">
        <Header />

        <div className="gifs-list-grid">
          {results.map(gif =>
            <div key={gif._id}>
              <GifsItem gif={gif} currentUser={currentUser} />
              <div className="gifs-details-sidebar">
                <CommentsList terms={{
                  view: 'gifComments',
                  gifId: gif._id
                }} />
              </div>
            </div>
          )}
        </div>

        <div className="gifs-list-footer">
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
  collection: Gifs,
  fragmentName: 'GifsItemFragment',
  limit: 6
};

export default withList(options)(withCurrentUser(GifsList));