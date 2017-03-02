'use strict';

// const button = require('./events');

// This file provides UI messages and form/button hides/shows
// for all show related succcess/failure

const displayShowsTemplate = require('../templates/show-listing.handlebars');

const onDisplaySuccess = function (data) {
  let displayShowsHtml = displayShowsTemplate({ shows: data.shows });
  if (data.shows.length >= 0){
    $('.log').text("You have " + data.shows.length + " shows");
    // console.log(data);
    $('.log').show();
    $('.show-log-two').empty().append(displayShowsHtml);
} else {
    $('.show-log-two').empty().append(displayShowsHtml);
    $('.log').val('');
  }
};


const clearShows = () => {
    $('.show-log-two').empty();
    $('.log').hide();
  };

const onRemoveSuccess = function () {
  $('.add-show-log').text("Show successfully removed").delay(1000).hide(2000);
  $('.add-show-log').show();
  // console.log('show was successfully deleted.', data);
};

const onEditSuccess = function () {
  $('.add-show-log').text("Show successfully edited").delay(1000).hide(2000);
  $('.add-show-log').show();
  // console.log('show was successfully edited');
};

const onEditError = function () {
  $('.add-show-log').text("Show info not changed. Please make sure to fill out all the fields").delay(1000).hide(1000);
  $('.add-show-log').show();
};

const onAddSuccess = function () {
  $('.add-show-log').text("Show successfully added").delay(1000).hide(2000);
  $('.form-clear').val('');
  $('.add-show-log').show();
  // console.log('Show was successfully added', data);
};

const onAddError = function () {
  $('.add-show-log').text("Show not added. Please make sure to fill out all the fields").delay(1000).hide(1000);
  $('.add-show-log').show();


};

module.exports = {
  clearShows,
  onDisplaySuccess,
  onRemoveSuccess,
  onEditSuccess,
  onEditError,
  onAddSuccess,
  onAddError,
};
