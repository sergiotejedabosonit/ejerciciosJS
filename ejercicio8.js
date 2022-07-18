/**
 Ejercicio 8
Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

 */


function fromBytesToFormattedSizeUnits(bytes, numQ) {
    let num = numQ ? numQ : 3; 
    let x = bytes.toPrecision(num);

    // LA CADENA, AL SER NEGATIVA TIENE EL GUION DELANTE, ASIQUE SUMAMOS 1 MAS
    if(bytes > 0){
        x = x.slice(0, num+1)
    } else {
        x = x.slice(0, num+2)
    }
   
  

    // CONVIERTO BYTES EN POSITIVO, POR SI ME LO ENVIAN EN NEGATIVO
    if (bytes < 0) {
        bytes = bytes * -1
    } 

    if (bytes < Math.pow(10, 3)) {
        console.log(`${x} BYTES`)
    } else if (bytes < Math.pow(10, 6)) {
        console.log(`${x} KILO`)
    } else if (bytes < Math.pow(10, 9)) {
        console.log(`${x} MEGA`)
    } else if (bytes < Math.pow(10, 12)) {
        console.log(`${x} GIGA`)
    } else if (bytes < Math.pow(10, 15)) {
        x = x / Math.pow(10, 12)
        console.log(`${x} TERA`)
    } else if (bytes < Math.pow(10, 18)) {
        x = x / Math.pow(10, 15)
        console.log(`${x} PETA`)
    } else if (bytes < Math.pow(10, 21)) {
        x = x / Math.pow(10, 18)
        console.log(`${x} EXA`)
    } else if (bytes < Math.pow(10, 24)) {
        x = x / Math.pow(10, 21)
        console.log(`${x} ZETTA`)
    } else {
        x = x / Math.pow(10, 24)
        console.log(`${x} YOTTA`)
    }

}

fromBytesToFormattedSizeUnits(-12145489451.5932, 5)