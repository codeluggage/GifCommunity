/*

Define the three default mutations:

- new (e.g.: gifsNew(document: gifsInput) : Movie )
- edit (e.g.: gifsEdit(documentId: String, set: gifsInput, unset: gifsUnset) : Movie )
- remove (e.g.: gifsRemove(documentId: String) : Movie )

Each mutation has:

- A name
- A check function that takes the current user and (optionally) the document affected
- The actual mutation

*/

import { newMutation, editMutation, removeMutation, Utils } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const mutations = {

  new: {
    
    name: 'gifsNew',
    
    check(user) {
      if (!user) return false;
      return Users.canDo(user, 'gifs.new');
    },
    
    mutation(root, {document}, context) {
      
      Utils.performCheck(this, context.currentUser, document);

      return newMutation({
        collection: context.Gifs,
        document: document, 
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },

  },

  edit: {
    
    name: 'gifsEdit',
    
    check(user, document) {
      if (!user || !document) return false;
      return Users.owns(user, document) ? Users.canDo(user, 'gifs.edit.own') : Users.canDo(user, `gifs.edit.all`);
    },

    mutation(root, {documentId, set, unset}, context) {

      const document = context.Gifs.findOne(documentId);
      Utils.performCheck(this, context.currentUser, document);

      return editMutation({
        collection: context.Gifs, 
        documentId: documentId, 
        set: set, 
        unset: unset, 
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },

  },
  
  remove: {

    name: 'gifsRemove',
    
    check(user, document) {
      if (!user || !document) return false;
      return Users.owns(user, document) ? Users.canDo(user, 'gifs.remove.own') : Users.canDo(user, `gifs.remove.all`);
    },
    
    mutation(root, {documentId}, context) {

      const document = context.Gifs.findOne(documentId);
      Utils.performCheck(this, context.currentUser, document);

      return removeMutation({
        collection: context.Gifs, 
        documentId: documentId, 
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },

  },

};

export default mutations;
