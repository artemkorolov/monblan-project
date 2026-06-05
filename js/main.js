import { initCardsModule } from "./modules/cards.js";
import { initDatePickerModule } from "./modules/datepicker.js";
import { initViewSwitcherModule } from "./modules/viewSwitcher.js";

document.addEventListener('DOMContentLoaded', () => {
	initCardsModule();
	initDatePickerModule();
	initViewSwitcherModule();
});