/**
 * localStorage: almacenar datos de manera persistente en el navegador
 * 
 * Parte de un objeto Window.
 * 
 * window.lccalStorage.setItem(clave, valor) : almacenar la clave y valor en el navegador
 */

// Introducir clave: 'nombre' y valor: 'Sergio'
console.log(window.localStorage.setItem('nombre', 'Sergio'));
window.localStorage.setItem('altura', 1.90);
window.localStorage.setItem('modulos', {
    bd: 'bases de datos', 
    dwec: 'desarrollo web entorno cliente'}
);

// Longitud de elementos en localStorage
console.log(window.localStorage.length);

/**
 * getItem('clave'): proporciona el valor de la clave pedida.
 * Si la clave no existe, devuelve null
 * Si la clave existe, devuelve el valor asociado.
 * 
 * NOTA: si guardo un objeto es posible que tenga problemas para recoger su valor
 */
console.log(window.localStorage.getItem('nombree'));
console.log(window.localStorage.getItem('nombre'));
console.log(window.localStorage.getItem('modulos'));

/**
 * removeItem('clave'): elimina el pack clave-valor elegido.
 * Si la clave no existe, no realiza nada pero no da error. Tampoco devuelve.
 * Si la clave existe, la elimina. No devuelve nada.
 */
console.log(window.localStorage.removeItem('nombree'));
console.log(window.localStorage.removeItem('nombre'));

let modulos = {
    dwec: 'js',
    dwes: 'php',
    diw: 'css',
    daw: 'ubuntu',
    ing: 'english',
    eie: '$$'
}

window.localStorage.setItem('daw', JSON.stringify(modulos));
let modulosVuelta = JSON.parse(window.localStorage.getItem('daw'));

console.log(modulosVuelta);