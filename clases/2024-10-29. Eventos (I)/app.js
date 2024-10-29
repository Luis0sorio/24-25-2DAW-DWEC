
// Todas las casillas
let casillas = document.getElementsByClassName('caja');

// Variable con turno X.
// Cambia a O o a X
let turno = "X";

// for (let i = 0; i < casillas.length; i++){
//     casillas[i].addEventListener('click', function(){
//         rellenar(i);
//     });
// }

/**
 * Rellenar la casilla del turno correspondiente
 */
function rellenar(i){
    console.log(i)
    casillas[i].innerHTML = turno;
    if(turno == "X"){
        turno = "O";
    }else{
        turno = "X";
    }
}



/**
 * EVENTOS DE TECLADO
 * 1. Donde lanzar el evento (donde asociarlo). Utilizamos un input
 * 2. Asociar evento con addEventListener. Elegir el evento mas correcto
 * 3. Realizar funcion que filtra
 */

let input = document.getElementById('input');

input.addEventListener('keyup', function(){
    filtrar();
});

/**
 * Funcion que filtra el contenido de las cajas
 */
function filtrar(){
    // 1. Recoger el VALOR del input
    console.log(input.value);

    // 2. Comparar el valor recogido del input con el texto de las cajas
    for(let i = 0; i < casillas.length; i++){
        if(!casillas[i].textContent.includes(input.value)){
            // 3. Las cajas que NO tienen ese valor, las OCULTO
            casillas[i].classList.add('ocultar');
        }else{
            casillas[i].classList.remove('ocultar');
        }
    }
}