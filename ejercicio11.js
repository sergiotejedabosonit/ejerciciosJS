/**
 Ejercicio 11
Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.
Ejemplo de uso de la función:
*/

function splitArrayIntoChunks(array, num) {

    let newArray = []
    let counter = 0;

    for (let x = 0; counter < array.length; x++) {
        let newPartArray = []
        for (let y = 0; y < num; y++) {
            if (array[counter] !== undefined) {
                newPartArray.push(array[counter]);
            }
            counter++;
        }
        newArray.push(newPartArray)
    }

    console.log(newArray)
}

splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);

