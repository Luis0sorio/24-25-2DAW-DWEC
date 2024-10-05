/**
 * Ejercicio.
 * Crear un formulario que tenga un input para introducir un coche y buscar los coches de esa marca
 * dentro del array COCHES.
 * 
 * Mostrar por consola aquellos coches que tienen esa marca.
 * 
 * Identificar primero el valor introducido en el formulario. Despues crear la funcion. Despues encontrar el numero total.
 * 
 */

// OBJETIVO: capturar variables
let valores = location.search; // Capturamos a partir de la ?

// COMPROBAR: hay marca? he recibido valor por URL?
console.log(valores);

// Si es distinto de vacio entonces tiene contenido
if(valores != ''){
    // divide el string de parametros en tantos valores como & existan
    let valoresArray = valores.split("&");

    console.log(valoresArray)

    // Extraigo el marca y el apellido
    let marca = valoresArray[0].split('=')[1];

    console.log(`El total de coches de la marca ${marca} es ${totalCoches(marca)}`);
}

/**
 * Funcion que recibe una marca y devuelve cuantos coches tiene esa marca
 * @param {string} marca - marca del coche que vamos a buscar
 * @returns {number} valor numerico con el total de coches encontrados
 */
function totalCoches(marca){
    let total = 0;

    for(let i in coches){
        if(coches[i]['marca'] == marca){
            total++;
        }
    }
    return total;
}