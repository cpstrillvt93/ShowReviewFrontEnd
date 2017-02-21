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

const onRemoveSuccess = function () {
  console.log('Book was successfully deleted.');
};

const onEditSuccess = function () {
  console.log('Book was successfully patched');
};

const onAddSuccess = function () {
  console.log('Book was successfully posted');
};

module.exports = {
  // onSuccess,
  // onError,
  onRemoveSuccess,
  onEditSuccess,
  onAddSuccess,
};
