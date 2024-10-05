$(document).ready(function() {
  $("#btn_translate").click(function() {
    var languageCode = $("#language_code").val();
    $.getJSON("https://www.fourtonfish.com/hellosalut/hello/" + languageCode + ".js", function(data) {
      $("#hello").text(data.hello);
    });
  });

  $("#language_code").keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      $("#btn_translate").click();
    }
  });
});
