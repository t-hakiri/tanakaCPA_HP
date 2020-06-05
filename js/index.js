$(function(){
  $("#section1").load("section1.html");
  $("#section2").load("section2.html");
  $("#section3").load("section3.html");
  $("#nav").load("nandemo.html");
  $("#footer").load("nandemo2.html");

  $.scrollify({section:".box"});
});

