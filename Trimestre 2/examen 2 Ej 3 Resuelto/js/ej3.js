let num=document.getElementById ("numero")
let resultado=document.getElementById ("resultado")
let run=document.getElementById ("run")

let total=0
let numeros=[]

function suma(a,b) {

    return parseInt(a)+parseInt(b) 
    // a y b los ve como texto en el event listener por lo que hay que usar parseInt
}

run.addEventListener("click", (e) => {
    
    //solo positivos
    if (num.value > 0) {

        numeros.push(num.value)
        total=suma(total,num.value) 
        resultado.innerHTML=numeros+". Total: "+total
        

    }
    
    
})


