"use strict";

$(document).ready(function () {

	$('.navi-menu-button').on('click', function (e) {
		navMenuOpen();
	});

	$('.nav-menu').on('click', function (e) {
		if ($(e.target).hasClass('nav-menu')) {
			navMenuClose();
		}
	});

	$('nav.menu ul.main-menu>li>a').on('click', function (e) {
		var that = $(this);
		if (that.parent().find('ul:first').length) {
			e.preventDefault();
			if (!that.parent().hasClass('active')) {
				$('nav.menu ul.main-menu ul').slideUp('fast', function () {
					$('nav.menu ul.main-menu > li').removeClass('active');
				});

				$('nav.menu ul li a span').removeClass('fa-angle-up').addClass('fa-angle-down');


				that.parent().find('ul:first').slideDown('fast', function () {
					that.parent().addClass('active');
				});

				that.find('span').removeClass('fa-angle-down').addClass('fa-angle-up');
			}
			else {

				that.parent().find('ul:first').slideUp('fast', function () {
					$(this).parent().removeClass('active');
				});
				that.find('span').removeClass('fa-angle-up').addClass('fa-angle-down');
			}
		}
		else {
			$('nav.menu ul.main-menu ul').slideUp('fast');
			$('nav.menu ul.main-menu > li').removeClass('active');
			that.parent().addClass('active');
		}
	});


	$('.tab-item .fix-width .menu-item').css({ 'width': 100 / $('.tab-item .fix-width .menu-item').length + '%' });

	if ($('.wizard').length) {
		wizardFixHeight();
		$(window).resize();
	}



	if ($('.animated-text').length)
		animateText();

});


$(".wrapper-inline").on("scroll", function (e) {
	if (this.scrollTop > 150) {
		$('header.no-background').addClass("set-bg");
	} else {
		$('header.no-background').removeClass("set-bg");
	}

});

var navMenuOpen = function () {
	$('.navi-menu-button').addClass('focused');

	$('div.nav-menu').fadeIn(50, function (e) {
		$('nav.menu').addClass('opened');
	});
}

var navMenuClose = function () {
	$('.navi-menu-button').removeClass('focused');

	$('nav.menu').removeClass('opened');
	$('div.nav-menu').fadeOut(200);
}

var wizardFixHeight = function () {
	$(window).on('resize', function (e) {
		$('.wizard .wizard-item').height($(window).height() - 50);
	});
}

var animateText = function () {
	$('.vertical-center').css({ 'margin-top': $(window).height() / 2 - $('.vertical-center').height() / 2 });
	$('.animated-text').removeClass('zero-opacity');
	$('[data-transation]').each(function (e, i) {
		var that = $(this);
		that.addClass('hide');

		var transation = that.attr('data-transation');
		if (transation == '')
			transation = 'fadeInDown';

		var startTime = parseInt(that.attr('data-start-time'));
		if (isNaN(startTime))
			startTime = 0;

		setTimeout(function () {
			that.addClass('animated ' + transation);
		}, startTime);
	})
}


/*sweet checkbox scripts*/
$('.sweet-check :checkbox:checked').each(function (e, i) {
	$(this).parent().addClass('checked');
});


$(document).on('click', '.sweet-check', function () {
	if ($(this).hasClass('checked')) {
		$(this).removeClass('checked');
		$(this).find('input').prop('checked', false);
	}
	else {
		$(this).addClass('checked');
		$(this).find('input').prop('checked', true);
	}

	//console.log($(this).find('input').prop('checked'));
});

$(document).on('click', '[data-loader]', function () {
	$('.sweet-loader').show().addClass('show');
});


/*expandable list scrips****/
$(document).on('click', '.expandable-item .expandable-header', function () {
	if ($(this).parent().hasClass('accordion')) {
		if ($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
			$(this).parent().find('.expandable-content').attr('style', '');
		}
		else {
			var accordionGroup = $(this).parent().attr('data-group');
			$('[data-group="' + accordionGroup + '"]').removeClass('active');
			$('[data-group="' + accordionGroup + '"]').find('.expandable-content').attr('style', '');
			$(this).parent().find('.expandable-content').css({ 'max-height': $(this).parent().find('.expandable-content')[0].scrollHeight });
			$(this).parent().addClass('active');
		}
	}
	else {
		if ($(this).parent().hasClass('active'))
			$(this).parent().find('.expandable-content').attr('style', '');
		else
			$(this).parent().find('.expandable-content').css({ 'max-height': $(this).parent().find('.expandable-content')[0].scrollHeight });

		$(this).parent().toggleClass('active');
	}
});



$(document).on('click', '.tab-item .menu-item', function (e) {
	e.preventDefault();
	var tabContentId = $(this).attr('data-content');

	$(this).parents('.tab-item').find('.menu-item').removeClass('active');
	$(this).addClass('active');

	$(this).parents('.tab-item').find('.content-item').removeClass('active');
	$('#' + tabContentId).addClass('active');
});


/*post item scripts **************/
$(document).on('click', '.post-item .post-share > i', function (e) {
	e.preventDefault();
	$(this).parent().find('.social-links').fadeToggle('fast');
});


/*popup actions ******************/
$(document).on('click', '[data-dismiss="true"]', function () {
	$(this).parents('.popup-overlay').fadeOut('fast');
});

$(document).on('click', '[data-popup]', function () {
	var modalId = $(this).attr('data-popup');
	$('#' + modalId).fadeIn('fast');
});

$(document).on('click', '.popup-overlay', function (e) {
	if ($(e.target).hasClass('popup-overlay')) {
		$(this).fadeOut('fast');
	}
});




/*search popup actions ************/

var openSearchPopup = function () {
	$('.search-form').fadeIn('fast');
	$('.search-form input').focus();
}

var closeSearchPopup = function () {
	$('.search-form').fadeOut('fast');
}

$(document).on('click', '[data-search="open"]', function () {
	openSearchPopup();
});

$(document).on('click', '[data-search="close"]', function () {
	closeSearchPopup();
});


//swiper-1
let mySwiper = new Swiper('.swiper-first', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.custom-pagination', // Use your custom pagination selector
		clickable: true, // Enable bullet click
	},

});
//second slide
let swiper2 = new Swiper(".swiper-second", {
	slidesPerView: 1,
	spaceBetween: 15,
	loop: true,
	autoplay: {
		delay: 50000,
		disableOnInteraction: true,
	},
	pagination: {
		el: ".custom-pagination-2",
		clickable: true,
	},
});


// Get references to the close buttons and elements
var closeButtons = document.querySelectorAll('.header_top_close');
var elementsToHide = document.querySelectorAll('.header_top');
var bannerDivs = document.querySelectorAll('.delete_me'); // References to the banner-div elements

// Function to hide the element and change the margin of banner-div
function hideElement(elementToHide, bannerDiv) {
	elementToHide.style.display = 'none'; // Hide the element
	bannerDiv.style.marginTop = '60px'; // Change the margin of banner-div
}

// Add a click event listener to each close button
closeButtons.forEach(function (closeButton, index) {
	closeButton.addEventListener('click', function () {
		hideElement(elementsToHide[index], bannerDivs[index]);
		localStorage.setItem('isElementHidden-' + index, 'true'); // Store the hidden state for this specific slider
	});

	// Check if the element should initially be hidden for this specific slider
	var isElementHidden = localStorage.getItem('isElementHidden-' + index) === 'true';
	if (isElementHidden) {
		hideElement(elementsToHide[index], bannerDivs[index]);
	}
});


// goolge
function googleTranslateElementInit() {
	new google.translate.TranslateElement({ pageLanguage: 'tr', includedLanguages: 'ar,en,tr,fr,de,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}

