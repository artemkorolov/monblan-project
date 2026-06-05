
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

const cardsData = [
	{ id: 1, img: "img/photo1.png", likesToday: 128, commentsToday: 31, dateArchive: "9-08-2016", likesArchive: 67, commentsArchive: 22, statusTitle: "Image upload", statusDate: "11-04-2016" },
	{ id: 2, img: "img/photo2.png", likesToday: 128, commentsToday: 31, dateArchive: "9-08-2016", likesArchive: 67, commentsArchive: 22, statusTitle: "Image upload", statusDate: "11-04-2016" },
	{ id: 3, img: "img/photo3.png", likesToday: 128, commentsToday: 31, dateArchive: "9-08-2016", likesArchive: 67, commentsArchive: 22, statusTitle: "Image upload", statusDate: "11-04-2016" },
	{ id: 4, img: "img/photo4.png", likesToday: 128, commentsToday: 31, dateArchive: "9-08-2016", likesArchive: 67, commentsArchive: 22, statusTitle: "Image upload", statusDate: "11-04-2016" },
	{ id: 5, img: "img/photo5.png", likesToday: 128, commentsToday: 31, dateArchive: "9-08-2016", likesArchive: 67, commentsArchive: 22, statusTitle: "Image upload", statusDate: "11-04-2016" },
	{ id: 6, img: "img/photo6.png", likesToday: 128, commentsToday: 31, dateArchive: "9-08-2016", likesArchive: 67, commentsArchive: 22, statusTitle: "Image upload", statusDate: "11-04-2016" },
	{ id: 7, img: "img/photo7.png", likesToday: 128, commentsToday: 31, dateArchive: "9-08-2016", likesArchive: 67, commentsArchive: 22, statusTitle: "Image upload", statusDate: "11-04-2016" },
	{ id: 8, img: "img/photo8.png", likesToday: 128, commentsToday: 31, dateArchive: "9-08-2016", likesArchive: 67, commentsArchive: 22, statusTitle: "Image upload", statusDate: "11-04-2016" },
	{ id: 9, img: "img/photo9.png", likesToday: 128, commentsToday: 31, dateArchive: "9-08-2016", likesArchive: 67, commentsArchive: 22, statusTitle: "Image upload", statusDate: "11-04-2016" }
];

const mainContainerElement = document.getElementById('main-container');
const loadMoreButton = document.getElementById('load-more-btn');

const ITEMS_PER_PAGE = 6;
let displayedCount = 0;

function renderNextCards() {
	if (!mainContainerElement) return;

	const nextIndex = displayedCount + ITEMS_PER_PAGE;
	const slice = cardsData.slice(displayedCount, nextIndex);
	let htmlString = '';

	slice.forEach(card => {
		htmlString += `
      <div class="card">
        <div class="card-img-inner">
          <img src="${card.img}" alt="Post preview" class="card-img">
        </div>
        <div class="card-info">
          <div class="info-block block-today">
            <span class="info-date-label">Today</span>
            <div class="metrics">
              <div class="metric-item">
                <span class="icon"><img src="img/heart.svg" alt=""></span> ${card.likesToday}
              </div>
              <span class="metric-item">
                <span class="icon"><img src="img/comment.svg" alt=""></span> ${card.commentsToday}
              </span>
            </div>
          </div>
          <div class="info-block block-archive">
            <span class="info-date-val">${card.dateArchive}</span>
            <div class="metrics">
              <span class="metric-item">
                <span class="icon"><img src="img/heart.svg" alt=""></span> ${card.likesArchive}
              </span>
              <span class="metric-item">
                <span class="icon"><img src="img/comment.svg" alt=""></span> ${card.commentsArchive}
              </span>
            </div>
          </div>
          <div class="info-block block-status">
            <span class="status-title">${card.statusTitle}</span>
            <span class="status-date">${card.statusDate}</span>
          </div>
        </div>
      </div>
    `;
	});

	mainContainerElement.insertAdjacentHTML('beforeend', htmlString);
	displayedCount += slice.length;

	if (displayedCount >= cardsData.length && loadMoreButton) {
		loadMoreButton.style.display = 'none';
	}
}

if (mainContainerElement) {
	renderNextCards();
}

loadMoreButton?.addEventListener('click', renderNextCards);