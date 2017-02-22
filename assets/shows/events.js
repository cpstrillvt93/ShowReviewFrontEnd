'use strict';

const api = require('./api');
const ui = require('./ui');
// attach getFormFields globally

const getFormFields = require('../../lib/get-form-fields.js');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onGetShows = (event) => {
  event.preventDefault();
  // let data = getFormFields(event.target);
  api.displayShow()
    .then(ui.onDisplaySuccess);

    // .catch(ui.failure);

};

const onClearShows = (event) => {
  event.preventDefault();
  ui.clearShows();
};

const onRemoveShow = function(event){
  event.preventDefault();

  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
  api.removeShow(data.show.date)
    .then(ui.onRemoveSuccess)
    .catch(ui.onError);
    console.log(data);
};

const onEditShow = function (event) {
  event.preventDefault();

  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
  api.editShow(data.show.id, data)
  .then(ui.onEditSuccess)
  .catch(ui.onError);
};

const onAddShow = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.addShow(data)
  .then(ui.onAddSuccess)
  .catch(ui.onError);
};

// const addShowHandlers = () => {
//   $('#getShowsButton').on('click', onGetShows);
//   $('#clearShowsButton').on('click', onClearShows);
//
// };




module.exports = {
// addShowHandlers,
onGetShows,
onClearShows,
onRemoveShow,
onEditShow,
onAddShow
};
