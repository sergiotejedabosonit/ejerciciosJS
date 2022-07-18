/**
 * Ejercicio 6
Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
Primer parámetro es un número float con x decimales
Según parámetro es un int que indique el número de decimales al que redondear
Evitar usar el método toFixed()

 */


let num = 2.49856
console.log(Math.round(num))


/**
function RoundNumber(numFloat, int) {

    let newNumber = numFloat;

    for (let x = 0; x < int; x++) {
        newNumber = newNumber * 10;
    }
    newNumber = parseInt(newNumber)
    
    console.log(newNumber)

    for (let y = 0; y < int; y++) {
        newNumber = newNumber / 10;
    }
    console.log(newNumber)
}
 */

function RoundNumber(numFloat, int) {

    let newNumber = numFloat;

    for (let x = 0; x < int; x++) {
        newNumber = newNumber * 10;
    }

    newNumber = parseInt(Math.round(newNumber))
    
    for (let y = 0; y < int; y++) {
        newNumber = newNumber / 10;
    }
    console.log(newNumber)
    
}

RoundNumber(num, 3)

