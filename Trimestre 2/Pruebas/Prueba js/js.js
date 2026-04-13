console.log("Hola mundo desde JavaScript");
console.warn("Este es un mensaje de advertencia para mostrar cómo se ven los mensajes de advertencia en la consola del navegador.");
console.error("Este es un mensaje de error para mostrar cómo se ven los mensajes de error en la consola del navegador.");

let nombre="Juan";
let edad=25;

console.log("El nombre es: " + nombre);

const curso="ASIR";
console.log("El curso es: " + curso);
console.log("El curso  " +curso+ " es muy interesante");


if (edad >= 12 && edad < 17) {

    console.log("toma cafe.");
}

else if (edad >= 18) {

        console.log("tu no bebe")
    }

    





// escribir del 1 al 10 usando un bucle for
for (let i = -10; i <= 10; i++) {

    console.log(i);
}
// for tiene 3 componentes: la inicialización, la condición para acabar y 
// la actualización de la variable de control que es lo que hace que el bucle avance
// hasta que la condición deje de cumplirse




// ejemplo con while
while (edad < 30) {

    edad++;
    console.log(edad);
}


let num=1;
console.log(num);
console.log(num++);//poner el ++ despues hace que imprima primero y luego sume 
console.log(num); 
console.log(++num);//poner el ++ antes hace que sumea antes y luego imprima 



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



function dameNumero(max) {

    // Poner comentarios a cada función que se haga, para entender lo que hace cada una
    // pasado un tiempo.

    // El parametro max es una variable dentro de la funcion que la funcion espera 
    // recibir cuando se llame para que pueda funcionar correctamente. Cambiar el valor 
    // de max al llamar a la funcion, cambiara el resultado de la funcion.

    let num = Math.floor(Math.random() * max) + 1;
    // Math.random() genera un número decimal entre 0 y 1, pero nunca llega a ser 1 y multiplica
    // ese numero entre 0 y 1 por el numero max.

    // Math.floor() redondea el número hacia abajo al entero más cercano, lo que garantiza que el resultado sea un número entero entre 0 y max-1.

    // Al sumar 1 al resultado, obtenemos un número entero entre 1 y max, inclusive.

    return num;
}



function suma(a, b) {
    // La función suma toma dos parámetros, a y b, que representan los números que se van a sumar.
     let total = a + b;

     return total;
     // La palabra clave return se utiliza para devolver un valor desde la función. En este caso, devuelve el resultado de la suma de a y b.
}

let misuma = suma(5, 10); // Aquí se llama a suma para que su resultado se almacene en misuma
console.log(misuma);
suma(3, 7)

console.log("Espacio entre funciones"); 

let random = dameNumero(150);

for (let i = 0; i <= 2; i++) {

    console.log(dameNumero(150));
}

