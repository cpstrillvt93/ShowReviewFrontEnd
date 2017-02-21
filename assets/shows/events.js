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
// const onAddShow = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//
//   if (data.show.id.length === 0){
//       api.index()
//       .then(ui.onSuccess)
//       .catch(ui.onError);
//   } else {
//     api.show(data.show.id)
//     .then(ui.onSuccess)
//     .catch(ui.onError);
//   }
//
// };

const onRemoveShow = function(event){
  event.preventDefault();

  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
  api.removeShow(data.show.date)
    .then(ui.onRemoveSuccess)
    .catch(ui.onError);
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




module.exports = {
onRemoveShow,
onEditShow,
onAddShow
};
