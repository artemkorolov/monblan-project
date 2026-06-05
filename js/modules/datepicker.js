const initCalendar = /** @type {any} */ (window).flatpickr;

export function initDatePickerModule() {
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
}
