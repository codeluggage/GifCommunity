/*

The main Gifs collection definition file.

*/

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import resolvers from './resolvers.js';
import './fragments.js';
import mutations from './mutations.js';
import './permissions.js';

const Gifs = createCollection({

  collectionName: 'Gifs',

  typeName: 'Gif',

  schema,
  
  resolvers,

  mutations,

});

/*

Set a default results view whenever the Gifs collection is queried:

- Gifs are sorted by their createdAt timestamp in descending order

*/

Gifs.addDefaultView(terms => {
  return {
    options: {sort: {createdAt: -1}}
  };
});

export default Gifs;
