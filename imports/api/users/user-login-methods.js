import { Meteor } from 'meteor/meteor';
import moment from 'moment';

Meteor.methods({
  sendMail(email) {
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



