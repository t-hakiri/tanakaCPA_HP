$(function(){
	$("#nav").load("header.html");
  $("#section1").load("top.html");
  $("#section2").load("vision.html");
	$("#section3").load("greeting.html");
	$("#section4").load("support_for_venture_companies.html");
	$("#section5").load("business.html");
	$("#section6").load("company_profile.html");
  $("#footer").load("footer.html");

  $.scrollify({section:".box"});
});

