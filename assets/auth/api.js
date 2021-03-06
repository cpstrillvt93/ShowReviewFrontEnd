'use strict';

const config = require('./../scripts/config');
const store = require('./../scripts/store');

const signUp = function(data){
  // console.log(data);
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data,
  });
};

const signIn = function(data){
  // console.log(data);
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data,
  });
};

const signOut = function(){
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const changePassword = function(data){
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/change-password/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: data,
  });
};
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
