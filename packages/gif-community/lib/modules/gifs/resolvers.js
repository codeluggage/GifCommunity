/*

Three resolvers are defined:

- list (e.g.: gifsList(terms: JSON, offset: Int, limit: Int) )
- single (e.g.: gifsSingle(_id: String) )
- listTotal (e.g.: gifsTotal )

*/

import { addGraphQLResolvers } from 'meteor/vulcan:core';

// basic list, single, and total query resolvers
const resolvers = {

  list: {

    name: 'gifsList',

    resolver(root, {terms = {}}, context, info) {
      let {selector, options} = context.Gifs.getParameters(terms, {}, context.currentUser);
      return context.Gifs.find(selector, options).fetch();
    },

  },

  single: {
    
    name: 'gifsSingle',

    resolver(root, {documentId}, context) {
      const document = context.Gifs.findOne({_id: documentId});
      return context.Users.restrictViewableFields(context.currentUser, context.Gifs, document);
    },
  
  },

  total: {
    
    name: 'gifsTotal',
    
    resolver(root, {terms = {}}, context) {
      const {selector, options} = context.Gifs.getParameters(terms, {}, context.currentUser);
      return context.Gifs.find(selector, options).count();
    },
  
  }
};

// add the "user" resolver for the Gif type separately
const gifUserResolver = {
  Gif: {
    user(gif, args, context) {
      return context.Users.findOne({ _id: gif.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
    },
    commentsCount(gif, args, context) {
      return context.Comments.find({gifId: gif._id}).count();
    }
  },
};
addGraphQLResolvers(gifUserResolver);

export default resolvers;