let lista_nombre = []
let lista_monto = []


function envio() {
    const nombreInput = document.getElementById("nombre");
    const cantidadInput = document.getElementById("cantidad");

    if (nombreInput.value != "" && cantidadInput.value != "") {
        sumaTotal(cantidadInput.value);
        sumarPersonas(nombreInput.value, cantidadInput.value);

        nombreInput.value = "";
        cantidadInput.value = "";
    } else {
        alert("Completar el formulario por favor");
    }
}

let cantidadTotal = 0;

function sumaTotal(cantidad) {
    let totalFinal = document.getElementById("totalFinal");
    cantidadTotal = cantidadTotal + parseInt(cantidad);
    totalFinal.innerHTML = ` $ ${cantidadTotal} `;
}

let cantPersonas = 0;

const sumarPersonas = (nombre, cantidad) => {
    const resultados = document.getElementById("resultados");
    let persona = document.createElement("p");
    const texto = nombre + ": $" + cantidad;
    persona.innerHTML = texto;
    resultados.appendChild(persona);

    cantPersonas++;

    const pagoIndividual = document.getElementById("pagaCadaUno");
    const cantidadIndividual = parseInt(cantidadTotal) / cantPersonas;
    pagoIndividual.innerHTML = "$" + cantidadIndividual;
};


























// function envio() {

//     const nombreInput = document.getElementById('nombre');
//     const montoInput = document.getElementById('monto');

//     if (nombreInput.value != "" && montoInput.value != "") {
//         lista_nombre.push(nombreInput.value)
//         lista_monto.push(montoInput.value)

//         console.log(lista_nombre);
//         console.log(lista_monto);

//         nombreInput.value = "";
//         montoInput.value = "";
//     } else {
//         alert("Completar el formulario")
//     }

// }


// let montoTotal = 0;

// function sumaTotal(monto) {
//     let totalTextConainer = document.getElementById("totalTextConainer");
//     montoTotal = montoTotal + parseInt(monto);
//     totalTextConainer.innerHTML =  $ ${montoTotal} ;
// }

// let cantPeople = 0;

// const addPeople = (nombre, monto) => {
//     const resultados = document.getElementById("resultados");
//     let persona = document.createElement("p");
//     const texto = nombre + ": $" + monto
//     persona.innerHTML = texto;
//     resultados.appendChild(persona)

//     cantPeople++;

//     const aPagarCU = document.getElementById("aPagar");
//     const montoAPagarCU = parseInt(montoTotal) / cantPeople;
//     aPagarCU.innerHTML = "$" + montoAPagarCU;
// };



