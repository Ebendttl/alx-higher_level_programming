// 5-script.js
$(() => {
  $('#add_item').click(() => {
    $('ul.my_list').append('<li>Item</li>');
  });
});
