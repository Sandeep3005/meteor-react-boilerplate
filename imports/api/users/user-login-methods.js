import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';
import _ from 'underscore';


const emailSchema = new SimpleSchema({
  email: {
    type: String,
    label: 'Your email',
    regEx: SimpleSchema.RegEx.Email
  }
});

Meteor.methods({
  sendMail(email) {
    emailSchema.validate({ email });
    SSR.compileTemplate('htmlEmail', Assets.getText('user-login.html'));
    const emailData = {
      email: email,
      logTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
    };
    Email.send({
      to: Meteor.settings.private.INIT_ADMIN,
      from: 'Meteor Email Basic Application',
      subject: `${email} has logged at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
      html: SSR.render('htmlEmail', emailData),
    });
  }
});




