const drinkRows = document.querySelector('.drinkRows');
const button = document.querySelector('button');

function edit(drinkRowLinker, textName, textVintage, buttonsFieldLinker, button1Linker, button2Linker) {
    const inputName = document.createElement('input');
    inputName.value = textName.textContent;
    drinkRowLinker.removeChild(textName);
    drinkRowLinker.appendChild(inputName);

    const inputVintage = document.createElement('input');
    inputVintage.value = textVintage.textContent;
    drinkRowLinker.removeChild(textVintage);
    drinkRowLinker.appendChild(inputVintage);

    button1Linker.textContent = 'Save';
    drinkRowLinker.appendChild(buttonsFieldLinker);

    button1Linker.onclick = function() {
        save(drinkRowLinker, inputName, inputVintage, buttonsFieldLinker, button1Linker, button2Linker);
    }

    button2Linker.onclick = function() {
        drinkRows.removeChild(drinkRowLinker);
    }

    input.focus();
}
function save(drinkRowLinker, inputName, inputVintage, buttonsFieldLinker, button1Linker, button2Linker) {
    var nameRegex = /.+/;
    var vintageRegex = /^[0-9]+$/;
    if (!nameRegex.exec(inputName.value) || !vintageRegex.exec(inputVintage.value)){
        inputName.value = 'Wrong input';
        inputVintage.value = '';
    }
    else {
        const textName = document.createElement('name')
        textName.textContent = inputName.value;
        drinkRowLinker.removeChild(inputName);
        drinkRowLinker.appendChild(textName);

        const textVintage = document.createElement('vintage')
        textVintage.textContent = inputVintage.value;
        drinkRowLinker.removeChild(inputVintage);
        drinkRowLinker.appendChild(textVintage);

        button1Linker.textContent = 'Edit';
        drinkRowLinker.appendChild(buttonsFieldLinker);

        button1Linker.onclick = function() {
            edit(drinkRowLinker, textName, textVintage, buttonsFieldLinker, button1Linker, button2Linker);
        }

        button2Linker.onclick = function() {
            drinkRows.removeChild(drinkRowLinker);
        }
    }

    input.focus();
}

button.onclick = function() {
    const newDrinkRow = document.createElement('li');
    drinkRows.appendChild(newDrinkRow);

    const inputName = document.createElement('input');
    newDrinkRow.appendChild(inputName);

    const inputVintage = document.createElement('input');
    newDrinkRow.appendChild(inputVintage);

    const buttonsField = document.createElement('buttonsField');
    newDrinkRow.appendChild(buttonsField);
    const button1 = document.createElement('button');
    button1.textContent = 'Save';
    buttonsField.appendChild(button1);
    const button2 = document.createElement('button');
    button2.textContent = 'Remove';
    buttonsField.appendChild(button2);

    button1.onclick = function() {
        save(newDrinkRow, inputName, inputVintage, buttonsField, button1, button2);
    }

    button2.onclick = function() {
        drinkRows.removeChild(newDrinkRow);
    }

    input.focus();
}