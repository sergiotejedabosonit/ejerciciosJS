/**
Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
Ejemplo de uso de la función:
 */
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

function toLowercaseKeys ( obj ) {

    let objDescomInArr = Object.entries(obj)
    console.log(objDescomInArr)

    let newObjetc = {}

    for(let x = 0; x < objDescomInArr.length; x++){
        for(let y = 0; y < objDescomInArr[x].length; y++){
            let newProperty = ''
       
            if(y===0){
           let firstPart = objDescomInArr[x][0].charAt(0).toUpperCase();
           let secondPart = objDescomInArr[x][0].substring(1, objDescomInArr[x][0].length).toLocaleLowerCase();
           newProperty = (firstPart.concat(secondPart))
           newObjetc[newProperty] = objDescomInArr[x][1]
            } 
        }
    }
    console.log(newObjetc)
}

const myObjLowercase = toLowercaseKeys(myObject);

console.log(myObjLowercase);