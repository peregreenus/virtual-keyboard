class Button {
    constructor(name, value, shiftValue, rusValue, rusShiftValue) {
        this.name = name;
        this.value = value;
        this.shiftValue = shiftValue;
        this.rusValue = rusValue;
        this.rusShiftValue = rusShiftValue;

        this.createKeyBtn = function () {
            return `<button class="keyboard__key ${this.name}">${this.value}</button>`
        }

        this.addToRow = function (target) {
            target.insertAdjacentHTML('beforeend', this.createKeyBtn());
        }
    }
}

export { Button };