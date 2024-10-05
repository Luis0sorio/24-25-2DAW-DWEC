/**
 * Ejercicio: Crear dps focjerps HTML
 * 1º- Formulario para introducir datos
 * 2º- Fichero que recoja los datos de la url con javascript y pinte el contenido por consola
 *  - Warning si esta vacío ( variables )
 *  - group si tiene varios valores
 *  - info si tiene un único valor
 * 
 * URL  ?param1=val&param2=val&param3=val
 * 
 * Primero fichero tiene la URL normal y el segundo fichero tiene en la url los valores del primero fichero con el formulario
 * Cada formulario se separa por un "&"
 * 
 * Tratar como string los parametros que se recojan en la URL y separarlos, usando "split"?
 * Hay qie hacer tantos splits hasta que tengamos en variables separadas el parametro y su valor
 */

let datos = location.search;

let arrayDatos = datos.split("&");

for(let i = 0 ; i < arrayDatos.length ; i++){
    let datosResomidos = arrayDatos[i].split("=");

    let parametro = datosResomidos[0];
    let valor = datosResomidos[1];

    if (parametro.includes("?")){
        let parametroFinal = parametro.split("?");
        parametro = parametroFinal[1];
    }

    if(valor.length <= 0){
        console.warn("El valor está vacío");
    } else if (valor.includes('+')){
        let parametroEspacios = valor.split('+');

        console.group(parametro);
        for(let j = 0 ; j < parametroEspacios.length ; j++){
            console.log(parametroEspacios[j]);
        }
        console.groupEnd(parametro);
    } else {
        console.info(parametro + ": " + valor);
    }
}


