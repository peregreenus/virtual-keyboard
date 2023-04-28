export function createPage() {
    const header = document.createElement('h1');
    const textArea = document.createElement('textarea');
    const keyboardWrapper = document.createElement('div');

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('div');
        row.classList.add('keyboard__row');
        keyboardWrapper.append(row);
    }

    header.innerText = 'Virtual Keyboard';
    textArea.classList.add('keyboard__display');
    keyboardWrapper.classList.add('keyboard');
    document.body.append(header, textArea, keyboardWrapper);

    return { header, textArea, keyboardWrapper };
}