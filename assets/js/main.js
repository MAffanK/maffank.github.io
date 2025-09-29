/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		wide: ['961px', '1880px'],
		normal: ['961px', '1620px'],
		narrow: ['961px', '1320px'],
		narrower: ['737px', '960px'],
		mobile: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Nav.
	var $nav_a = $nav.find('a');

	$nav_a
		.addClass('scrolly')
		.on('click', function (e) {

			var $this = $(this);

			// External link? Bail.
			if ($this.attr('href').charAt(0) != '#')
				return;

			// Prevent default.
			e.preventDefault();

			// Deactivate all links.
			$nav_a.removeClass('active');

			// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
			$this
				.addClass('active')
				.addClass('active-locked');

		})
		.each(function () {

			var $this = $(this),
				id = $this.attr('href'),
				$section = $(id);

			// No section for this link? Bail.
			if ($section.length < 1)
				return;

			// Scrollex.
			$section.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function () {

					// Deactivate section.
					$section.addClass('inactive');

				},
				enter: function () {

					// Activate section.
					$section.removeClass('inactive');

					// No locked links? Deactivate all links and activate this section's one.
					if ($nav_a.filter('.active-locked').length == 0) {

						$nav_a.removeClass('active');
						$this.addClass('active');

					}

					// Otherwise, if this section's link is the one that's locked, unlock it.
					else if ($this.hasClass('active-locked'))
						$this.removeClass('active-locked');

				}
			});

		});

	// Scrolly.
	$('.scrolly').scrolly();

	// Header (narrower + mobile).

	// Toggle.
	$(
		'<div id="headerToggle">' +
		'<a href="#header" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

	// Header.
	$('#header')
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'header-visible'
		});

})(jQuery);

/* Addtional JS */

// Accolades Slider
// -- Corrected Stacked Deck of Cards Logic -- //
document.addEventListener('DOMContentLoaded', function () {
	const deck = document.querySelector('.stacked-deck');
	if (deck) {
		const nextBtn = document.querySelector('.next-card-btn');
		const prevBtn = document.querySelector('.prev-card-btn');

		function cycleCards(direction) {
			// Get the current order of cards every time the function is called
			const cards = Array.from(deck.querySelectorAll('.card'));
			const activeCard = deck.querySelector('.card.active');

			if (direction === 'next') {
				// Move the current top card to the very end of the deck in the HTML
				deck.appendChild(activeCard);
			} else { // 'prev'
				// Get the last card in the deck and move it to the beginning
				const lastCard = cards[cards.length - 1];
				deck.insertBefore(lastCard, deck.firstChild);
			}

			// Re-query the cards to get the new order after our change
			const newCards = Array.from(deck.querySelectorAll('.card'));

			// Re-apply styles and classes to all cards based on their new order
			newCards.forEach((card, index) => {
				card.classList.remove('active');

				if (index < 3) {
					card.style.display = 'block';
					card.style.transform = `translateX(${index * 50}px) scale(${1 - index * 0.1})`;
					card.style.zIndex = newCards.length - index;
				} else {
					card.style.display = 'none';
				}
			});

			// Make the new top card active
			if (newCards.length > 0) {
				newCards[0].classList.add('active');
			}
		}

		nextBtn.addEventListener('click', () => cycleCards('next'));
		prevBtn.addEventListener('click', () => cycleCards('prev'));

		// Initial setup on page load
		const initialCards = Array.from(deck.querySelectorAll('.card'));
		initialCards.forEach((card, index) => {
			card.style.zIndex = initialCards.length - index;
			card.style.display = (index < 3) ? 'block' : 'none';
		});
	}
});