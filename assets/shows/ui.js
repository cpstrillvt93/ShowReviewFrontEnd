'use strict';

// const button = require('./events');

const displayShowsTemplate = require('../templates/show-listing.handlebars');

const onDisplaySuccess = function (data) {
  let displayShowsHtml = displayShowsTemplate({ shows: data.shows });
  $('.show-log-two').empty().append(displayShowsHtml);
};

const clearShows = () => {
    $('.show-log-two').empty();
    // $('#getShowsButton').on('click', button.onGetShows);
  };

const onRemoveSuccess = function () {
  // console.log('show was successfully deleted.', data);
};

const onEditSuccess = function () {
  // console.log('show was successfully edited');
};

const onAddSuccess = function () {
  // console.log('Show was successfully added', data);
};

module.exports = {
  // onSuccess,
  // onError,
  clearShows,
  onDisplaySuccess,
  onRemoveSuccess,
  onEditSuccess,
  onAddSuccess,
};
