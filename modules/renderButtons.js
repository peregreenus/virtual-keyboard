import { keys } from './keysDB.js';
import { Button } from './button.js';

function renderButtons(target) {
    const KEYS = [];

    for (let i = 0; i < keys.length; i++) {
        const keyBtn = new Button(keys[i].name, keys[i].value, keys[i].shiftValue, keys[i].rusValue, keys[i].rusShiftValue);
        KEYS.push(keyBtn);
    }

    KEYS.slice(0, 14).forEach(item => item.addToRow(target[0]));
    KEYS.slice(14, 29).forEach(item => item.addToRow(target[1]));
    KEYS.slice(29, 42).forEach(item => item.addToRow(target[2]));
    KEYS.slice(42, 55).forEach(item => item.addToRow(target[3]));
    KEYS.slice(55).forEach(item => item.addToRow(target[4]));

    return KEYS;
}

export { renderButtons };