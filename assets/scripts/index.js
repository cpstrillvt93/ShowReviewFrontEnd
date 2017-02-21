'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./../auth/events.js');

$(() => {
  authEvents.addHandlers();

});

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file

const showEvents = require('./../shows/events');
// const example = require('./example');

$(() => {
  $('#clearShowsButton').on('click', showEvents.onClearShows);
  $('#getShowsButton').on('click', showEvents.onGetShows);
  $('#remove-show').on('submit', showEvents.onRemoveShow);
  $('#edit-show').on('submit', showEvents.onEditShow);
  $('#add-show').on('submit', showEvents.onAddShow);
});

// use require without a reference to ensure a file is bundled
require('./example');
