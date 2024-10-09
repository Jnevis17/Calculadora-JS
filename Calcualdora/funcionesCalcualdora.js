const botonNumeros = document.getElementsByName('data-number'); // son constantes por que estas no cambia
const botonOperacion = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonBorrar = document.getElementsByName('data-delete')[0];

var result = document.getElementById('result') // Es var por que el resultado si cambia 
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText)
        //alert(boton.innerText)
    })
})

botonOperacion.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperacion(boton.innerText)
        //alert(boton.innerText)
    })
})

botonIgual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
})

botonBorrar.addEventListener('click', function () {
    clear();
    actualizarDisplay();
})


function selectOperacion(ope) {
    if (opeActual === '') result;
    if (opeAnterior !== '') {
        calcular()
    }

    operacion = ope.toString();
    opeAnterior = opeActual;
    opeActual = '';

}

function calcular() {
    var calculo;
    const anterior = parseFloat(opeAnterior)
    const actual = parseFloat(opeActual)

    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual
            break
        case '-':
            calculo = anterior - actual
            break
        case 'X':
            calculo = anterior * actual
            break
        case '/':
            calculo = anterior / actual
            break

        default:
            return;
    }
    opeActual =  calculo;
    operacion = undefined;
    opeAnterior = '';

}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = opeActual;
}

clear();