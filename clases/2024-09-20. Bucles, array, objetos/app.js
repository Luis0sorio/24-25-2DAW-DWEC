// Array
//        0  1     2        3
let ar = [2, 5, 'Sergio', true];

// Objeto
let ob = {
    'pos1' : 2, 
    'pos2' : 5, 
    'pos3' : 'Sergio', 
    'pos4' : true,
    'a'    : null
};

// console.log(ar);
// console.log(ob);

// recorremos estructura 'ob' creada arriba
// usamos variable 'i' para las iteraciones
for (let i in ob) {
    // console.log(i);     // OBTENGO EL NOMBRE DE LA POSICION
    // console.log(ob[i]); // OBTENGO EL VALOR
    // console.log('');    // Para que quede legible en consola
}

let productos = {
    'mesa' : 50,
    'silla' : 25,
    'raton' : 10,
    'monitor1' : 100,
    'monitor2' : 150,
    'ordenador1' : 500,
    'proyector' : 200,
    'ordenador2' : 600
}

/**
 * Ejercicio 1.
 * Muestra el producto más caro
 */

// Solucion 1. Variables auxiliares
let nombre = '';
let precio = 0;

for (let i in productos) {
    // Primera iteracion
    if(nombre == '' && precio == 0){
        nombre = i;             // Actualizamos nombre
        precio = productos[i];  // Actualizamos valor
    }
    // Resto de iteraciones
    else{
        // Si precio actual es menor que el precio del producto de iteracion actual
        if(precio < productos[i]){
            nombre = i;             // Actualizamos nombre
            precio = productos[i];  // Actualizamos valor
        }
    }
}
// console.log("El producto mas caro es: " + nombre);

// Solucion 2. Usando array
//      [nombre, precio]
let prod = ['', 0];
for (let i in productos) {
    // Primera iteracion
    if(prod[0] == '' && prod[1] == 0){
        prod = [i, productos[i]]; // actualizamos contenido
    }
    // Resto de iteraciones
    else{
        // Si precio actual es menor que el precio del producto de iteracion actual
        if(prod[1] < productos[i]){
            prod = [i, productos[i]]; // actualizamos contenido
        }
    }
}
console.log("El producto mas caro es: " + prod[0]);

// Solucion 3. Usando objeto
let producto_auxiliar = {
    'nombre' : '',
    'precio' : 0
};
for (let i in productos) {
    // Primera iteracion
    if(producto_auxiliar['nombre'] == '' && producto_auxiliar['precio'] == 0){
        producto_auxiliar['nombre'] = i;             // Actualizamos nombre
        producto_auxiliar['precio'] = productos[i];  // Actualizamos valor
    }
    // Resto de iteraciones
    else{
        // Si precio actual es menor que el precio del producto de iteracion actual
        if(producto_auxiliar['precio'] < productos[i]){
            producto_auxiliar['nombre'] = i;             // Actualizamos nombre
            producto_auxiliar['precio'] = productos[i];  // Actualizamos valor
        }
    }
}
console.log("El producto mas caro es: " + producto_auxiliar['nombre']);

/**
 * Ejercicio 2.
 * Muestra el precio mas caro
 */
console.log("El producto mas caro es: " + producto_auxiliar['precio']);

let productos_array = [
    ['mesa',50],
    ['silla',25],
    ['raton',10],
    ['monitor1',100],
    ['monitor2',150],
    ['ordenador1',500],
    ['proyector',200],
    ['ordenador2',600]
]

/**
 * Ejercicio 3. 
 * Busca el producto mas caro.
 * Si este producto es menor de 800, 
 * ingresar un nuevo producto (nombre y valor libres).
 */

// Paso 1. Elegir metodo de array
// En este caso, para ingresar un nuevo producto debemos usar push

// Paso 2. Recorrer productos_array. 
// En otra estructura no podemos usar metodos de array
let valor = 0;
for(let i in productos_array){
    if (productos_array[i][1] > valor){
        valor = productos_array[i][1];
    }
    // productos_array[i][1] > valor ? valor = productos_array[i][1] : valor = valor;
}
// Paso 3. Comprobar si hay que agregar valor
if(valor < 800){
    productos_array.push(['ultrabook', 1000]);
}

/**
 * Ejercicio 4.
 * Agrega el producto 'teclado' con valor 18 
 * al inicio del array
 */
// Paso 1. Elegir un metodo de array
// En este caso, para ingresar AL INICIO debemos usar el metodo unshift
productos_array.unshift(['teclado', 18]);

/**
 * Ejercicio 5. 
 * Busca el elemento llamado 'monitor2' y eliminalo
 */
// Paso 1. Elegir un metodo de array
// En este caso, para buscar un elemento y eliminar usarmos splice
// Este metodo puede ser lioso, por lo que seguimos el siguiente esquema
// splice (posicion de monitor2, 1 )
let salir = false;  // booleano para salir del while. Esta en false de forma prefedinida. Cuando sea true, salgo (he encontrado 'monitor2')
let pos = 0;        // inicializo la posicion en 0 para recorrer el array 'productos_array'
let pos_monitor = -1;// Almaceno la posicion del monitor para luego usar la funcion splice 
while(!salir && pos <= productos_array.length){
    if(productos_array[pos][0] == 'monitor2'){
        salir = !salir; // Paso a true (contrario a su propio valor que es false) la bandera para salir del while
        pos_monitor = pos; // En la posicion actual en la que estoy la almaceno en pos_monitor;
    }
    pos++; // Avanza iteracion en caso de no encontrar 'monitor2'
}

// Ha encontrado la posicion del 'monitor2'
if(pos_monitor >= 0){
    productos_array.splice(pos_monitor, 1);
}
// En otro caso no ha encontrado 'monitor2'

/**
 * Ejercicio 6. 
 * Agrega un producto llamado 'impresora' con valor 30
 * en la siguiente posicion a 'proyector'
 * 
 * NOTA: Caso 'B'
 */
let impresora = ['impresora', 30];
salir = false; 
pos = 0; 
let pos_proyector = -1;
while(!salir && pos <= productos_array.length){
    if(productos_array[pos][0] == 'impresora'){
        salir = !salir;
        pos_proyector = pos;
    }
    pos++;
}
if(pos_proyector >= 0){
    productos_array.splice(pos_proyector, 0, impresora);
}


/**
 * Ejercicio 7.
 * Localiza el elemento llamado 'mesa' y sustituyelo por 'laptop' y valor 750
 * 
 * NOTA: Caso 'C'
 */
let laptop = ['laptop', 750];
salir = false; 
pos = 0; 
let pos_laptop = -1;
while(!salir && pos <= productos_array.length){
    if(productos_array[pos][0] == 'mesa'){
        salir = !salir;
        pos_laptop = pos;
    }
    pos++;
}
if(pos_laptop >= 0){
    productos_array.splice(pos_laptop, 1, laptop);
}