'use strict';
// const game = require('../scripts/game-logic');

const onSignUpSuccess = () => {
    $('#sign-up').on('click').hide();
    $('#sumome-smartbar-popup').text('Signed up!').delay(1000).hide(1000);
    ('#sumome-smartbar-popup').text('Signed up!').show();
    $('.form-clear').val('');
  // $('.hide-sign-in').on('click').hide();
  // $('.hide-change-pw').on('click').show();
  // $('.hide-sign-out').on('click').show();
  // $('.board').show();
  // $('#start').show();
  // $('#show-games').show();
};

const onSignUpFailure = () => {
  $('#sumome-smartbar-popup').text('User email might be already taken. Try again! ').delay(1000).hide(1000);
  $('#sumome-smartbar-popup').show();
};

const onSignInSuccess = () => {
  $('.form-clear').val('');
  $('.show-log-two').show();
  $('.all-forms').show();
  $('#sign-in').on('click').hide();
  $('#sign-up').on('click').hide();
  $('#change-password').on('click').show();
  $('#sign-out').show();
  $('#sumome-smartbar-popup').text('Signed in!').delay(100).hide(500);
  $('#sumome-smartbar-popup').show();
};

const onSignInFailure = () => {
  $('#sumome-smartbar-popup').text('Try Again').delay(1000).hide(1000);
  $('#sumome-smartbar-popup').show();

};
// delay(1000).hide(1000);

// const showGameSuccess = (data) => {
//   $('#game-log').on('click').text('You\'ve played ' + data.games.length + ' games!');
// };

const onChangePasswordSuccess = () => {
  $('.form-clear').val('');
  $('#sumome-smartbar-popup').text('Change password success!').delay(1000).hide(1000);
  $('#sumome-smartbar-popup').show();
  // $('#sumome-smartbar-popup').val('');
};

const onChangePasswordFailure = () => {
  $('#sumome-smartbar-popup').text('Try Again').delay(1000).hide(1000);
  $('#sumome-smartbar-popup').show();

};


const onSignOutSuccess = () => {
  // $('.show-log-two').hide();
  $('.all-forms').hide();
  $('#sign-up').on('click').show();
  $('#sign-in').on('click').show();
  $('#change-password').on('click').hide();
  $('#sign-out').on('click').hide();
  $('.show-log-two').empty();
  $('#sumome-smartbar-popup').text('signed out!').delay(1000).hide(1000);
  $('.log').hide();
  $('#sumome-smartbar-popup').show();
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
