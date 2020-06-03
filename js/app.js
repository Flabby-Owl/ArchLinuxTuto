$(document).ready(function(){
  $('.tabs').tabs();
  $('.scrollspy').scrollSpy();
  $('.materialboxed').materialbox();
  $(".bElem").show();
  $(".uElem").hide();
});

/*$("#bTab").click(function () {
  $(".uElem").fadeOut("slow", function () {
      $(".bElem").fadeIn("slow");
  });
});

$("#uTab").click(function () {
  $(".bElem").fadeOut("slow", function () {
      $(".uElem").fadeIn("slow");
  });
});*/

$("#bTab").click(function () {
  $(".uElem").hide("slow", function () {
      $(".bElem").show();
  });
});

$("#uTab").click(function () {
  $(".bElem").hide("slow", function () {
      $(".uElem").show();
  });
});