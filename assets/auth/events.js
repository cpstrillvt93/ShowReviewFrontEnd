'use strict';
const getFormFields = require('../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
// const config = ('./../scripts/config');
const store = require('./../scripts/store');
// const game = require('../scripts/game-logic');

const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
    // $('#sumome-smartbar-popup').text('Success');
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure);
    // $('#sumome-smartbar-popup').text('please try again');
    // console.log('signed up')

};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store;
    })
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
    // .then(() => {
    //   console.log(store);
    // })
    // .catch(ui.failure)
    ;
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
  .then(ui.onChangePasswordSuccess)
  .catch(ui.onChangePasswordFailure)
  ;
};

const onSignOut = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signOut(data)
  .then(ui.onSignOutSuccess)
  // .catch(ui.failure)
  ;
};

// const onShowGame = function (event) {
//   event.preventDefault();
//
//   api.showGames()
//   .then(ui.showGameSuccess)
//   // .catch(ui.failure)
//   ;
// };

const addHandlers = () => {
  // $('.board').hide();
  // $('#start').hide();
  // $('#show-games').hide();
  $('#change-password').hide();
  $('#sign-out').hide();
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#sumome-smartbar-popup').show();
  // $('#show-games').on('click', onShowGame);
  // $('#start').on('click', game.resetBoard);

  // $('#game-log').on('click').text('You\'ve played ' + data.games.length + ' games!');

};

module.exports = {
  addHandlers,
};
