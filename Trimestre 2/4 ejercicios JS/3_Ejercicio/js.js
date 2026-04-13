
//CIFRADO CESAR

let abece="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let frase="Casa"; //frase a cifrar
let paso=3; //paso con el que se cifra la frase
let nuevafrase = ""; //variable donde se va a guardar la frase cifrada


for (let k=0; k<frase.length; k++) {
    
    console.log("--Voy a buscar la letra " + frase[k]); 
    //k es la letra en el array y va aumentando para pasar por todo el array

    let posicion = abece.indexOf(frase[k]); 
    //devuelve la posicion de la letra en el array
    console.log("esta en la posicion " + posicion);


    let nuevaPosicion = (posicion + paso); 
    //devulve la nueva letra que será posicion + paso

    let nuevaLetra = abece[nuevaPosicion];
    console.log("--La nueva letra es " + nuevaLetra);

    nuevafrase = nuevafrase + nuevaLetra;

}

console.log("<-- " + frase + " cifrado es " + nuevafrase + " -->");

