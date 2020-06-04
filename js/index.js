console.log('aaaaaaaaaaaaaa')

$(function(){
  $("#toppage").load("toppage.html");
  $("#footer").load("footer.html");
  $("#header").load("header.html");
});

var option = {
    section : '.js-section',
    easing: "swing",
    scrollSpeed: 600,
    scrollbars: true,
  };

$(function() {
	console.log('in')
	$.scrollify(option);
	console.log('out')
});