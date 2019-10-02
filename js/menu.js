$(document).ready(function(){
	$(".item_main").click(function(){
		$('.item_main').css({
			'border-bottom': '0px'
		});
		$('.item_main').find('a').css({
			'color': '#CC911E'
		});
		$(this).css({
			'border-bottom': '1px solid #CC911E',
		});
		$(this).find('a').css({
			'color': '#fff'
		});
	});

	$( ".image_load" ).load(function() {
  		// Handler for .load() called.
  		console.log("load");
  		$('.fotorama').fotorama();
	});

	//$('.fotorama').fotorama();
});