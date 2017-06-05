$(document).ready(function() {

var flavors = ["chocolate", "strawberry", "vanilla", "pistachio" ];
flavors.forEach(function(flavor) {
  $("ul").append("<li>"+ flavor + "</li>");

});
});
