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
  console.log('show was successfully deleted.');
};

const onEditSuccess = function () {
  console.log('show was successfully edited');
};

const onAddSuccess = function () {
  console.log('Show was successfully added');
};

module.exports = {
  // onSuccess,
  // onError,
  onRemoveSuccess,
  onEditSuccess,
  onAddSuccess,
};
