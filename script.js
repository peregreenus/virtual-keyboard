import { createPage } from './modules/createPage.js';
import { renderButtons } from './modules/renderButtons.js';
import { checkLanguage } from './modules/checkLanguage.js';
import { setEvents } from './modules/events.js';

const { header, textArea, keyboardWrapper } = createPage();
const rows = keyboardWrapper.querySelectorAll('.keyboard__row');
const KEYS = renderButtons(rows);
const btns = keyboardWrapper.querySelectorAll('.keyboard__key');

checkLanguage();
setEvents();

export { header, textArea, keyboardWrapper, KEYS, btns };