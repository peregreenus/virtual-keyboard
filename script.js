import { createPage } from './modules/createPage.js';
// import { keys } from './modules/keysDB.js';
// import { Button } from './modules/button.js';
import { renderButtons } from './modules/renderButtons.js';
// import { setMouseEvents } from './modules/mouseEvent.js';

export const { header, textArea, keyboardWrapper } = createPage();
const rows = keyboardWrapper.querySelectorAll('.keyboard__row');
export const KEYS = renderButtons(rows);
export const btns = keyboardWrapper.querySelectorAll('.keyboard__key');

export let isPressed = false;

setMouseEvents();

function setMouseEvents() {
    btns.forEach((btn, i) => btn.addEventListener('mousedown', (e) => {
        if (btn.innerText !== 'CapsLock') btn.classList.add('active');

        switch (KEYS[i].name) {
            case 'Tab':
                textArea.innerHTML += '    ';
                break;
            case 'CapsLock':
                btn.classList.toggle('active'); ////////////
                // updateCapsMode();
                break;
            case 'ShiftLeft':
                // updateCapsMode();
                // switchShiftValue();

                isPressed = true;
                break;
            case 'ShiftRight':
                // updateCapsMode();
                // switchShiftValue();

                isPressed = true;
                break;
            case 'Space':
                textArea.innerHTML += ' ';
                break;
            case 'Backspace':
                textArea.innerHTML = '' + textArea.innerHTML.substring(0, textArea.innerHTML.length - 1);
                break;
            case 'Delete':
                // textArea.innerHTML += ' ';
                break;
            case 'Enter':
                textArea.innerHTML += '\n';
                break;
            default:
                if (e.target.innerText.length === 1) {
                    textArea.innerHTML += e.target.innerText;
                }
                break;
        }
    }));

    btns.forEach(btn => btn.addEventListener('mouseup', () => {
        if (btn.innerText !== 'CapsLock') btn.classList.remove('active');

        if (btn.innerText === 'Shift') {
            console.log('shift unpress');
            // updateCapsMode();
            // checkLanguage();
            isPressed = false;
        }
    }));
}