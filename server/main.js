import { Meteor } from 'meteor/meteor';
import '../imports/api/users/users';
import '../imports/api/users/user-login-methods';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  console.log('Response from server end.');
});
