let num1 = 0;
let num2 = 0;
let operacion = '';

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
}

function calcular() {
    let display = document.getElementById('display');
    let expresion = display.innerText;
    let resultado;
    
    try {
        
        expresion = expresion.replace(/%/g, '/100');
        resultado = eval(expresion);
        
        // Verificar si el resultado es un número válido
        if (isNaN(resultado) || !isFinite(resultado)) {
            display.innerText = 'Error';
        } else {
            display.innerText = resultado;
        }
        operacion = '';
    } catch (error) {
        display.innerText = 'Error';
    }
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 === 0) {
        return 'Error';
    } else {
        return num1 / num2;
    }
}

function calcularPorcentaje() {
    let display = document.getElementById('display');
    let texto = display.innerText.trim();
    
    if (texto === '') {
        return;
    }
    
    num1 = parseFloat(texto);
    operacion = 'porcentaje';
    display.innerText = texto + '%';
}

function borrarC() {
    let display = document.getElementById('display');
    display.innerText = '';
    num1 = '';
    num2 = '';
    operacion = '';
}

function borrar() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0,-1);
}