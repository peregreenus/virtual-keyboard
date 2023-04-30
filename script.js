import { createPage } from './modules/createPage.js';
import { renderButtons } from './modules/renderButtons.js';
import { checkLanguage } from './modules/checkLanguage.js';
import { setEvents } from './modules/events.js';

const { header, textArea, keyboardWrapper } = createPage();
const rows = keyboardWrapper.querySelectorAll('.keyboard__row');
const KEYS = renderButtons(rows);
const btns = keyboardWrapper.querySelectorAll('.keyboard__key');
const placeholderText = `Разработано в ОС Windows\nДля смены языка нажмите CtrlLeft + AltLeft`;

textArea.placeholder = placeholderText;
checkLanguage();
setEvents();

export { header, textArea, keyboardWrapper, KEYS, btns };