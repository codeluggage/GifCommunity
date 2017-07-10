/*

Seed the database with some dummy content. 

*/

import Gifs from '../modules/gifs/collection.js';
import Comments from '../modules/comments/collection.js';
import Users from 'meteor/vulcan:users';
import { newMutation } from 'meteor/vulcan:core';
import { Accounts } from 'meteor/accounts-base';
import moment from 'moment';

// const dummyFlag = {
//   fieldName: 'isDummy',
//   fieldSchema: {
//     type: Boolean,
//     optional: true,
//     hidden: true
//   }
// }
// Users.addField(dummyFlag);
// Gifs.addField(dummyFlag);
// Comments.addField(dummyFlag);

var createGif = function (imageUrl, createdAt, body, username) {
  
  const user = Users.findOne({username: username});

  const gif = {
    createdAt,
    imageUrl: ``,
    body, 
    isDummy: true,
    userId: user._id
  };

  newMutation({
    collection: Gifs, 
    document: gif,
    currentUser: user,
    validate: false
  });

};

var createComment = function (username, body, gifImageUrl) {

  const user = Users.findOne({username: username});

  var comment = {
    gifId: _.sample(Gifs.find({}).fetch())._id,
    userId: user._id,
    body: body,
    isDummy: true,
  };

  newMutation({
    collection: Comments, 
    document: comment,
    currentUser: user,
    validate: false
  });
};

const createUser = function (username, email) {
  const user = {
    username,
    email,
    isDummy: true
  };
  newMutation({
    collection: Users, 
    document: user,
    validate: false
  });
}

// var createDummyUsers = function () {
//   console.log('// inserting dummy users…');
//   createUser('Bruce', 'dummyuser1@telescopeapp.org');
//   createUser('Arnold', 'dummyuser2@telescopeapp.org');
//   createUser('Julia', 'dummyuser3@telescopeapp.org');
// };

// const createDummyGifs = function () {
//   console.log('// creating dummy gifs…');
//   createGif('cherry_blossoms.jpg', moment().toDate(), `Kyoto's cherry blossoms`, 'Bruce');
//   createGif('koyo.jpg', moment().subtract(10, 'minutes').toDate(), `Red maple leaves during Fall.`, 'Arnold');
//   createGif('cat.jpg', moment().subtract(3, 'hours').toDate(), `This cat was staring at me for some reason…`, 'Julia');
//   createGif('osaka_tram.jpg', moment().subtract(1, 'days').toDate(), `One of Osaka's remaining tram lines.`, 'Bruce', 'stackoverflow.png');
//   createGif('matsuri.jpg', moment().subtract(2, 'days').toDate(), `A traditional Japanese dance.`, 'Julia');
//   createGif('flowers.jpg', moment().subtract(6, 'days').toDate(), `Beautiful flowers!`, 'Julia');
//   createGif('kyoto-night.jpg', moment().subtract(12, 'days').toDate(), `Kyoto at night`, 'Arnold');
//   createGif('kaisendon.jpg', moment().subtract(20, 'days').toDate(), `This restaurant had the best kaisendon ever`, 'Julia');
//   createGif('forest.jpg', moment().subtract(30, 'days').toDate(), `Such a peaceful place`, 'Bruce');
// };

// const createDummyComments = function () {
//   console.log('// creating dummy comments');
//   createComment('Bruce', 'Great job.');
//   createComment('Arnold', 'I would love to go there…');
//   createComment('Julia', 'Where did you take this?');
//   createComment('Julia', 'What a cool gif!');
//   createComment('Bruce', 'Nice shot!');
//   createComment('Arnold', `Awesome photo!`);
//   createComment('Bruce', 'Great job.');
//   createComment('Arnold', 'I would love to go there…');
//   createComment('Julia', 'Where did you take this?');
//   createComment('Julia', 'What a cool gif!');
//   createComment('Bruce', 'Nice shot!');
//   createComment('Arnold', `Awesome photo!`);
//   createComment('Bruce', 'Great job.');
//   createComment('Arnold', 'I would love to go there…');
//   createComment('Julia', 'Where did you take this?');
//   createComment('Julia', 'What a cool gif!');
//   createComment('Bruce', 'Nice shot!');
//   createComment('Arnold', `Awesome photo!`);
// };

Meteor.startup(function () {
  console.log('in seed.js doing nothing...');
  // // insert dummy content only if there aren't any users, gifs, or comments in the db
  // if (!Users.find().count()) {
  //   createDummyUsers();
  // }
  // if (!Gifs.find().count()) {
  //   createDummyGifs();
  // }
  // if (!Comments.find().count()) {
  //   createDummyComments();
  // }
});