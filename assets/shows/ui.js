'use strict';

// const button = require('./events');

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
    // $('#getShowsButton').on('click', button.onGetShows);
  };

const onRemoveSuccess = function () {
  $('.add-show-log').text("Show successfully removed");
  // console.log('show was successfully deleted.', data);
};

const onEditSuccess = function () {
  $('.add-show-log').text("Show successfully edited");
  // console.log('show was successfully edited');
};

const onEditError = function () {
  $('.add-show-log').text("Show info not changed. Please make sure to fill out all the fields");

};

const onAddSuccess = function () {
  $('.add-show-log').text("Show successfully added");
  $('.form-clear').val('');
  // console.log('Show was successfully added', data);
};

const onAddError = function () {
  $('.add-show-log').text("Show not added. Please make sure to fill out all the fields");


};

module.exports = {
  // onSuccess,
  // onError,
  clearShows,
  onDisplaySuccess,
  // onDisplayFailure,
  onRemoveSuccess,
  onEditSuccess,
  onEditError,
  onAddSuccess,
  onAddError,
};
