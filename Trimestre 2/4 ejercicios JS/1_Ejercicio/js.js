
//DADO X CARAS


let num_caras = 6;
// cantidad de caras del dado

function dameNumero(num_caras) {

    let numero = Math.floor(Math.random() * num_caras) + 1;
    return numero;
}
//funcion que genera un numero aleatorio entre 1 y num_caras

let resultado = dameNumero(num_caras);
//asigna el numero aleatorio a la variable resultado

console.log(resultado);
//Muestra el numero aleatorio generado en la consola






