const xhr = new XMLHttpRequest();
const prueba = "datos.json";
const RSS_URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

// Configuro la peticion
xhr.open('GET', RSS_URL, true);
// Establecer el tiempo maximo de espera
xhr.timeout = 1000;
// Establecer tipo de retorno
xhr.responseType = "text";
// Eventos de la peticion
xhr.onload = function (){
    if(xhr.status == 200 && xhr.readyState == 4){
        console.log(JSON.parse(xhr.responseText));
    }
}

// Evento que se lanza con el progreso de la carga de datos
xhr.onprogress = function (event){
    if(event.lengthComputable){
        console.log(event.loaded);
        console.log(event.total);
    }
    else{
        console.error("no es posible hallar el total");
    }
    agregarEstado(`Total carga: ${event.loaded} bytes`);
}

xhr.onerror = function () {
    console.error("Error en la conexion");
}

// Respuesta en caso de superar el tiempo máximo
xhr.ontimeout = function (){
    console.error("Te has pasado de tiempo");
}

// Evento que se dispara cada vez que readyState cambia de valor
xhr.onreadystatechange = function (){
    switch (xhr.readyState) {
        // case 0:
        //     agregarEstado(`Estado ${xhr.readyState}: Solicitud no iniciada`);
        //     break;
        // case 1:
        //     agregarEstado(`Estado ${xhr.readyState}: Conexion establecida`);
        //     break;
        case 2:
            agregarEstado(`Estado ${xhr.readyState}: Solicitud recibida por el servidor`);
            break;
        case 3:
            agregarEstado(`Estado ${xhr.readyState}: Solicitud procesada por el servidor. Enviando datos`);
            break;
        case 4:
            agregarEstado(`Estado ${xhr.readyState}: Solicitud completada.`);
            break;
    
        default:
            break;
    }
}

// Envio de la peticion
xhr.send();

/**
 * Funcion que recibe un texto y lo inserta con hora actual en la barra de estado
 * @param {string} text 
 */
function agregarEstado(text){
    let ul = document.getElementById("estado-list");
    let li = document.createElement("li");
    let now = new Date();
    li.textContent = `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}] ${text}`;
    ul.appendChild(li);
}

let cards = document.getElementById("cards");

// Creamos una card de ejemplo
let div = document.createElement("div");
div.className = "card";

let titulo = document.createElement("h2");
titulo.className = "card-title";
titulo.textContent = "TITULO DE LA CARD";

let parrafo = document.createElement("p");
parrafo.className = "card-description";
parrafo.textContent = "DESCRIPCION DE LA CARD";

div.appendChild(titulo);
div.appendChild(parrafo);
cards.appendChild(div);

