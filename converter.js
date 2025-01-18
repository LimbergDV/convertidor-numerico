document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos del DOM
    const inputField = document.querySelector('.input.is-link');
    const binaryField = document.querySelector('input[placeholder="Texto en Binario"]');
    const hexaField = document.querySelector('input[placeholder="Texto en Hexadecimal"]');
    const octaField = document.querySelector('input[placeholder="Texto en Octagonal"]');
    const decimalField = document.querySelector('input[placeholder="Texto en Decimal"]');
    const selectField = document.querySelector('.select select');

    // Funciones de conversión
    function decimalToBinary(num) {
        return num.toString(2) || '0';
    }

    function decimalToHexadecimal(num) {
        return num.toString(16).toUpperCase() || '0';
    }

    function decimalToOctal(num) {
        return num.toString(8) || '0';
    }

    function binaryToDecimal(binaryStr) {
        if (!/^[01]+$/.test(binaryStr)) return NaN;
        return parseInt(binaryStr, 2);
    }

    function binaryToHexadecimal(binaryStr) {
        if (!/^[01]+$/.test(binaryStr)) return 'Entrada no válida';
        return parseInt(binaryStr, 2).toString(16).toUpperCase();
    }

    function binaryToOctal(binaryStr) {
        if (!/^[01]+$/.test(binaryStr)) return 'Entrada no válida';
        return parseInt(binaryStr, 2).toString(8);
    }

    function hexadecimalToDecimal(hexStr) {
        if (!/^[0-9A-Fa-f]+$/.test(hexStr)) return NaN;
        return parseInt(hexStr, 16);
    }

    function hexadecimalToBinary(hexStr) {
        if (!/^[0-9A-Fa-f]+$/.test(hexStr)) return 'Entrada no válida';
        return parseInt(hexStr, 16).toString(2);
    }

    function hexadecimalToOctal(hexStr) {
        if (!/^[0-9A-Fa-f]+$/.test(hexStr)) return 'Entrada no válida';
        return parseInt(hexStr, 16).toString(8);
    }

    function octalToDecimal(octalStr) {
        if (!/^[0-7]+$/.test(octalStr)) return NaN;
        return parseInt(octalStr, 8);
    }

    function octalToBinary(octalStr) {
        if (!/^[0-7]+$/.test(octalStr)) return 'Entrada no válida';
        return parseInt(octalStr, 8).toString(2);
    }

    function octalToHexadecimal(octalStr) {
        if (!/^[0-7]+$/.test(octalStr)) return 'Entrada no válida';
        return parseInt(octalStr, 8).toString(16).toUpperCase();
    }

    // Actualiza los campos de salida
    function updateFields() {
        const text = inputField.value.trim();
        const inputType = selectField.value;

        if (inputType === 'Decimal') {
            const decimal = parseInt(text, 10);

            if (!isNaN(decimal)) {
                binaryField.value = decimalToBinary(decimal);
                hexaField.value = decimalToHexadecimal(decimal);
                octaField.value = decimalToOctal(decimal);
                decimalField.value = decimal;
            } else {
                clearFields();
            }
        } else if (inputType === 'Binario') {
            const decimal = binaryToDecimal(text);

            if (!isNaN(decimal)) {
                binaryField.value = text;
                hexaField.value = binaryToHexadecimal(text);
                octaField.value = binaryToOctal(text);
                decimalField.value = decimal;
            } else {
                clearFields('Entrada no válida');
            }
        } else if (inputType === 'Hexadecimal') {
            const decimal = hexadecimalToDecimal(text);

            if (!isNaN(decimal)) {
                binaryField.value = hexadecimalToBinary(text);
                hexaField.value = text;
                octaField.value = hexadecimalToOctal(text);
                decimalField.value = decimal;
            } else {
                clearFields('Entrada no válida');
            }
        } else if (inputType === 'Octal') {
            const decimal = octalToDecimal(text);

            if (!isNaN(decimal)) {
                binaryField.value = octalToBinary(text);
                hexaField.value = octalToHexadecimal(text);
                octaField.value = text;
                decimalField.value = decimal;
            } else {
                clearFields('Entrada no válida');
            }
        } else {
            clearFields();
        }
    }

    // Limpia los campos de salida
    function clearFields(message = '') {
        binaryField.value = message;
        hexaField.value = message;
        octaField.value = message;
        decimalField.value = message;
    }

    // Evento principal
    inputField.addEventListener('input', updateFields);
    selectField.addEventListener('change', updateFields); // Permite cambiar entre tipos
});

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('#inputText');
    const resultField = document.querySelector('#asciiResult');

    function stringToAscii(str) {
        return str.split('').map(char => char.charCodeAt(0)).join('-');
    }

    inputField.addEventListener('input', () => {
        const text = inputField.value.trim(); 
        const ascii = stringToAscii(text); // Convierte el texto a ASCII
        resultField.value = ascii; // Muestra el resultado en el campo de salida
    });
});
