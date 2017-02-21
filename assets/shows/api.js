'use strict';

const config = require('../scripts/config.js');

const indexShow = function () {
  return $.ajax({
    url: config.apiOrigin + '/shows',
    method: 'GET',
  });
};

const displayShow = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/shows/' + id,
    method: 'GET',
  });
};

const removeShow = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/shows/' + id,
    method: 'DELETE',
  });
};

const editShow = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/shows/' + id,
    method: 'PATCH',
    data,
  });
};
const addShow = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/shows',
    method: 'POST',
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
