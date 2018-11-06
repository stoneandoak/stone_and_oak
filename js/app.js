$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});

function flipCorey() {
  $(".flip-corey").toggleClass("flip");
}
function flipWes() {
  $(".flip-wes").toggleClass("flip");
}
function flipJoey() {
  $(".flip-joey").toggleClass("flip");
}

$(document).ready(function() {
  $(".fa-bars").click(function() {
    $(".nav-menu").slideToggle("slow");
    $(".open").fadeToggle("slow");
  });
});

$(document).ready(function() {
  $(".fa-times").click(function() {
    $(".nav-menu").slideToggle("slow");
    $(".open").fadeToggle("slow");
  });
});
