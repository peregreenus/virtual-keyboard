import { btns, KEYS, textArea } from '../script.js';
import { updateCapsMode } from './updateCapsMode.js';
import { switchShiftValue } from './switchShiftValue.js';
import { checkLanguage } from './checkLanguage.js';
import { setLanguage } from './setLanguage.js';

let isPressed = false;

function setEvents() {
    function setMouseEvents() {
        btns.forEach((btn, i) => btn.addEventListener('mousedown', (e) => {
            if (btn.innerText !== 'CapsLock') btn.classList.add('active');

            switch (KEYS[i].name) {
                case 'Tab':
                    textArea.innerHTML += '    ';
                    break;
                case 'CapsLock':
                    btn.classList.toggle('active');
                    updateCapsMode();
                    break;
                case 'ShiftLeft':
                    updateCapsMode();
                    switchShiftValue();

                    isPressed = true;
                    break;
                case 'ShiftRight':
                    updateCapsMode();
                    switchShiftValue();

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
                updateCapsMode();
                checkLanguage();
                isPressed = false;
            }
        }));
    }

    function setKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            e.preventDefault();

            btns.forEach(btn => {
                if (btn.classList.contains(e.code)) {
                    if (btn.innerText !== 'CapsLock') {
                        btn.classList.add('active');
                    } else {
                        btn.classList.toggle('active');
                    }


                    if (e.key.length === 1) {
                        textArea.innerHTML += btn.innerText;
                    }
                    if (e.code === 'ArrowLeft' || e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowRight') {
                        textArea.innerHTML += btn.innerText;
                    }
                }
            });

            if (e.code === 'CapsLock') {
                updateCapsMode();
            }
            if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                if (!isPressed) {
                    updateCapsMode();
                    switchShiftValue();

                    isPressed = true;
                }
            }
            if (e.ctrlKey && e.code === 'AltLeft') {
                setLanguage();
            }
            if (e.code === 'Backspace') {
                textArea.innerHTML = textArea.innerHTML.substring(0, textArea.innerHTML.length - 1);
            }
            if (e.code === 'Space') {
                textArea.innerHTML += ' ';
            }
            if (e.code === 'Enter') {
                textArea.innerHTML += '\n';
            }
            if (e.code === 'Tab') {
                textArea.innerHTML += '    ';
            }
        });

        document.addEventListener('keyup', (e) => {
            btns.forEach(btn => {
                if (btn.innerText !== 'CapsLock') btn.classList.remove('active');
            });

            if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                console.log('shift unpress');
                isPressed = false;
                updateCapsMode();
                checkLanguage();
            }
        });
    }

    setMouseEvents();
    setKeyboardEvents();
}

export { setEvents };