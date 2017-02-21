'use strict';
//
// const onSuccess = function (data) {
//
// //  debugger;
//   if (data.book) {
//     console.log(data.book);
//   } else {
//     console.table(data.books);
//   }
// };
//
// const onError = function (response) {
//   console.error(response);
// };

const displayShowsTemplate = require('../templates/show-listing.handlebars');

const onDisplaySuccess = function (data) {
  let displayShowsHtml = displayShowsTemplate({ shows: data.shows });
  $('.show-log-two').append(displayShowsHtml);
};
  // console.log(data.shows);
  // $('#show-log').text('You have seen ' + data.shows.length + ' shows!');

  const clearShows = () => {
    $('.show-log-two').empty();
  };


const onRemoveSuccess = function (date) {
  console.log('show was successfully deleted.', date);
};

const onEditSuccess = function () {
  console.log('show was successfully edited');
};

const onAddSuccess = function (data) {
  console.log('Show was successfully added', data);
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
