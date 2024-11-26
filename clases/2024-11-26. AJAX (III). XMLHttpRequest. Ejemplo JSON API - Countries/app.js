const xhr = new XMLHttpRequest();
const prueba = "datos.json";
const RSS_URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";
const CAT_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const CONTRIES_URL = "https://restcountries.com/v3.1/all";

let cards = document.getElementById("cards");
let progress = document.getElementById("progress-bar");
let completado = 0; // Para la barra de progreso. Inicio en 0

// Configuro la peticion
xhr.open('GET', CONTRIES_URL, true);
// Establecer el tiempo maximo de espera
xhr.timeout = 1000;
// Establecer tipo de retorno
xhr.responseType = "text";
// Eventos de la peticion
xhr.onload = function (){
    if(xhr.status == 200 && xhr.readyState == 4){
        pintarCards(JSON.parse(xhr.responseText));
    }
}

// Evento que se lanza con el progreso de la carga de datos
xhr.onprogress = function (event){
    if(event.lengthComputable){
        console.log(event.loaded);
        console.log(event.total);
        updateProgress(event.loaded, event.total)
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

/**
 * Funcion que recibe un array de objetos con datos de gatos y los pinta
 * @param {object} datos 
 */
function pintarCards(datos){
    // console.log(datos)
    datos.forEach(element => {
         // Creamos una card de ejemplo
        let div = document.createElement("div");
        div.className = "card";

        let img = document.createElement("img");
        // img.className = "card-title";
        // img.style.width = element['width'];
        // img.style.height = ;
        img.src = element['flags']["png"];

        let titulo = document.createElement("h2");
        titulo.className = "card-title";
        titulo.textContent = `${element["name"]["common"]}: ${element["name"]["official"]}`;

        let parrafo = document.createElement("p");
        parrafo.className = "card-description";
        parrafo.textContent = `Capital: ${element["capital"]}`;

        let poblacion = document.createElement("p");
        poblacion.className = "card-description";
        poblacion.textContent = `Población: ${element["population"]}`;

        let continente = document.createElement("p");
        continente.className = "card-description";
        continente.textContent = `Continente: ${element["region"]}`;

        div.appendChild(img);
        div.appendChild(titulo);
        div.appendChild(parrafo);
        div.appendChild(poblacion);
        div.appendChild(continente);
        cards.appendChild(div);

        console.log(element)
    });
}

/**
 * Funcion que actualiza la barra de progreso segun los bytes cargados
 * @param {number} actual 
 * @param {number} total 
 */
function updateProgress(actual, total){
    progress.style.width = ((actual/total ) * 100) + "%";
}