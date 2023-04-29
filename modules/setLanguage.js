import { changeShiftValue } from './changeShiftValue.js';

let lang = sessionStorage.getItem('lang') || 'eng';

function setLanguage() {
    if (lang === 'eng') {
        lang = 'rus';
        changeShiftValue('rusValue');
    } else {
        lang = 'eng';
        changeShiftValue('value');
    }

    sessionStorage.setItem('lang', lang);
}

export { setLanguage };