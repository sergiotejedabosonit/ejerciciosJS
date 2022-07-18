/**
 Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:
Primer parámetro es un objeto con x número de campos y valores
Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

 */


// func va a estar hecho para meter una sentencia como la del ejemplo, se trata mas de una condicion que da un booleano que una funcion como tal

function returnFalsyValues(obj, func) {
   let objDescomInArr = Object.entries(obj)

   let newResult = {};

   objDescomInArr.map((e,i) => {
     let z = e.filter(func)
   
     if(z.length === 1){
      let a = e[0];
      let b = e[1];

      
      newResult[a] = b
      
      
     }
     
   })
   return newResult

}

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')

console.log(result)