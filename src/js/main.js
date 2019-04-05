$(document).ready(function(){
	var headerSlider = $('#headerSlider');

	headerSlider.owlCarousel({
		margin: 20,
		items: 1,
		loop: true,
		dots: false,
		smartSpeed: 2000
	});

	$('#headerSliderRight').click(function() {
	    headerSlider.trigger('next.owl.carousel');
	})
	$('#headerSliderLeft').click(function() {
	    headerSlider.trigger('prev.owl.carousel');
	})

	headerSlider.on('changed.owl.carousel', function(event){
		$('.slide-controls-number__active').text(event.item.index-2)
		$('.slide-controls-number__total').text(event.item.count)
	});

	//

	var shopSlider = $('#shopSlider');

	shopSlider.owlCarousel({
		// items: 3,
		loop: true,
		dots: false,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,

			},

			1300: {
				items: 3,
			}
		}

	});

	$('#shopSliderRight').click(function() {
	    shopSlider.trigger('next.owl.carousel');
	})
	$('#shopSliderLeft').click(function() {
	    shopSlider.trigger('prev.owl.carousel');
	})


});