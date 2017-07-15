/*

A SimpleSchema-compatible JSON schema

*/

import FormsUpload from 'meteor/vulcan:forms-upload';

const schema = {

  // default properties

  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onInsert: (document, currentUser) => {
      return new Date();
    }
  },
  userId: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: 'user: User', // resolve this field as "user" on the client
  },
  
  // custom properties

  imageUrl: {
    label: 'Gif',
    type: String,
    optional: false,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    control: FormsUpload, // use the FormsUpload form component
    form: {
      options: {
        preset: 'eugfqwvy'
      },
    }
  },
  app: {
    label: 'App',
    type: String,
    optional: false,
    control: 'text',
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members']
  },
  shortcut: {
    label: 'Shortcut',
    type: String,
    optional: true,
    control: 'text',
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members']
  },

  // GraphQL-only field

  commentsCount: {
    type: Number,
    optional: true,
    viewableBy: ['guests'],
    hidden: true,
    resolveAs: 'commentsCount: Float' // resolve as commentCount on the client
  }
};

export default schema;
