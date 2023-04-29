import { lang } from './setLanguage.js';
import { changeShiftValue } from './changeShiftValue.js';

function switchShiftValue() {
    if (lang === 'eng') {
        changeShiftValue('shiftValue');
    } else {
        changeShiftValue('rusShiftValue');
    }
}

export { switchShiftValue };