let smartphones = {
    'smartphone 1': {
        marca: "Apple",
        modelo: "iPhone 14",
        lanzamiento: 2022,
        color: "negro mate",
        precio: 1099,
        sistemaOperativo: "iOS",
        almacenamiento: "256GB",
        camaraFrontal: "12MP",
        especificaciones: [
            "pantalla ProMotion",
            "chip A16 Bionic",
            "Face ID",
            "doble cámara trasera",
        ],
        garantia: true,
        usuario: {
            nombre: "Raquel",
            edad: 34,
            ubicacion: "Madrid",
        },
    },
    'smartphone 2': {
        marca: "Google",
        modelo: "Pixel 7 Pro",
        lanzamiento: 2022,
        color: "blanco perla",
        precio: 899,
        sistemaOperativo: "Android",
        almacenamiento: "128GB",
        resistenciaAgua: "IP68",
        especificaciones: [
            "pantalla LTPO OLED",
            "chip Google Tensor G2",
            "reconocimiento facial",
            "cámara con zoom de 30x",
        ],
        garantia: false,
        usuario: {
            nombre: "Antonio",
            edad: 28,
            ubicacion: "Barcelona",
        },
    },
    'smartphone 3': {
        marca: "Xiaomi",
        modelo: "Redmi Note 11",
        lanzamiento: 2023,
        color: "azul cielo",
        precio: 299,
        sistemaOperativo: "MIUI",
        almacenamiento: "64GB",
        peso: "180g",
        especificaciones: [
            "pantalla AMOLED",
            "procesador Snapdragon 680",
            "batería de 5000mAh",
            "carga rápida de 33W",
        ],
        garantia: true,
        usuario: {
            nombre: "Lucía",
            edad: 25,
            ubicacion: "Sevilla",
        },
    },
    'smartphone 4': {
        marca: "Samsung",
        modelo: "Galaxy Z Flip 4",
        lanzamiento: 2022,
        color: "lavanda",
        precio: 1199,
        sistemaOperativo: "Android",
        almacenamiento: "512GB",
        bateria: "3300mAh",
        especificaciones: [
            "pantalla plegable",
            "resistencia al agua IPX8",
            "cámara dual",
            "carga inalámbrica",
        ],
        usuario: {
            nombre: "Iván",
            edad: 31,
            ubicacion: "Bilbao",
        },
    },
    'smartphone 5': {
        marca: "OnePlus",
        modelo: "Nord 2T",
        lanzamiento: 2023,
        color: "verde oliva",
        precio: 499,
        sistemaOperativo: "OxygenOS",
        almacenamiento: "128GB",
        procesador: "MediaTek Dimensity 1300",
        especificaciones: [
            "pantalla AMOLED de 90Hz",
            "cámara triple con OIS",
            "batería de 4500mAh",
        ],
        usuario: {
            nombre: "Paula",
            edad: 27,
            ubicacion: "Zaragoza",
        },
    },
    'smartphone 6': {
        marca: "Sony",
        modelo: "Xperia 1 IV",
        lanzamiento: 2022,
        color: "negro grafito",
        precio: 1299,
        sistemaOperativo: "Android",
        almacenamiento: "256GB",
        resistenciaAgua: "IP68",
        especificaciones: [
            "pantalla 4K OLED",
            "zoom óptico continuo",
            "grabación de video 120fps",
        ],
        garantia: true,
        usuario: {
            nombre: "Diego",
            edad: 40,
            ubicacion: "Valencia",
        },
    },
    'smartphone 7': {
        marca: "Realme",
        modelo: "GT Neo 3",
        lanzamiento: 2023,
        color: "blanco polar",
        precio: 549,
        sistemaOperativo: "Android",
        almacenamiento: "256GB",
        procesador: "MediaTek Dimensity 8100",
        especificaciones: [
            "pantalla AMOLED de 120Hz",
            "carga rápida de 150W",
            "cámara principal de 50MP",
        ],
        garantia: false,
        usuario: {
            nombre: "Alba",
            edad: 26,
            ubicacion: "Málaga",
        },
    },
    'smartphone 8': {
        marca: "Oppo",
        modelo: "Reno 8 Pro",
        lanzamiento: 2022,
        color: "rojo coral",
        precio: 699,
        sistemaOperativo: "ColorOS",
        almacenamiento: "256GB",
        peso: "183g",
        especificaciones: [
            "pantalla AMOLED",
            "cámara Sony IMX766",
            "batería de 4500mAh",
            "carga rápida de 80W",
        ],
        garantia: true,
        usuario: {
            nombre: "Fernando",
            edad: 35,
            ubicacion: "Granada",
        },
    },
    'smartphone 9': {
        marca: "Motorola",
        modelo: "Edge 30 Ultra",
        lanzamiento: 2023,
        color: "verde bosque",
        precio: 799,
        sistemaOperativo: "Android",
        almacenamiento: "512GB",
        peso: "198g",
        especificaciones: [
            "pantalla OLED de 144Hz",
            "cámara de 200MP",
            "carga inalámbrica",
        ],
        garantia: true,
        usuario: {
            nombre: "Sandra",
            edad: 29,
            ubicacion: "Córdoba",
        },
    },
    'smartphone 10': {
        marca: "Vivo",
        modelo: "X80 Pro",
        lanzamiento: 2023,
        color: "naranja terracota",
        precio: 999,
        sistemaOperativo: "OriginOS",
        almacenamiento: "256GB",
        resistenciaAgua: "IP68",
        especificaciones: [
            "pantalla AMOLED curva",
            "cámara Zeiss",
            "batería de 4700mAh",
        ],
        garantia: false,
        usuario: {
            nombre: "Mario",
            edad: 38,
            ubicacion: "Alicante",
        },
    },
};

/**
 * Ejercicio 1.
 * Crea una función que calcule y devuelva el precio promedio de todos los smartphones con garantía.
 */
// Solucion 1:
function calcularPrecioPromedioConGarantiaSol1(smartphones) {
    let totalPrecio = 0;
    let contador = 0;

    for (let clave in smartphones) {
        if (smartphones[clave].garantia) { // Verifica si el smartphone tiene garantía
            totalPrecio += smartphones[clave].precio;
            contador++;
        }
    }

    return contador === 0 ? 0 : totalPrecio / contador;
}

// Llamada a la función
console.log(calcularPrecioPromedioConGarantiaSol1(smartphones)); 

// Solucion 2 (con reduce):
function calcularPrecioPromedioConGarantiaSol2(smartphones) {
    const conGarantia = Object.values(smartphones).filter(smartphone => smartphone.garantia);
    
    const totalPrecio = conGarantia.reduce((acumulador, smartphone) => acumulador + smartphone.precio, 0);
    
    return conGarantia.length === 0 ? 0 : totalPrecio / conGarantia.length;
}

// Llamada a la función
console.log(calcularPrecioPromedioConGarantiaSol2(smartphones)); 


/**
 * Ejercicio 2. 
 * Crea una función que devuelva un objeto agrupando los smartphones por su sistema operativo.
 */
function agruparPorSistemaOperativoSol1(smartphones) {
    let agrupadosPorSO = {};

    for (let clave in smartphones) {
        let sistema = smartphones[clave].sistemaOperativo; // Obtiene el sistema operativo del smartphone

        if (!agrupadosPorSO[sistema]) {
            agrupadosPorSO[sistema] = []; // Si no existe la clave del sistema operativo, la inicializa como un array
        }
        
        agrupadosPorSO[sistema].push(smartphones[clave]); // Agrega el smartphone al array correspondiente
    }

    return agrupadosPorSO;
}

// Llamada a la función
console.log(agruparPorSistemaOperativoSol1(smartphones)); 

// Solucion 2 (con reduce):
function agruparPorSistemaOperativo(smartphones) {
    return Object.values(smartphones).reduce((acumulador, smartphone) => {
        let sistema = smartphone.sistemaOperativo;

        if (!acumulador[sistema]) {
            acumulador[sistema] = new Array(); // Inicializa un array si no existe
        }

        acumulador[sistema].push(smartphone); // Añade el smartphone al grupo de su sistema operativo
        return acumulador;
    }, {}); // El objeto acumulador inicial es un objeto vacío
}

// Llamada a la función
console.log(agruparPorSistemaOperativo(smartphones)); 

/**
 * Ejercicio 3. 
 * Crea una función que reciba una lista de smartphones y devuelva cuántos están disponibles en venta (garantia true).
 */
// Solución 1 (sencilla):
function contarDisponiblesEnVentaSol1(smartphones) {
    let contador = 0;

    for (let clave in smartphones) {
        if (smartphones[clave].garantia) {
            contador++;
        }
    }

    return contador;
}

// Llamada a la función
console.log(contarDisponiblesEnVentaSol1(smartphones));

// Solución 2 (con filter):
function contarDisponiblesEnVenta(smartphones) {
    return Object.values(smartphones).filter(smartphone => smartphone.garantia).length;
}

// Llamada a la función
console.log(contarDisponiblesEnVenta(smartphones));

/**
 * Ejercicio 4. 
 * Crea una función que reciba el objeto de smartphones y un año. 
 * Devuelve un array con los nombres de los smartphones que fueron lanzados después del año dado.
 */
// Solución 1 (sencilla):
function smartphonesPosterioresAnioSol1(smartphones, anio) {
    let resultado = [];

    for (let clave in smartphones) {
        if (smartphones[clave].lanzamiento > anio) {
            resultado.push(smartphones[clave].modelo);
        }
    }

    return resultado;
}

// Llamada a la función
console.log(smartphonesPosterioresAnioSol1(smartphones, 2020)); 

// Solución 2 (con filter y map):
function smartphonesPosterioresAnioSol2(smartphones, anio) {
    return Object.values(smartphones)
        .filter(smartphone => smartphone.lanzamiento > anio)
        .map(smartphone => smartphone.modelo);
}

// Llamada a la función
console.log(smartphonesPosterioresAnioSol2(smartphones, 2020)); 

/**
 * Ejercicio 5. 
 * Crea una función que reciba una lista de smartphones y devuelva un array con los nombres de los smartphones que tienen almacenamiento mayor o igual a 128 GB.
 */
// Solución 1 (sencilla):
function smartphonesConAlmacenamientoSol1(smartphones, almacenamientoMinimo) {
    let resultado = [];

    for (let clave in smartphones) {
        if (parseInt(smartphones[clave].almacenamiento) >= almacenamientoMinimo) {
            resultado.push(smartphones[clave].modelo);
        }
    }

    return resultado;
}

// Llamada a la función
console.log(smartphonesConAlmacenamientoSol1(smartphones, 128)); // Devuelve los smartphones con almacenamiento >= 128GB


// Solución 2 (con filter y map):
function smartphonesConAlmacenamientoSol2(smartphones, almacenamientoMinimo) {
    return Object.values(smartphones)
        .filter(smartphone => parseInt(smartphone.almacenamiento) >= almacenamientoMinimo)
        .map(smartphone => smartphone.modelo);
}

// Llamada a la función
console.log(smartphonesConAlmacenamientoSol2(smartphones, 128)); // Devuelve los smartphones con almacenamiento >= 128GB

/**
 * Ejercicio 6.
 * Crea una función que reciba el objeto de smartphones y devuelva el smartphone más caro junto a su precio.
 * Si hay mas de uno, proporcionar todos.
 */
// Solución 1 (sencilla):
function obtenerSmartphoneMasCaroSol1(smartphones) {
    let precioMaximo = 0;
    let smartphonesMasCaros = new Array();

    for (let clave in smartphones) {
        let smartphone = smartphones[clave];
        
        if (smartphone.precio > precioMaximo) {
            // Si encontramos un nuevo precio máximo, actualizamos la lista
            precioMaximo = smartphone.precio;
            smartphonesMasCaros = new Array({ precio: smartphone.precio, nombre: smartphone.marca + " " + smartphone.modelo });
        } else if (smartphone.precio === precioMaximo) {
            // Si es igual al máximo, lo añadimos
            smartphonesMasCaros.push({ precio: smartphone.precio, nombre: smartphone.marca + " " + smartphone.modelo });
        }
    }

    return smartphonesMasCaros;
}

// Llamada a la función
console.log(obtenerSmartphoneMasCaroSol1(smartphones)); 

// Solución 2 (con reduce, filter y map):
function obtenerSmartphoneMasCaroSol2(smartphones) {
    let listaSmartphones = Object.values(smartphones);

    // Encontrar el precio máximo
    let precioMaximo = listaSmartphones.reduce((max, smartphone) => 
        smartphone.precio > max ? smartphone.precio : max, 0
    );

    // Filtrar y mapear los smartphones con el precio máximo para devolver el formato deseado
    let smartphonesMasCaros = listaSmartphones
        .filter(smartphone => smartphone.precio === precioMaximo)
        .map(smartphone => ({
            precio: smartphone.precio,
            nombre: smartphone.marca + " " + smartphone.modelo
        }));

    return smartphonesMasCaros;
}

// Llamada a la función
console.log(obtenerSmartphoneMasCaroSol2(smartphones));

/**
 * Ejercicio 7.  
 * Crea una función que reciba el objeto de smartphones y devuelva el porcentaje de smartphones con pantalla OLED y una estructura de datos con los nombres de los smartphones (sin repetir nombre).
 */
// Solución 1 (sencilla):
function obtenerPorcentajePantallaOLEDSol1(smartphones) {
    let totalSmartphones = 0;
    let smartphonesOLED = 0;
    let nombresOLED = new Set();

    for (let clave in smartphones) {
        let smartphone = smartphones[clave];
        totalSmartphones++;

        // Verificamos si alguna especificación incluye la palabra "OLED"
        for (let especificacion of smartphone.especificaciones) {
            if (especificacion.includes("OLED")) {
                smartphonesOLED++;
                // Añadimos el nombre (marca + modelo) al Set
                nombresOLED.add(smartphone.marca + " " + smartphone.modelo);
                break; // Rompemos el bucle ya que ya encontramos "OLED" en este smartphone
            }
        }
    }

    // Calcular el porcentaje de smartphones con OLED
    let porcentaje = (smartphonesOLED / totalSmartphones) * 100;

    return {
        porcentaje: porcentaje.toFixed(2),
        nombres: [...nombresOLED] // Convertimos el Set a un array
    };
}

// Llamada a la función
console.log(obtenerPorcentajePantallaOLEDSol1(smartphones)); 

// Solución 2 (con filter y map):
function obtenerPorcentajePantallaOLEDSol2(smartphones) {
    let listaSmartphones = Object.values(smartphones);

    // Filtrar los smartphones que tienen "OLED" en sus especificaciones
    let smartphonesOLED = listaSmartphones.filter(smartphone =>
        smartphone.especificaciones.some(especificacion => especificacion.includes("OLED"))
    );

    // Crear un Set con los nombres de los smartphones OLED
    let nombresOLED = new Set(
        smartphonesOLED.map(smartphone => smartphone.marca + " " + smartphone.modelo)
    );

    // Calcular el porcentaje
    let porcentaje = (smartphonesOLED.length / listaSmartphones.length) * 100;

    return {
        porcentaje: porcentaje.toFixed(2),
        nombres: [...nombresOLED] // Convertimos el Set a un array
    };
}

// Llamada a la función
console.log(obtenerPorcentajePantallaOLEDSol2(smartphones)); 

/**
 * Ejercicio 8.  
 * Crea una función que reciba el objeto de smartphones y devuelve una copia del objeto original con una nueva propiedad que indique el tipo de smartphone en función del precio (gama alta, media o baja). 
 * Usar Object.assign()
 */
// Solución 1:
function clasificarSmartphonesPorPrecioSol1(smartphones) {
    let copiaSmartphones = {};

    for (let clave in smartphones) {
        let smartphone = smartphones[clave];

        // Copiamos el smartphone actual usando Object.assign()
        let smartphoneCopia = Object.assign({}, smartphone);

        // Determinamos la gama en función del precio
        if (smartphone.precio < 500) {
            smartphoneCopia.gama = "baja";
        } else if (smartphone.precio <= 1000) {
            smartphoneCopia.gama = "media";
        } else {
            smartphoneCopia.gama = "alta";
        }

        // Guardamos la copia modificada en el nuevo objeto
        copiaSmartphones[clave] = smartphoneCopia;
    }

    return copiaSmartphones;
}

// Llamada a la función
console.log(clasificarSmartphonesPorPrecioSol1(smartphones)); 

// Solución 2 (con forEach):
function clasificarSmartphonesPorPrecioSol2(smartphones) {
    let copiaSmartphones = new Object();

    // Recorremos el objeto de smartphones usando Object.entries() y map
    Object.entries(smartphones).forEach(([clave, smartphone]) => {
        // Copiamos el smartphone actual
        let smartphoneCopia = Object.assign({}, smartphone);

        // Asignamos la gama según el precio
        smartphoneCopia.gama = smartphone.precio < 500 
            ? "baja" 
            : smartphone.precio <= 1000 
            ? "media" 
            : "alta";

        // Guardamos la copia modificada en el nuevo objeto
        copiaSmartphones[clave] = smartphoneCopia;
    });

    return copiaSmartphones;
}

// Llamada a la función
console.log(clasificarSmartphonesPorPrecioSol2(smartphones)); 

/**
 * Ejercicio 9.
 * Crea una función que reciba el objeto de smartphones y agrege a dicho objeto varias propiedades (como infoCompleta y caracteristicasTexto) a cada smartphone. 
 * Usar Object.defineProperties()
 */
// Solución 1:
function agregarPropiedadesSmartphonesSol1(smartphones) {
    for (let clave in smartphones) {
        let smartphone = smartphones[clave];

        // Definir nuevas propiedades usando Object.defineProperties
        Object.defineProperties(smartphone, {
            infoCompleta: {
                value: `${smartphone.marca} ${smartphone.modelo} - €${smartphone.precio}`,
                writable: false, // La propiedad no se puede modificar
                enumerable: true, // La propiedad aparecerá al iterar
            },
            caracteristicasTexto: {
                value: smartphone.especificaciones.join(", "),
                writable: false, // La propiedad no se puede modificar
                enumerable: true, // La propiedad aparecerá al iterar
            }
        });
    }
    
    return smartphones; 
}

console.log(agregarPropiedadesSmartphonesSol1(smartphones));


// Solucion 2 (con forEach):
function agregarPropiedadesSol2(smartphones) {
    // Iteramos sobre las claves de smartphones usando Object.keys
    Object.keys(smartphones).forEach(clave => {
        // Utilizamos Object.defineProperties para agregar propiedades
        Object.defineProperties(smartphones[clave], {
            infoCompleta2: {
                value: `${smartphones[clave].marca} ${smartphones[clave].modelo} - €${smartphones[clave].precio} (lanzamiento: ${smartphones[clave].lanzamiento})`,
                writable: false,
                enumerable: true,
                configurable: false,
            },
            caracteristicasTexto2: {
                value: smartphones[clave].especificaciones.join(', '),
                writable: false,
                enumerable: true,
                configurable: false,
            }
        });
    });
    return smartphones;
}

// Llamada a la función
console.log(agregarPropiedadesSol2(smartphones)); 

/**
 * Ejercicio 10. 
 * Crea una función que reciba el objeto de smartphones y devuelva el modelo más antiguo.
 */
// Solución 1 (usando Object.keys() + bucles):
function obtenerModelosMasAntiguosSol1(smartphones) {
    let resultado = new Array(); // Array para almacenar los modelos más antiguos
    let anioAntiguo = 0; // Inicializamos con 0

    // Primero, encontramos el año más antiguo
    for (let clave in smartphones) {
        let smartphone = smartphones[clave];

        // Comparamos el año de lanzamiento
        if (smartphone.lanzamiento < anioAntiguo || anioAntiguo === 0) {
            anioAntiguo = smartphone.lanzamiento; // Actualizamos el año más antiguo
        }
    }

    // Luego, buscamos todos los smartphones que tengan el año más antiguo
    for (let clave in smartphones) {
        let smartphone = smartphones[clave];

        // Si el año de lanzamiento es igual al año más antiguo, lo agregamos al resultado
        if (smartphone.lanzamiento === anioAntiguo) {
            resultado.push({ anio: smartphone.lanzamiento, nombre: smartphone.modelo });
        }
    }

    return resultado; // Devolvemos el array de smartphones más antiguos
}

// Llamada a la función
console.log(obtenerModelosMasAntiguosSol1(smartphones)); 


// Solución 2 (usando Object.values() + reduce()):
function obtenerModelosMasAntiguosSol2(smartphones) {
    const modelosAntiguos = new Array(); // Array para almacenar los modelos más antiguos
    let anioAntiguo = 0; // Inicializamos con 0

    // Primero, encontramos el año más antiguo
    const anioMasAntiguo = Object.values(smartphones).reduce((masAntiguo, smartphone) => {
        return (masAntiguo === 0 || smartphone.lanzamiento < masAntiguo) ? smartphone.lanzamiento : masAntiguo;
    }, 0);

    // Luego, buscamos todos los smartphones que tengan el año más antiguo
    Object.values(smartphones).forEach(smartphone => {
        if (smartphone.lanzamiento === anioMasAntiguo) {
            modelosAntiguos.push({ anio: smartphone.lanzamiento, nombre: smartphone.modelo });
        }
    });

    return modelosAntiguos; // Devolvemos el array de smartphones más antiguos
}

// Llamada a la función
console.log(obtenerModelosMasAntiguosSol2(smartphones));  

/**
 * Ejercicio 11. 
 * Crea una función que reciba una lista de smartphones y devuelva el smartphone más caro y su propietario.
 */
// Solución 1:
function obtenerSmartphoneMasCaroSol1(smartphones) {
    let resultado = new Array(); // Array para almacenar el smartphone más caro y su propietario
    let precioMaximo = 0; // Inicializamos con 0

    // Primero, encontramos el precio máximo y el correspondiente smartphone
    for (let clave in smartphones) {
        let smartphone = smartphones[clave];

        // Comparamos el precio del smartphone
        if (smartphone.precio > precioMaximo) {
            precioMaximo = smartphone.precio; // Actualizamos el precio máximo
        }
    }

    // Luego, buscamos todos los smartphones que tengan el precio máximo
    for (let clave in smartphones) {
        let smartphone = smartphones[clave];

        // Si el precio es igual al máximo, lo agregamos al resultado
        if (smartphone.precio === precioMaximo) {
            resultado.push({ nombre: smartphone.modelo, precio: smartphone.precio, propietario: smartphone.usuario.nombre });
        }
    }

    return resultado; 
}

// Llamada a la función
console.log(obtenerSmartphoneMasCaroSol1(smartphones));

// Solución 2 (usando Object.values() + reduce()):
function obtenerSmartphoneMasCaro(smartphones) {
    return Object.values(smartphones).reduce((resultado, smartphone) => {
        // Si no hay smartphones en resultado, o el precio actual es mayor al máximo
        if (resultado.length === 0 || smartphone.precio > resultado[0].precio) {
            // Actualizamos resultado a un nuevo array con el smartphone actual
            return [{ modelo: smartphone.modelo, precio: smartphone.precio, propietario: smartphone.usuario.nombre }];
        } else if (smartphone.precio === resultado[0].precio) {
            // Si el precio es igual al máximo, lo agregamos al array de resultados
            resultado.push({ modelo: smartphone.modelo, precio: smartphone.precio, propietario: smartphone.usuario.nombre });
        }
        return resultado; // Retornamos el array actualizado
    }, new Array()); // Iniciamos con un array vacío
}

// Llamada a la función
console.log(obtenerSmartphoneMasCaro(smartphones));

/**
 * Ejercicio 12. 
 * Crea una función que reciba el objeto de smartphones y devuelva un objeto que agrupe los smartphones por su año de lanzamiento.
 */
// Solución 1:
function agruparSmartphonesPorAnioSol1(smartphones) {
    // Creamos un objeto vacío para almacenar los smartphones agrupados por año
    let agrupadosPorAnio = {};

    // Recorremos cada clave del objeto de smartphones
    for (let clave of Object.keys(smartphones)) {
        // Obtenemos el año de lanzamiento del smartphone actual
        let anio = smartphones[clave].lanzamiento;

        // Si no existe un array para este año, lo inicializamos
        if (!agrupadosPorAnio[anio]) {
            agrupadosPorAnio[anio] = new Array(); // Inicializamos un array vacío para el año
        }

        // Agregamos el smartphone actual al array correspondiente a su año
        agrupadosPorAnio[anio].push(smartphones[clave]);
    }

    // Devolvemos el objeto con los smartphones agrupados por año
    return agrupadosPorAnio;
}

// Llamada a la función
console.log(agruparSmartphonesPorAnioSol1(smartphones)); 

// Solución 2 (reduce()):
function agruparSmartphonesPorAnioSol2(smartphones) {
    return Object.values(smartphones).reduce((resultado, smartphone) => {
        // Obtenemos el año de lanzamiento
        const anio = smartphone.lanzamiento;

        // Si el año no existe en el resultado, lo inicializamos con un array vacío
        if (!resultado[anio]) {
            resultado[anio] = [];
        }

        // Agregamos el smartphone al array correspondiente al año
        resultado[anio].push(smartphone);

        return resultado; // Retornamos el objeto actualizado
    }, {}); // Iniciamos con un objeto vacío
}

// Llamada a la función
console.log(agruparSmartphonesPorAnioSol2(smartphones));

/**
 * Ejercicio 13. 
 * Crea una función que reciba un objeto de smartphones y devuelva un array con los nombres de todos los propietarios de los smartphones en garantia.
 */
// Solución 1 :
function obtenerPropietariosConGarantiaSol1(smartphones) {
    let propietariosConGarantia = new Array(); // Inicializamos un array vacío para los propietarios

    // Recorremos cada clave del objeto de smartphones
    for (let clave of Object.keys(smartphones)) {
        let smartphone = smartphones[clave]; // Obtenemos el smartphone actual

        // Verificamos si el smartphone está en garantía
        if (smartphone.garantia) {
            // Agregamos el nombre del propietario al array
            propietariosConGarantia.push(smartphone.usuario.nombre);
        }
    }

    return propietariosConGarantia; // Devolvemos el array con los nombres
}

// Llamada a la función
console.log(obtenerPropietariosConGarantiaSol1(smartphones));

// Solucion 2 (con filter y map):
function obtenerPropietariosConGarantiaSol2(smartphones) {
    return Object.values(smartphones) // Convertimos el objeto en un array
        .filter(smartphone => smartphone.garantia) // Filtramos los que están en garantía
        .map(smartphone => smartphone.usuario.nombre); // Extraemos los nombres de los propietarios
}

// Llamada a la función
console.log(obtenerPropietariosConGarantiaSol2(smartphones));

/**
 * Ejercicio 14. 
 * Crea una función que devuelva un array de objetos que contengan el modelo y el precio de los smartphones que tengan un precio mayor a 50000.
 */
// Solución 1:
function obtenerSmartphonesCarosSol1(smartphones) {
    let smartphonesCaros = new Array(); // Inicializamos un array vacío para los smartphones caros

    // Recorremos cada clave del objeto de smartphones
    for (let clave of Object.keys(smartphones)) {
        let smartphone = smartphones[clave]; // Obtenemos el smartphone actual

        // Verificamos si el precio del smartphone es mayor a 500
        if (smartphone.precio > 500) {
            // Agregamos un objeto con el modelo y precio al array
            smartphonesCaros.push({ modelo: smartphone.modelo, precio: smartphone.precio });
        }
    }

    return smartphonesCaros; // Devolvemos el array con los smartphones caros
}

// Llamada a la función
console.log(obtenerSmartphonesCarosSol1(smartphones));

// Solucion 2 (usando filter y map)
function obtenerSmartphonesCarosSol2(smartphones) {
    return Object.values(smartphones) // Convertimos el objeto en un array
        .filter(smartphone => smartphone.precio > 500) // Filtramos los que tienen un precio mayor a 500
        .map(smartphone => ({ modelo: smartphone.modelo, precio: smartphone.precio })); // Creamos un nuevo objeto con modelo y precio
}

// Llamada a la función
console.log(obtenerSmartphonesCarosSol2(smartphones));


/**
 * Ejercicio 15. 
 * Crea una función que devuelva un array con todos los modelos de smartphones, asegurándose de que no haya duplicados.
 */
// Solución 1:
function obtenerModelosUnicosSol1(smartphones) {
    const modelos = new Set(); // Inicializamos un Set para almacenar modelos únicos

    // Recorremos cada clave del objeto de smartphones
    for (let clave of Object.keys(smartphones)) {
        modelos.add(smartphones[clave].modelo); // Agregamos el modelo al Set
    }

    return Array.from(modelos); // Convertimos el Set de nuevo a un array
}

// Llamada a la función
console.log(obtenerModelosUnicosSol1(smartphones));

// Solucion 2 (usando forEach)
function obtenerModelosUnicosSol2(smartphones) {
    const modelos = new Set(); // Inicializamos un Set para almacenar modelos únicos

    // Recorremos cada smartphone y añadimos el modelo al Set
    Object.values(smartphones).forEach(smartphone => {
        modelos.add(smartphone.modelo); // El Set automáticamente evita duplicados
    });

    return Array.from(modelos); // Convertimos el Set de nuevo a un array
}

// Llamada a la función
console.log(obtenerModelosUnicosSol2(smartphones));
