/**
 * Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)
 */

 const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

 let arrClean = [];

 arrDirty.map((e) => {
    e === false || e === null || e === undefined || e === 0 || e === '' || isNaN(e) === true ? '': arrClean.push(e)
 })

 console.log('a')
 console.log(arrClean)