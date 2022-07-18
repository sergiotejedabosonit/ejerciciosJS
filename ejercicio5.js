/**
 * Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
Ejemplo: {city: "Logroño", isSpain: "true"}

 */

const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

let newArray = []
  

arrCities2.map(e=> {
    e.capital === true ? '' : newArray.push({city: e.city, isSpain: e.country === 'Spain' ? true : false })
 })

 console.log(newArray)