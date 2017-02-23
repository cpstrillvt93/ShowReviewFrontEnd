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

const onGetShows = () => {
  // event.preventDefault();
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

  // let data = getFormFields(event.target.id);
  let id = event.target.dataset.id;
  api.removeShow(id)
    .then(ui.onRemoveSuccess)
    .then(onGetShows)
    .catch(ui.onError);
    onGetShows();
};

  const onEditShow = function (event) {
    event.preventDefault();
    console.log(event.target);
    let data = getFormFields(event.target);
    let id = event.target.dataset.id;
    // let date = $(event.target.dataset.date);
    console.log(data);
      api.editShow(id, data)
      .then(ui.onEditSuccess)
      .then(onGetShows)
      .catch(ui.onError);
      ui.clearShows();
      onGetShows();

  };

// const onEditShow = function (event) {
//   event.preventDefault();
//
//   // let bookId = $('#delete-book-id').val();
//   // multiple ways to do everything.
//   // However prefer this way.
//
//   let data = getFormFields(event.target);
//   api.editShow(data.show.id, data)
//   .then(ui.onEditSuccess)
//   .catch(ui.onError);
// };

const onAddShow = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.addShow(data)
  .then(ui.onAddSuccess)
  .then(onGetShows)
  .catch(ui.onError);
  onGetShows();
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
