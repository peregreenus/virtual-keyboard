import { btns } from '../script.js';

let capsMode = false;

function updateCapsMode() {
    if (!capsMode) {
        btns.forEach(btn => {
            if (btn.innerText.length === 1) {
                btn.innerText = btn.innerText.toUpperCase();
            }
        });

        capsMode = true;
    } else {
        btns.forEach(btn => {
            if (btn.innerText.length === 1) {
                btn.innerText = btn.innerText.toLowerCase();
            }
        });

        capsMode = false;
    }
}

export { capsMode, updateCapsMode };