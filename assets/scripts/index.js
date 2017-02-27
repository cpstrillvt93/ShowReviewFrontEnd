'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./../auth/events.js');
const showEvents = require('./../shows/events');
$(() => {
  authEvents.addHandlers();
  $('.all-forms').hide();
  $('.table').hide();
  $('#clearShowsButton').on('click', showEvents.onClearShows);
  $('#getShowsButton').on('click', showEvents.onGetShows);
  $('#removeShowsButton').on('click', showEvents.onRemoveShow);
  $('#remove-show').on('submit', showEvents.onRemoveShow);
  $('.show-log-two').on('click', '.remove-show', showEvents.onRemoveShow);
  $('.show-log-two').on('submit', '.edit-show', showEvents.onEditShow);
  // $('.log').show();
  // $('#edit-show').on('submit', showEvents.onEditShow);
  $('#add-show').on('submit', showEvents.onAddShow);


});

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file

// const showEvents = require('./../shows/events');
// const example = require('./example');

$(() => {
  // $('.all-forms').hide();
  // $('.table').hide();
  // $('#clearShowsButton').on('click', showEvents.onClearShows);
  // $('#getShowsButton').on('click', showEvents.onGetShows);
  // $('#remove-show').on('submit', showEvents.onRemoveShow);
  // $('#edit-show').on('submit', showEvents.onEditShow);
  // $('#add-show').on('submit', showEvents.onAddShow);
});

// use require without a reference to ensure a file is bundled
require('./example');
