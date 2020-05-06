(function($) {
	'use strict';

	jQuery(document).ready(function($) {
		//isotope
		$('.project-filter button').on('click', function() {
			var selector = $(this).attr('data-filter');
			$('.project-list').isotope({
				filter: selector
			});
		});
	});

	jQuery(window).load(function() {
		//Call isotope filter
		jQuery('.project-list').isotope();
	});
})(jQuery);
