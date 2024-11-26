// Crear la instancia
let xhr = new XMLHttpRequest();

/**
 * OPEN utiliza:
 * metodo: GET, POST, etc
 * URL: ubicacion del fichero que quiero recoger (local u online)
 * Asincronia: true/false
 *  - Cuando es true (por defecto: el navegador no se bloquea mientras se espera la respuesta
 *  - Cuando es false: el navegador se bloquea hasta que la solicitud finalice (poco recomendado pues congela página)
 */
// Configuracion de la solicitud
xhr.open('GET', 'data/data.json', true);


/**
 * ONLOAD tiene dos atributos IMPORTANTES:
 * - status: contiene el código de respuesta
 * - responseText: contiene la respuesta del dato del fichero
 */
// Manejar la respuesta
xhr.onload = function (){
    /**
     * PARA STATUS PODEMOS TENER:
     * Respuestas informativas          (100–199),
     * Respuestas satisfactorias        (200–299),
     * Redirecciones                    (300–399),
     * Errores de los clientes          (400–499),
     * Errores de los servidores        (500–599).
     */
    // EXITO EN LA RESPUESTA
    switch (xhr.status) {
        case 200:
            // console.log(xhr.responseText);
            console.log(JSON.parse(xhr.responseText));
            pintarDatos(JSON.parse(xhr.responseText));
            break;
        case 404:
            alert('fichero no encontrado');
            break;
    
        default:
            alert('Otro error distinto');
            break;
    }
}

// Manejar los errores
xhr.onerror = function () {
    console.error('Error en la conexion');
}

xhr.send();

let main = document.getElementById('data');

/**
 * Funcion que pinta los datos de un JSON en el main
 * @param {Object} datos 
 */
function pintarDatos(datos){

}

// https://datos.madrid.es/datosabiertos/CIUAB/ATLAS/PERSONAS_INSCRITAS/2024/11/personas_inscritas202411.xml

let xhr2 = new XMLHttpRequest();

xhr2.open('GET', 'data/oficinas.xml', true);

xhr2.onload = function (){
    if(xhr2.status == 200){
        // let parser = new DOMParser();
        // let xmlDoc = parser.parseFromString(xhr2.responseText,"text/xml");
        // console.log(xmlDoc);

        console.log(xhr2.responseXML);
    }
}

xhr2.onerror = function () {
    console.error('Error en la conexion');
}

xhr2.send();