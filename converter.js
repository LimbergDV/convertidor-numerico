//funciones de decimal a x método 
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

//funciones de binario a x método

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input.is-link');
    const resultField = document.querySelector('input[placeholder="Texto en Decimal"]');
    const selectField = document.querySelector('.select select');

    function binaryToDecimal(binaryStr){
        let decimal = 0;
        for(let i = 0; i < binaryStr.length; i++){
            const bit = parseInt(binaryStr[i], 10);
            if (bit !== 0 && bit !== 1) return NaN; // Verifica si no es binario
            decimal = decimal * 2 + bit;
        }
        return decimal;
    }

    inputField.addEventListener('input', () => {
        const text  = inputField.value.trim();
        const inputType = selectField.value;

        if (inputType === "Binario"){
            const decimal = binaryToDecimal(text);
            if(!isNaN(decimal)){
                resultField.value = decimal;
            } else {
                resultField.value = 'Entrada de valor no valida';
            }
        } else {
            resultField.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input.is-link');
    const resultField = document.querySelector('input[placeholder="Texto en Hexadecimal"]');
    const selectField = document.querySelector('.select select');

    function binaryToHexadecimal(binaryStr) {
        if (!/^[01]+$/.test(binaryStr)) return 'Entrada no válida';

        while (binaryStr.length % 4 !== 0) {
            binaryStr = '0' + binaryStr;
        }

        // Agrupa en bloques de 4 bits y convierte cada bloque a hexadecimal
        let hexadecimal = '';
        for (let i = 0; i < binaryStr.length; i += 4) {
            const fourBits = binaryStr.slice(i, i + 4); // Toma un bloque de 4 bits
            const decimalValue = parseInt(fourBits, 2); // Convierte el bloque a decimal
            hexadecimal += decimalValue.toString(16).toUpperCase(); // Convierte a hexadecimal
        }

        return hexadecimal;
    }

    inputField.addEventListener('input', () => {
        const text = inputField.value.trim();
        const inputType = selectField.value; 

        if (inputType === "Binario") {
            const hexadecimal = binaryToHexadecimal(text);
            resultField.value = hexadecimal !== 'Entrada no válida' ? hexadecimal : 'Entrada no válida';
        } else {
            resultField.value = ''; 
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input.is-link');
    const resultField = document.querySelector('input[placeholder="Texto en Octagonal"]');
    const selectField = document.querySelector('.select select');

    
    function binaryToOctal(binaryStr) {
        if (!/^[01]+$/.test(binaryStr)) return 'Entrada no válida';

        while (binaryStr.length % 3 !== 0) {
            binaryStr = '0' + binaryStr;
        }

        let octal = '';
        for (let i = 0; i < binaryStr.length; i += 3) {
            const threeBits = binaryStr.slice(i, i + 3);
            const decimalValue = parseInt(threeBits, 2);
            octal += decimalValue.toString(8);
        }
        return octal;
    }

    inputField.addEventListener('input', () => {
        const text = inputField.value.trim(); 
        const inputType = selectField.value; 

        if (inputType === "Binario") {
            const octal = binaryToOctal(text); 
            resultField.value = octal !== 'Entrada no válida' ? octal : 'Entrada no válida';
        } else {
            resultField.value = 'La entrada no tiene unos ni ceros'; 
        }
    });
});

