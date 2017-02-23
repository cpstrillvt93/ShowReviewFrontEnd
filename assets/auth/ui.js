'use strict';
// const game = require('../scripts/game-logic');

const onSignUpSuccess = () => {
    $('#sign-up').on('click').hide();
  // $('.hide-sign-in').on('click').hide();
  // $('.hide-change-pw').on('click').show();
  // $('.hide-sign-out').on('click').show();
  // $('.board').show();
  // $('#start').show();
  // $('#show-games').show();
};

const onSignInSuccess = () => {
  $('.show-log-two').show();
  $('.all-forms').show();
  $('#sign-in').on('click').hide();
  $('#sign-up').on('click').hide();
  $('#change-password').on('click').show();
  $('#sign-out').show();
};

// const showGameSuccess = (data) => {
//   $('#game-log').on('click').text('You\'ve played ' + data.games.length + ' games!');
// };


const onSignOutSuccess = () => {
  // $('.show-log-two').hide();
  $('.all-forms').hide();
  $('#sign-up').on('click').show();
  $('#sign-in').on('click').show();
  $('#change-password').on('click').hide();
  $('#sign-out').on('click').hide();
  $('.show-log-two').empty();
};






module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess
};
