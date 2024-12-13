# Formatos notificaciones
Según el tipo de mensaje que se deba mostrar en el API de notificaciones, se facilitan por un lado el código del momento en el que ocurre (clase Date).
```javascript
const now = new Date();
li.textContent = `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}] ${mensaje}`;
```
En cuanto a las notificaciones:
- Si es un error ya sea de carga, internet o cualquier situación inesperada: ***`ERROR: ...`***
- Si se ha completado alguna operación con éxito: ***`COMPLETADO: ...`***

# Enlaces proporcionados 

## Datos
Se proporcionan los enlaces de 2 posibles opciones de recepción de datos de ubicaciones. Hay que seleccionar una para realizar el proyecto:

### Opción 1: lugares protegidos en España: 
```javascript
const query = `
[out:json];
area["name"="España"][admin_level=2];
(
  node(area)["tourism"="attraction"]["heritage"];
  way(area)["tourism"="attraction"]["heritage"];
  relation(area)["tourism"="attraction"]["heritage"];
);
out center;
`;

const URL = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

```

### Opción 2: universidades en España:
```javascript
const query = `
SELECT ?university ?universityLabel ?latitude ?longitude WHERE {
  ?university wdt:P31 wd:Q3918;
              wdt:P17 wd:Q29;
              wdt:P625 ?location.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  BIND(geof:latitude(?location) AS ?latitude)
  BIND(geof:longitude(?location) AS ?longitude)
}`;

const URL = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`

```

---

## Iconos
Se proporcionan los códigos de los iconos que deben utilizarse.
### Geolocalización
`https://cdn-icons-png.flaticon.com/512/69/69524.png`
### Ubicaciones llamada AJAX
`https://cdn-icons-png.flaticon.com/512/252/252025.png`
### Error
`https://cdn-icons-png.flaticon.com/512/1828/1828843.png`
### Correcto
`https://cdn-icons-png.flaticon.com/512/190/190411.png`
---

## Carga ficheros
Código para la carga de ficheros con el DOM.
```javascript
 // Crear e insertar la hoja de estilos
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.onload = () => {}
        link.onerror = () => {}
        link.crossOrigin = "";
        document.head.appendChild(link);

        // Crear e insertar el script de Leaflet
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        script.onload = () => { }
        script.onerror = () => { }
        document.head.appendChild(script);
```
---


## IMPORTANTE

- Todo código con errores en consola tendrá como nota máxima un 4,5. Todo ello teniendo en cuenta que está todo lo pedido.
- Se calificará el funcionamiento de cada parte. El procedimiento no será importante. Debemos acostumbrarnos a realizar las cosas bien y con detalle.
- En la corrección se realizarán pruebas, entre otras, de conexión a internet y ubicación desactivada. No se permite un error en consola en ninguno de estos casos.
- La entrega se realiza por el Aula virtual en la tarea habilitada para ello. Formato ***apellido_nombre.zip***
- El vídeo se entrega ***el enlace*** por mail.
- No se corrigen ejercicios sin vídeo (0 puntos).
- No se permite el uso de ninguna documentación que no sea la del GitHub de clase o consultas en internet (***SIEMPRE FACILITANDO LA FUENTE EN EL CÓDIGO O EN EL README.MD***). Se penalizará con, al menos 1 punto, por cada código extraido de internet sin colocar la fuente (se consultará vídeo).
- No se permite el uso de ninguna inteligencia atificial o extensión que realice código. La penalización será un 0 en el examen.