$(document).ready(function() {
  $('.sloth').click(function() {
  	$('#description1').show();
  	$('#description2').hide();
  	$('#description3').hide();
  });

  $('.tarantulahawk').click(function() {
  	$('#description1').hide();
  	$('#description2').show();
  	$('#description3').hide();
  });

  $('.tiger').click(function() {
  	$('#description1').hide();
  	$('#description2').hide();
  	$('#description3').show();
  });
});