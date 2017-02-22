'use strict';
// const game = require('../scripts/game-logic');

const onSignUpSuccess = () => {
    $('.hide-sign-up').on('click').hide();
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
  $('.hide-sign-in').on('click').hide();
  $('.hide-sign-up').on('click').hide();
  $('.hide-change-pw').on('click').show();
  $('.hide-sign-out').on('click').show();
};

// const showGameSuccess = (data) => {
//   $('#game-log').on('click').text('You\'ve played ' + data.games.length + ' games!');
// };


const onSignOutSuccess = () => {
  $('.show-log-two').hide();
  $('.all-forms').hide();
  $('.hide-sign-up').on('click').show();
  $('.hide-sign-in').on('click').show();
  $('.hide-change-pw').on('click').hide();
  $('.hide-sign-out').on('click').hide();
};






module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess
};
