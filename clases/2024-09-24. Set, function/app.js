let a = new Set();
let b = new Set([2,5,1,8,9]);
// console.log(b);

// size me devuelve el tamaño
// console.log(a.size);

// add agrega elemento
a.add(6); // agrego un valor que no existe
a.add(1);
a.add(6); // agrego un valor que ya existe (lo ignora)
a.add(5);

// metodo has comprueba si un valor esta contenido dentro de la coleccion
console.log(a.has(1)); // true pues el 1 existe
console.log(a.has(8)); // false pues el 8 NO existe

// delete elimina un valor
a.delete(1); // Elimina el 1
a.delete(2); // No elimina el 2 porque no existe

// clear vacia la coleccion
// a.clear(); // se vacia la coleccion 'a'


/**
 * RECORRER SET
 */
// For .. in NO FUNCIONA
// for (let i in a) {
//     console.log(i);
//     console.log(a[i]);
//     console.log('');
// }
// Recorremos con for .. of
for (let i of a) {
    console.log(i);
    console.log('');
}

function suma (a,b){
    return a + b;
}

let sumaFuncion = function (a,b){
    return a + b;
}

let sumaArrow = (a, b) => (a + b);

let c = suma(1,2);
let d = sumaFuncion(1,2);
let e = sumaArrow(1,2);

console.log(c);
console.log(d);
console.log(e);


/**
 * Ejercicios
 */

// Encuentra todos los trabajadores con menos de 30 años.
// Se debe recoger el "nombre" unicamente

/**
 * Funcion que busca en el array trabajadores aquellos que tienen menos de 30 años.
 * 
 * @returns {array} - Devuelve array con nombres de trabajadores
 */
function menosTreinta(){
    let resultado = new Array();
    // let resultado = [];
    /**
     * Comenzamos recorriendo todas las iteraciones de 'trabajadores'
     * Cada 'trabajadores[i]' es un objeto con contenido.
     * Debemos entrar
     */
    for (let i in trabajadores) {
        // Debo entrar en cada trabajadores[i]
        console.log(trabajadores[i]);
        if(trabajadores[i]['edad'] < 30){
            resultado.push(trabajadores[i]['nombre']);
        }
    }
    return resultado;
}


console.log(menosTreinta());

/** 
 * Ejercicio 1.
 * Crea una función que imprima en la consola los nombres y puestos de todos los trabajadores 
 * que están actualmente en la empresa.
 */
/**
 * Pasos:
 * - ¿Necesito una estructura? En este caso no me pide devolverlos sino imprimir.
 * - En caso de necesitar estructura:
 * 1. Creamos estructura 'nombrePuestos'
 * 2. Recorrer trabajadores.
 * 3. Hacer un push de [nombre, puesto]
 */

/**
 * 
 * @returns {array} - Contenido del array [nombre, puesto]
 */
function trabadoresActuales(){
    let nombrePuestos = new Array();
    for (let i in trabajadores) {
        if(trabajadores[i]['enEmpresa']){
            nombrePuestos.push([trabajadores[i]['nombre'], trabajadores[i]['puesto']]);
        }
    }
    return nombrePuestos;
}

console.log(trabadoresActuales());

/** 
 * Ejercicio 2.
 * Define una función que calcule y devuelva la suma total de la experiencia 
 * de todos los trabajadores que están en la empresa.
 */
let contadorExperiencia = 0;
for (let i in trabajadores) {
    if(trabajadores[i]['enEmpresa']){
        contadorExperiencia += trabajadores[i]['experiencia'];
    }
}
console.log(contadorExperiencia);

/** 
 * Ejercicio 3.
 * Escribe una función que reciba un nombre de trabajador 
 * y devuelva un array con sus habilidades.
 */

/**
 * Funcion que recibe un nombre de trabajador y devuelva un array con sus habilidades
 * @param {string} nombre - Nombre del trabajador
 * @returns {array} Habilidades del trabajador si coincide con el nombre. Vacio si no encuentra nombre.
 */
function habilidadesTrabajador(nombre){
    for (let i in trabajadores) {
        if(trabajadores[i]['nombre'] == nombre){
            return trabajadores[i]['habilidades'];
        }
    }
    return [];
}

console.log(habilidadesTrabajador('Ana'));    // ["JavaScript", "HTML", "CSS"]
console.log(habilidadesTrabajador('Sergio')); // []

/** 
 * Ejercicio 4.
 * Crea una función que reciba un puesto y devuelva un array 
 * con los nombres de los trabajadores que ocupan ese puesto.
 */

/**
 * 
 * @param {array} puesto 
 * @returns {array}
 */
function puestoTrabajador(puesto){
    let nombreTrabajadores = new Array();
    for (let i in trabajadores) {
        if(trabajadores[i]['puesto'] == puesto){
            nombreTrabajadores.push(trabajadores[i]['puesto']);
        }
    }
    return nombreTrabajadores;
}

/** 
 * Ejercicio 5.
 * Define una función que reciba un nombre y devuelva true si 
 * el trabajador está en la empresa, o false en caso contrario.
 */

/**
 * 
 * @param {boolean} nombre 
 * @returns {boolean|number}
 */
function enEmpresa(nombre){
    for (let i in trabajadores) {
        for (let i in trabajadores) {
            if(trabajadores[i]['nombre'] == nombre){
                return trabajadores[i]['enEmpresa'];
            }
        }
    }
    return -1; // Respuesta para el caso en el que el nombre no coincide
}

/**
 * Ejercicio 6 (no esta en Aula Virtual)
 * Crea una funcion que reciba una habilidad y devuelva
 * cuantos trabajadores tienen dicha habilidad.
 */

/**
 * 
 * @param {string} habilidad 
 * @returns {number}
 */
function nTrabajadoresHabilidad(habilidad){
    let nTrabajadores = 0;
    for (let i in trabajadores) {
        if(trabajadores[i]['habilidades'].includes(habilidad)){
            nTrabajadores++;
        }
    }
    return nTrabajadores;
}

/**
 * Ejercicio 7 (no esta en Aula Virtual)
 * Crea una funcion que reciba una localizacion y un puesto
 * y devuelva true si existe ese puesto en esa localizacion
 * y devuelva false si no existe ese puesto en esa localizacion
 */

/**
 * 
 * @param {string} localizacion 
 * @param {string} puesto 
 * @returns 
 */
function existeTrabajadorLocPues(localizacion, puesto){
    for (let i in trabajadores) {
        if(trabajadores[i]['localizacion'] == localizacion && trabajadores[i]['puesto'] == puesto){
            return true;
        }
    }
    return false;
}

/**
 * Ejercicio 8 (no esta en Aula Virtual)
 * Crea una funcion que reciba los años de experiencia y el puesto
 * y devuelva aquellos trabajadores que tengan al menos esa experiencia 
 * en ese puesto
 */

/**
 * 
 * @param {number} experiencia 
 * @param {string} puesto 
 * @returns {array}
 */
function trabajadorExperiencia(experiencia, puesto){
    let trab = new Array();
    for (let i in trabajadores) {
        if(trabajadores[i]['experiencia'] > experiencia && trabajadores[i]['puesto'] == puesto ){
            trab.push(trabajadores[i]);
        }
    }
    return trab;
}

trabajadorExperiencia(3, 'Diseñador Gráfico'); // ok
trabajadorExperiencia('hola', 'Diseñador Gráfico');
trabajadorExperiencia(null, 'Diseñador Gráfico');
trabajadorExperiencia(-1, 'Diseñador Gráfico');



