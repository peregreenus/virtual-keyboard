import { createPage } from './modules/createPage.js';
import { keys } from './modules/keysDB.js';
import { Button } from './modules/button.js';
import { renderButtons } from './modules/renderButtons.js';

const { header, textArea, keyboardWrapper } = createPage();
const rows = keyboardWrapper.querySelectorAll('.keyboard__row');
const KEYS = renderButtons(rows);

console.log(KEYS);