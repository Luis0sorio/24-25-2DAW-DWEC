/**
 * Variables
 */
let a = 5;
var b = 5;
const c = "cosa";
let d = 4.5;
let e = true;
let f = [];     // Array
let g = {};     // Objeto
let h;

// Quiero ver el tipo de dato
console.log(typeof a);
typeof b;
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);

// let j = prompt("¿Qué estudias?");
// console.log(j);

// alert("Esto es un mensaje");

/*
if(){

}else{

}
*/

/**
 * Ejercicios.
 * 1. Crea dos variables solicitando al usuario su contenido.
 * Si son iguales, muestra un alert con mensaje.
 * Si no son iguales, muestra mensaje por consola.
 * 
 * let d1 = prompt("Dame contenido");
 let d2 = prompt("Dame contenido 2");

 if(d1 == d2){
    alert("Son iguales");
 }else{
    console.log("Son distintos");
 }
 * 2. Pide un dato al usuario y muestra su tipo por consola.
 * 
 * solucion:
 * let dato = prompt("Dame un dato");
 * alert(typeof dato);
 */
// let valor = prompt("Introduce un valor");
//  console.log(parseInt(valor));
 

/**
 * Ejercicio 3.
 * Pide un numero al usuario que sea del 1 al 10.
 * El programa debe devolver un alert (vale console.log) 
 * con la nota en formato letra.
 * Es necesario tratar casos conflictivos.
 * 
 * Ejemplo
 * - Un 6 es un BIEN
 * - Un 7 es un NOTABLE
 * - Un 7.88 es un NOTABLE
 * 
 */

/**
 * Ejercicio 4.
 * Crea un programa que reciba un numero del usuario y 
 * devuelva si es par o impar.
 */

/**
 * Ejercicio 5. 
 * Crea un programa que reciba un numero del usuario y
 * devuelva un mensaje solo si es mayor de edad.
 */

/**
 * Ejercicio 6. 
 * Crea un programa que reciba un numero del usuario y 
 * devuelva un mensaje si es positivo o negativo.
 */

/**
 * Ejercicio 7.
 * Crea un programa que pida dos numeros al usuario y
 * devuelva cual de ellos es mayor
 */

/**
 * Ejercicio 8.
 * Crea un programa que pida un numero (del 1 al 7) 
 * y devuelva el día de la semana que representa.
 * 
 * Ejemplo: si usuario introduce 2, el programa
 * devuelve "martes"
 */

/**
 * Ejercicio 9.
 * Crea un programa que pida un numero al usuario que 
 * hace referencia al valor total de una compra.
 * 
 * Si es mayor a 20, aplicale un 20% de descuento.
 * En otro caso, aplícale un 5%.
 * 
 * Devuelve el valor final de la cuenta.
 */

/**
 * Ejercicio 10.
 * Crea un programa que pida al usuario un año
 * y el programa devuelve si es o no bisiesto.
 */

/**
 * Ejercicio 11.
 * Crea un programa que pida tres valores al usuario.
 * El programa debe devovlerlos ordenados de mayor a menor.
 */
/***********************************************************
 ********************* SOLUCIONES **************************
***********************************************************/
// EJERCICIO 3
let n = parseInt(prompt("Dame un numero"));

if(n > 10 || n < 0){
    console.log("El numero no esta en el rango pedido");
} else {
    if(n < 5){
        console.log("Insuficiente")
    } else if(n < 6){
        console.log("Suficiente");
    }else if(n < 7){
        console.log("Bien");
    }else if(n < 9){
        console.log("Notable");
    }else{
        console.log("Sobresaliente");
    }
}

// EJERCICIO 4
/** NOTA: se puede comprobar primero si realmente es un numero
  *  utilizando isNaN(valor)
*/

n = parseInt(prompt("Dame un numero"));
if(n % 2 == 0){
    console.log("Par")
}else{
    console.log("Impar");
}

// EJERCICIO 5
/** NOTA: se puede comprobar primero si realmente es un numero
  *  utilizando isNaN(valor)
*/

n = parseInt(prompt("Dame un numero"));
if(n > 18){
    console.log("Mayor de edad");
}
// no existe un ELSE puesto que solo pide mensaje si es mayor

// EJERCICIO 6
n = parseInt(prompt("Dame un numero"));
if(n < 0){
    console.log("Es negativo");
}else{
    console.log("Es positivo");
}

/**
 * Ejercicio 7.
 * Crea un programa que pida dos numeros al usuario y
 * devuelva cual de ellos es mayor
 */
n1 = parseInt(prompt("Dame un numero"));
n2 = parseInt(prompt("Dame un numero"));

if(n1 > n2){
    console.log(n1 + " es mayor que " + n2);
}else if(n1 < n2){
    console.log(n2 + " es mayor que " + n1);
}else{
    console.log("Son iguales");
}

// EJERCICIO 8
n = parseInt(prompt("Dame un numero"));

if(n < 1 || n > 7){
    console.log("Valor incorrecto");
}else{
    switch (n) {
        case 1:
            console.log("El día es LUNES");
            break;
        case 2:
            console.log("El día es MARTES");
            break;
        case 3:
            console.log("El día es MIERCOLES");
            break;
        case 4:
            console.log("El día es JUEVES");
            break;
        case 5:
            console.log("El día es VIERNES");
            break;
        case 6:
            console.log("El día es SABADO");
            break;
        case 7:
            console.log("El día es DOMINGO");
            break;
    
        default:
            // Realmente podriamos colocar aqui cualquiera que no encaje
            break;
    }
}

// EJERCICIO 9
n = parseInt(prompt("Dame un numero"));
if(n < 0){
    console.log("¿Precio negativo? No valido");
}else{
    if(n > 20){
        console.log(`El final valor de la cuenta es ${n * 0.8}`);
    }else{
        console.log(`El final valor de la cuenta es ${n * 0.5}`);
    }
}
// EJERCICIO 10
// NOTA: el año es bisiesto si es divisible por 4 (es uno cada 4 años)
n = parseInt(prompt("Dame un numero"));
if(n % 4 == 0){
    console.log("Es bisiesto");
}else{
    console.log("No es bisiesto");
}

// EJERCICIO 11
// No se resuelve en clase hoy.
// Os animo a pensarlo y resolverlo sin ChatGPT ni otras IAs

// PISTA: son 6 comparaciones a lo sumo sin usar AND en todas ellas.