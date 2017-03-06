'use strict';

// This file handles user messeges and button/form hides
// for auth success and failure

const onSignUpSuccess = () => {
    $('#sign-up').on('click').hide();
    $('#sumome-smartbar-popup').text('Signed up!').delay(1000).hide(2000);
    $('#sumome-smartbar-popup').text('Signed up!').show();
    $('.form-clear').val('');

};

const onSignUpFailure = () => {
  $('#sumome-smartbar-popup').text('User Email May Already be Taken and/or Passwords May Not Match. Try again! ').delay(2000).hide(2000);
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
  $('#sumome-smartbar-popup').text('Signed in!').delay(1000).hide(2000);
  $('#sumome-smartbar-popup').show();
};

const onSignInFailure = () => {
  $('#sumome-smartbar-popup').text('Try Again! Password and Email May Not Match. ').delay(1000).hide(2000);
  $('#sumome-smartbar-popup').show();

};

const onChangePasswordSuccess = () => {
  $('.form-clear').val('');
  $('#sumome-smartbar-popup').text('Change password success!').delay(1000).hide(2000);
  $('#sumome-smartbar-popup').show();
};

const onChangePasswordFailure = () => {
  $('#sumome-smartbar-popup').text('Try Again! Make Sure You Are Using the Correct Orignal Password').delay(1000).hide(2000);
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
  $('#sumome-smartbar-popup').text('Signed out!').delay(1000).hide(2000);
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
