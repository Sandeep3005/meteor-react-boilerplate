import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  console.log('Response from server end.');
});
