import { KEYS, btns } from "../script.js";
import { capsMode } from "./updateCapsMode.js";

export function changeShiftValue(valueName) {
    btns.forEach((btn, i) => {
        if (btn.innerText.length === 1) {
            if (capsMode) {
                btn.innerText = KEYS[i][valueName].toUpperCase();
            } else {
                btn.innerText = KEYS[i][valueName].toLowerCase();
            }
        }
    });
}