let cosa = new Array();

// for (let index = 0; index < 3; index++) {
//     cosa.push(new Array(prompt('Nombre jugador')));
// }
// console.log(cosa)
cosa[1] = 'Sergio';
cosa[2] = 0;
console.log(cosa);

console.log(typeof cosa[0]);

for (let index = 0; index < cosa.length; index++) {
    if(cosa[index] == 0){
        console.log(cosa[index]);
    }
}

