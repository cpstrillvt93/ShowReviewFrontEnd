'use strict';
// const game = require('../scripts/game-logic');

const onSignUpSuccess = () => {
    $('#sign-up').on('click').hide();
    $('#sumome-smartbar-popup').text('Signed up!');
    $('.form-clear').val('');
  // $('.hide-sign-in').on('click').hide();
  // $('.hide-change-pw').on('click').show();
  // $('.hide-sign-out').on('click').show();
  // $('.board').show();
  // $('#start').show();
  // $('#show-games').show();
};

const onSignUpFailure = () => {
  $('#sumome-smartbar-popup').text('Try Again');
};

const onSignInSuccess = () => {
  $('.form-clear').val('');
  $('.show-log-two').show();
  $('.all-forms').show();
  $('#sign-in').on('click').hide();
  $('#sign-up').on('click').hide();
  $('#change-password').on('click').show();
  $('#sign-out').show();
  $('#sumome-smartbar-popup').text('Signed in!');
  $('#sumome-smartbar-popup').text('Signed in!');
};

const onSignInFailure = () => {
  $('#sumome-smartbar-popup').text('Try Again');
  $('#sumome-smartbar-popup').text('Try Again');

};
// delay(1000).hide(1000);

// const showGameSuccess = (data) => {
//   $('#game-log').on('click').text('You\'ve played ' + data.games.length + ' games!');
// };

const onChangePasswordSuccess = () => {
  $('.form-clear').val('');
  $('#sumome-smartbar-popup').text('Change password success!');
};

const onChangePasswordFailure = () => {
  $('#sumome-smartbar-popup').text('Try Again');
};


const onSignOutSuccess = () => {
  // $('.show-log-two').hide();
  $('.all-forms').hide();
  $('#sign-up').on('click').show();
  $('#sign-in').on('click').show();
  $('#change-password').on('click').hide();
  $('#sign-out').on('click').hide();
  $('.show-log-two').empty();
  $('#sumome-smartbar-popup').text('signed out!');
  $('.log').hide();
};








module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess
};
