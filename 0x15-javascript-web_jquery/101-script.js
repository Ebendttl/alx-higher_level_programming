// 101-script.js
$(document).ready(() => {
  const myList = $('ul.my_list');

  $('#add_item').click(() => {
    myList.append('<li>Item</li>');
  });

  $('#remove_item').click(() => {
    myList.find('li:last-child').remove();
  });

  $('#clear_list').click(() => {
    myList.empty();
  });
});
