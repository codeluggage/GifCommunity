/*

Declare permissions for the comments collection.

*/

import Users from 'meteor/vulcan:users';

const membersActions = [
  'gifs.new',
  'gifs.edit.own',
  'gifs.remove.own',
];
Users.groups.members.can(membersActions);

const adminActions = [
  'gifs.edit.all',
  'gifs.remove.all'
];
Users.groups.admins.can(adminActions);
