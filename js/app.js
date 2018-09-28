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
