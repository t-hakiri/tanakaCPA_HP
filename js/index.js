$(function(){
  $("#test1").load("toppage.html");
  $("#test2").load("header.html");
  $("#test3").load("footer.html");

	$.scrollify({section:".box"});
	$(window).on('resize',function(){
		$.scrollify.update();
	});
    // $(".box2").load("footer.html");
  // $(".box3").load("header.html");
});