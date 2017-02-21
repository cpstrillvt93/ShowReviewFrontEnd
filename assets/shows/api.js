'use strict';

const config = require('../scripts/config.js');
const store = require('../scripts/store');

const indexShow = function () {
  return $.ajax({
    url: config.apiOrigin + '/shows',
    method: 'GET',
  });
};

const displayShow = function () {
  return $.ajax({
    url: config.apiOrigin + '/shows/',
    method: 'GET',
  });
};

const removeShow = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/shows/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const editShow = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/shows/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data,
  });
};
const addShow = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/shows',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data,
  });
};

module.exports = {
  indexShow,
  displayShow,
  removeShow,
  editShow,
  addShow
};
