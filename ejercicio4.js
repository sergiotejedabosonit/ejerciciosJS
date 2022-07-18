/**
 * Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
 */

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

let newArray = []

for(let x = 0; x < arrNumber1.length; x++){
    for(let y = 0; y < arrNumber2.length; y++){
        if( arrNumber3.includes(arrNumber2[y])){
            if(newArray.includes(arrNumber2[y]) === false){
                newArray.push(arrNumber2[y])
            }
        }
    }
   if( arrNumber2.includes(arrNumber1[x]) || arrNumber3.includes(arrNumber1[x])  ){
    if(newArray.includes(arrNumber1[x]) === false){
    newArray.push(arrNumber1[x])
    }
   }
}



console.log(newArray)