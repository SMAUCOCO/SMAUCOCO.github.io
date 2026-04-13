
// GENERADOR DE CONTRASEÑAS

// Definimos los caracteres que vamos a usar
let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";
let contraseña = ""
// devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

let long = numeroAleatorio(8, 50)
//el numero aleatorio que vamos a usar para definir la long de la contraseña

let numero = caracteresNumeros[numeroAleatorio(1, 2)]
//numero aleatorio

let letraEspecial = caracteresEspeciales[numeroAleatorio(1, 2)]
//letra especial aleatoria

let letraMayuscula = caracteresMayusculas[numeroAleatorio(1, 8)]
//letra mayuscula aleatoria

let letraMinuscula = caracteres[numeroAleatorio(1, 8)]
//letra minuscula aleatoria

//Haria falta usar un dameResto donde se rellene hasta long con caracteres
//normales porque el max de cada uno era 2 y lo repito mas de 2 veces.


//para que la contraseña tenga la longitud deseada, le vamos a ir añadiendo caracteres aleatorios
for (let i = 0; i < long; i++) {
    let caracter = caracteres + caracteresMayusculas + caracteresNumeros + caracteresEspeciales;
    contraseña += caracter[numeroAleatorio(0, caracter.length)];
}

//desordenar array
contraseña = contraseña.split('').sort(() => Math.random() - 0.5).join('');


console.log(contraseña)


