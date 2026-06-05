
const btnTiles = document.getElementById('btn-tiles');
const btnRows = document.getElementById('btn-rows');
const mainContainer = document.getElementById('main-container');

// (Tiles)
btnTiles?.addEventListener('click', () => {
	btnTiles.classList.add('active');
	btnRows?.classList.remove('active');

	mainContainer?.classList.remove('view-rows');
	mainContainer?.classList.add('view-tiles');
});

// (Rows)
btnRows?.addEventListener('click', () => {
	btnRows.classList.add('active');
	btnTiles?.classList.remove('active');

	mainContainer?.classList.remove('view-tiles');
	mainContainer?.classList.add('view-rows');
});


// FLATPICKR
const initCalendar = /** @type {any} */ (window).flatpickr;

if (typeof initCalendar === 'function') {
	let pickerFrom;
	let pickerTo;

	// (From)
	pickerFrom = initCalendar("#date-from", {
		dateFormat: "d_m_Y",
		allowInput: false,
		position: "auto center",
		onChange: function (selectedDates) {
			if (selectedDates.length > 0) {
				pickerTo?.set("minDate", selectedDates[0]);
			}
		}
	});

	// (To)
	pickerTo = initCalendar("#date-to", {
		dateFormat: "d_m_Y",
		defaultDate: "09_08_2016",
		allowInput: false,
		position: "auto center",
		onChange: function (selectedDates) {
			if (selectedDates.length > 0) {
				pickerFrom?.set("maxDate", selectedDates[0]);
			}
		}
	});

	document.getElementById('trigger-from')?.addEventListener('click', () => pickerFrom?.open());
	document.getElementById('trigger-to')?.addEventListener('click', () => pickerTo?.open());

	document.getElementById('clear-from')?.addEventListener('click', () => pickerFrom?.clear());
	document.getElementById('clear-to')?.addEventListener('click', () => pickerTo?.clear());
}

// LOAD MORE
const loadMoreBtn = document.getElementById('load-more-btn');
const mainContainerEl = document.getElementById('main-container');
const allCards = mainContainerEl ? Array.from(mainContainerEl.querySelectorAll('.card')) : [];

const CARDS_TO_SHOW = 6;
let currentVisibleCount = CARDS_TO_SHOW;

function updateCardsVisibility() {
	allCards.forEach((card, index) => {
		if (index < currentVisibleCount) {
			card.classList.remove('is-hidden');
		} else {
			card.classList.add('is-hidden');
		}
	});

	if (currentVisibleCount >= allCards.length && loadMoreBtn) {
		loadMoreBtn.style.display = 'none';
	}
}

if (allCards.length > 0) {
	updateCardsVisibility();
}

loadMoreBtn?.addEventListener('click', () => {
	currentVisibleCount += 4;
	updateCardsVisibility();
});