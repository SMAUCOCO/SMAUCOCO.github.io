
//LA PRIMITIVA

function dameNumero(max) {

    let num = Math.floor(Math.random() * max) + 1;
    return num;
}
//funcion que genera un numero aleatorio entre 1 y max

let lista_numeros = [];
//array donde se guardaran los numeros aleatorios generados

while (lista_numeros.length < 6) {

    let num_sacado = dameNumero(49);
    let posicion = lista_numeros.indexOf(num_sacado);
    if (posicion > -1) {

        console.log(num_sacado + ", ese numero ya esta en la lista, posicion " + posicion);
    }

    else {

        lista_numeros.push(num_sacado);
    }
}

console.log(lista_numeros);

let aqui = document.getElementById("solucion");
aqui.innerHTML = lista_numeros;

