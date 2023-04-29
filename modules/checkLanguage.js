import { lang } from './setLanguage.js';
import { changeShiftValue } from './changeShiftValue.js';

function checkLanguage() {
    if (lang === 'eng') {
        changeShiftValue('value');
    } else {
        changeShiftValue('rusValue');
    }
}

export { checkLanguage };