/**
 * Accedo a la linea del HTML que tiene el id DWEC.
 * SOLO PUEDE HABER UNA COMO MUCHO
 * 
 * Si no hay el id que estoy pidiendo, devuelve NULL
 */
// console.log(document.getElementById('dwec')); 
// console.log(document.getElementById('dwes'));

// console.log(document.getElementsByTagName('p'));

// console.log(document.getElementsByClassName('dwes'));

/**
 * OBJETIVO: cambiar la clase a Miguel Angel
 * Pasos:
 * 1. Hallar el nodo donde esta Miguel Angel
 *      - Opcion A: buscar por etiqueta <p>
 *      - Opcion B: buscar por class = "dwes"
 * 2. Buscar dentro del array resultado (ya sea por etiqueta o por clase)
 * cual es la correcta y con ello acceder.
 * 3. Una vez tengo la etiqueta correcta, debo usar setAttribute para cambiar
 * su contenido 
 */

// Paso 1
let ma = document.getElementsByTagName('p'); // ma tiene un array de etiquetas p
// Paso 2
console.log(ma); // Pinto la 1 porque se que es la de Miguel Angel
// Paso 3
ma[1].setAttribute('class', 'ok');

/**
 * OBJETIVO: quitar la clase a Miguel Angel
 */
// ma[1].removeAttribute('class');      // ESta es la correcta
// ma[1].setAttribute('class', '');     // Esta es la chapuza (porque class sigue existiendo)


/**
 * OBJETIVO: crear una etiqueta y ponerla debajo de Miguel Angel
 * <p id="daw">Sergio 2</p> ----> tras Miguel Angel
 */
let p = document.createElement('p'); // <p></p>
p.setAttribute('id', 'daw');         // <p id="daw"></p>
p.textContent = "Sergio 2";          // <p id="daw">Sergio 2</p>
/**
 * Opciones para colocar a Miguel Angel.
 * Todas ellas pasan por IDENTIFICAR DONDE COLOCARLA
 * 1. Como nodo hijo de body        (descartada)
 * 2. Antes de David                metodo insertBefore(nodoNuevo, nodoReferencia)
 * 3. Despues de Miguel Angel       (no existe metodo insertAfter) 
 */

document.body.insertBefore(p, ma[2]);

/**
 * Ejercicio 1.
 * Accede al nodo <ul> e inserta elementos <li> con el contenido del array 'modulos'
 * 
 * PISTA: usar appendChild
 * 
 * PASOS:
 * 1. Localizar etiqueta <ul>
 * 2. Crear <li>
 * 3. Insertar texto en <li>
 * 4. Adjuntar <li> en etiqueta referencia (<ul>)
 */

let modulos = ['dwec', 'dwes', 'daw', 'ing', 'eie', 'diw'];

// Localizo la etiqueta PADRE sobre la que insertar los <li>
let ul = document.getElementById('lista');

for(let i = 0; i < modulos.length; i++){
    let li = document.createElement('li');
    li.textContent = modulos[i];
    ul.appendChild(li);
}

/**
 * Ejercicio 2.
 * Crea una lista ordenada que vaya al final del <body>
 * La lista ordenada debe contener el titulo y:
 * - si esta completada, debera tener color verde el titulo
 * - si no esta completada, debera tener color rojo el titulo
 * 
 * ACLARACION: que salga todo del objeto tareas
 */
let tareas = [
    { id: 1, titulo: "Tarea 1", completada: true },
    { id: 2, titulo: "Tarea 2", completada: false },
    { id: 3, titulo: "Tarea 3", completada: false },
    { id: 4, titulo: "Tarea 4", completada: false },
    { id: 5, titulo: "Tarea 5", completada: true },
    { id: 6, titulo: "Tarea 6", completada: true },
];

// Para resolver esto, ¿que pasos ordenados debería de dar?
/**
 * 1. Crear clases CSS de completada y no completada.
 * 2. Etiqueta de referencia. <body> como etiqueta de referencia.
 * 2.1. appendChild inserta el elemento AL FINAL del elemento padre que se establezca.
 * body como elemento padre para usar el appendChild
 * 3. Crear el bucle de tareas
 * 4. Crear <ol>
 * 5. Crear <li>
 * 6. Personalizar <li> (insertar titulo y clase)
 * 7. Insertar <li> en <ol>
 * 8. Insertar <ol> en <body>
 * 
 */

let body = document.getElementsByTagName('body')[0];
let ol = document.createElement('ol');

for(let i = 0; i < tareas.length; i++){
    let li = document.createElement('li'); 
    li.textContent = tareas[i]['titulo'];
    li.setAttribute('id', tareas[i]['id']);

    if(tareas[i]['completada']){
        li.setAttribute('class', 'completada');
    }else if(!tareas[i]['completada']){
        li.setAttribute('class', 'nocompletada');
    }

    ol.appendChild(li);   
}

body.appendChild(ol);



let pruebaClassList = document.getElementById('claro');
console.log(pruebaClassList.classList);
pruebaClassList.classList.add('raton');
console.log(pruebaClassList.classList);
pruebaClassList.classList.remove('raton');
console.log(pruebaClassList.classList);