
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