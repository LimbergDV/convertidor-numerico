document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input.is-link');
    const binaryField = document.querySelector('input[placeholder="Texto en binario"]');
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
    const hexaFied = document.querySelector('input[placeholder="Texto en hexadecimal"]');
    const selectField = document.querySelector('.select select');


});
