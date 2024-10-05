/**
 * Ejercicio.
 * Crear dos fichero HTML que compartan informacion uno con otro.
 * - F1: contiene un formulario en HTML para introducir datos. (num elementos libre)
 * - F2: recoge los datos del formulario del F1 de la URL (de la ? en adelante).
 *       estos datos los tratamos como un string y necesitamos obtener los valores.
 *       Estos valores los imprimimos por consola de la siguiente manera:
 *       - Un valor         ---> info
 *       - Mas de un valor  ---> group
 *       - No hay valores   ---> warn
 * 
 * Identificar primero que herramientas del BOM necesitamos utilizar unicamente con los
 * objetos: Navigator, Location, History, Console.
 */

// OBJETIVO: capturar nombre y apellido
let valores = location.search; // Capturamos a partir de la ?

// Compruebo que el tipo es string para tratar la cadena como string y hacer split para seccionarla
console.log(typeof valores);

// divide el string de parametros en tantos valores como & existan
let valoresArray = valores.split("&");

// Compruebo el contenido de lo valores
console.log(valoresArray);

// Extraigo el nombre y el apellido
let nombre = valoresArray[0].split('=')[1];
let apellido = valoresArray[1].split('=')[1];

// Si ambos tienen longitud mayor a 0 implica que existe un dato
if(nombre.length > 0 && apellido.length > 0){
    console.group("Nombre completo");
    console.info(`El nombre es ${nombre}`);
    console.info(`El apellido es ${apellido}`);
    console.groupEnd("Nombre completo");
} 
// Si nombre tiene longitud y apellido no
else if(nombre.length > 0 && apellido.length == 0){
    console.info(`El nombre es ${nombre}`);
}
// Si apellido tiene longitud y nombre no
else if(apellido.length > 0 && nombre.length == 0){
    console.info(`El apellido es ${apellido}`);
}
// No hay contenido de ninguno
else{
    console.warn("No hay valores");
}
