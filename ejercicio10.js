/**
Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
Ejemplo de uso de la función:
 */


function removeHTMLTags (cadena) {
debugger;

    let thereAreLabels = true;
    for(let x = 0; thereAreLabels === true; x++){
        
        let x = cadena.search('<')
        let y = cadena.search('>')
        console.log(x, y)
        let sust = cadena.substr(x,y+1)
        console.log(sust)
        cadena = cadena.replace(sust, '')
        console.log(cadena)

        thereAreLabels = cadena.includes('<' || '>')

    }

console.log(thereAreLabels)




    
    
}

const result = removeHTMLTags('<div><span>lorem ipsum</span></div>');
 
console.log(result);