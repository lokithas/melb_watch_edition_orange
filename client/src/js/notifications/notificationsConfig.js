'use strict';

var notificationsConfig = [
    {
      name: 'Go to contacts on right button',
      defaultMessage: 'Click right button to go to contacts.',
      buttonEvents: {
        right: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts');
      }
    },
    {
      name: 'Left button will be contacts now',
      defaultMessage: 'Now right button will lead you to contacts.',
      buttonEvents: {
        right: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts');
      }
    },
    {
      name: 'Contacts on the right!',
      buttonEvents: {
        right: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts');
      }
    },
    {
      name: 'Send an alert message',
      defaultMessage: 'ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ALERT ALERT ALERT, ',
      buttonEvents: {
        top: 'scrollNotificationUp',
        bottom: 'scrollNotificationDown'
      },
      scrollNotificationDown: function() {
        $('#notification_message_display').animate({scrollTop: '+=70px'});
      },

      scrollNotificationUp: function() {
        $('#notification_message_display').animate({scrollTop: '-=70px'});
      }
    }
];

module.exports = notificationsConfig;
