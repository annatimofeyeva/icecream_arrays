$(document).ready(function() {
  $("#formOne").submit(function() {
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);
    $("#story").show();
    event.preventDefault();
  });
});
