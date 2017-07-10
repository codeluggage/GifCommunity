/* 

Register the GraphQL fragment used to query for data

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment GifsItemFragment on Gif {
    _id
    createdAt
    userId
    user {
      displayName
    }
    imageUrl
    commentsCount
  }
`);

registerFragment(`
  fragment GifsDetailsFragment on Gif {
    _id
    createdAt
    userId
    user {
      displayName
    }
    imageUrl
    commentsCount
    body
  }
`);