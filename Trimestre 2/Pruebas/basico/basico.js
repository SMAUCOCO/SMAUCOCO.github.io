//variables
let numero1=document.getElementById ("numero1")
let numero2=document.getElementById ("numero2")
let solucion=document.getElementById ("solucion")
let solucion2=document.getElementById ("solucion2")
let run=document.getElementById("run")
//


//EVENTOS
run.addEventListener("click", (e) => {
//que cuando pase un click en el objeto HTML con id=run que pase lo que está
//dentro de las llaves

    num1=numero1.value 
    num2=numero2.value
    solucion.innerHTML= "Resultado suma: " + (parseInt(num1)+parseInt(num2))
    //parseiInt hace que actuen como numeros en ligar de texto que es como estan guardados
    //esto hace que el div que tengo llamado solucion se llene con la operacion
    let cadenatotal=""


    for (let v=0 ; v<num2 ; v++) {

        if (v==num2-1) {

            cadenatotal=cadenatotal+((parseInt(num1)+parseInt(num2)))
        }

        else {
            
            cadenatotal=cadenatotal+((parseInt(num1)+parseInt(num2)))+"-"
        }

        //esto hace que se repita con un guion entre cada repeticion pero
        //si es la ultima repeticion que lo ponga sin guion
        //OSEA es un FILTRO!!!! Todo son filtros
        
    }

    solucion2.innerHTML="Resultado suma repetido num2 veces: " + cadenatotal
    //para que asignar al div un valor repetido a partir de una variable, 
    // asignar todo el conjunto que quiero imprimir a una variable como
    //cadenatotal para ir metiendo todo y luego asignarlo

    console.log(e.target.value)
}) 
//addEventListener hace que escuche eventos y haga lo que esta dentro de las llaves 
//


