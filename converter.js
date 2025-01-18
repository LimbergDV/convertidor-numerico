document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input.is-link');
    const binaryField = document.querySelector('input[placeholder="Texto en Binario"]');
    const selectField = document.querySelector('.select select');

    
    function decimalToBinary(num) {
        let resultado = '';
        while (num > 0) {
            resultado = (num % 2) + resultado;
            num = Math.floor(num / 2);
        }
        return resultado || '0';
    }

    inputField.addEventListener('input', () => {
        const text = inputField.value.trim(); // Valor del campo de entrada
        const inputType = selectField.value; // Tipo de entrada seleccionada

        if (inputType === "Decimal") {
            const decimal = parseInt(text, 10);
            if (!isNaN(decimal)) {
                const binary = decimalToBinary(decimal); // Convierte a binario
                binaryField.value = binary; // Muestra el resultado
            } else {
                binaryField.value = ''; // Limpia si no es un número válido
            }
        } else {
            binaryField.value = ''; // Limpia el campo si no es decimal
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input.is-link');
    const hexaField = document.querySelector('input[placeholder="Texto en Hexadecimal"]');
    const selectField = document.querySelector('.select select');

    function decimalToHexadecimal(num){
        let resultado = '';
        while (num > 0){
            const remainder = num % 16;
            resultado = remainder.toString(16) + resultado;
            num = Math.floor(num / 16);
        }
        return resultado || '0';
    }

    inputField.addEventListener('input', () => {
        const text  = inputField.value.trim();
        const inputType = selectField.value;

        if (inputType === "Decimal"){
            const decimal = parseInt(text, 10)
            if(!isNaN(decimal)){
                const binary = decimalToHexadecimal(decimal);
                hexaField.value = binary;
            } else {
                hexaField.value = '';
            }
        } else {
            hexaField.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input.is-link');
    const octaField = document.querySelector('input[placeholder="Texto en Octagonal"]');
    const selectField = document.querySelector('.select select');

    function decimalToOctadecimal(num){
        let resultado = '';
        while (num > 0){
            const remainder = num % 8;
            resultado = remainder.toString(8) + resultado;
            num = Math.floor(num / 8);
        }
        return resultado || '0';
    }

    inputField.addEventListener('input', () => {
        const text  = inputField.value.trim();
        const inputType = selectField.value;

        if (inputType === "Decimal"){
            const decimal = parseInt(text, 10)
            if(!isNaN(decimal)){
                const binary = decimalToOctadecimal(decimal);
                octaField.value = binary;
            } else {
                octaField.value = '';
            }
        } else {
            octaField.value = '';
        }
    });
});


