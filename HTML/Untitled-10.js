/*$(function() {
  $('body').css('height',window.innerHeight);
});

$(window).resize(function() {
  $('body').css('height',window.innerHeight);
});*/

$('.submit-credentials').on('click', function(ev) {
  ev.preventDefault();
  $(this).closest('.container').toggleClass('logged-in');
});

$('.log-out').on('click', function(ev) {
  ev.preventDefault();
  $(this).closest('.container').removeClass('logged-in');
});

$('.flip-pane').on('click', function(ev) {
  ev.preventDefault();
  $(this).closest('.container').toggleClass('flip');
});

$('.submit-email').on('click', function(ev) {
  ev.preventDefault();
  $(this).closest('.container').addClass('zoom');
});

$('.reset-login-pane').on('click', function(ev) {
  ev.preventDefault();
 $(this).closest('.container').removeClass('zoom').removeClass('flip');
});// JavaScript Document