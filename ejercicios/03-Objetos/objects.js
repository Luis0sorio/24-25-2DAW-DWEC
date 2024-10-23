/**
 ***************************************************
 ******************** OBJETOS ********************** 
 *************************************************** 
 * 
 * Los tipos primitivos en JavaScript son: undefined, null, boolean, number y string.
 * El resto de elementos como funciones, arrays, expresiones regulares... son objetos.
 * 
 * Un objeto en JavaScript es un contenedor de propiedades donde una propiedad tiene un nombre y un valor.
 * - el nombre puede ser cualquier cadena de caracteres.
 * - el valor puede ser cualquier valor excepto el undefined.
 * 
 * 
 * 1. Creacion de objetos
 * Para construir el objeto se utiliza el tipo Object y se le asignan propiedades o metodos.
 * 
 * Ejemplos:
 * 
 * var objeto = new Object();
 * objeto.propiedad = "valor";
 * objeto.propiedad2 = function() {
 *      console.log('soy una funcion');
 * }
 * 
 * Existe otro tipo de notacion para crear objetos con las llaves ({})
 * 
 * Ejemplos:
 * var objeto = {};
 * objeto.propiedad = "valor";
 * objeto.propiedad2 = function() {
 *      console.log('soy una funcion');
 * }
 * 
 * var objeto = {
 *      "propiedad" : "valor",
 *      "propiedad2" : function() {
 *                          console.log('soy una funcion');
 *                      };
 * }
 * 
 * 
 * 2. Acceso a los objetos
 * Para acceder a los objetos se utilizan los corchetes ([]) similar al acceso a los arrays.
 * Si el nombre de la propiedad no es una palabra reservada se puede utilizar el punto (.).
 * 
 * Ejemplos:
 * objeto['propiedad]
 * objeto.propiedad
 * 
 * Casos especiales:
 * - el valor undefined es devuelto si se accede a una propiedad no existente
 *   Ejemplos:
 *   objeto['propiedad_no_definida']        // undefined
 * 
 * - el operador || puede ser utilizado para obtener valores por defecto.
 *   Ejemplos:
 *   var resultado = objeto['propiedad'] || "valor por defecto";
 *   var resultado = objeto.propiedad || "valor por defecto"; *  
 * 
 * - Si se intenta acceder a loa valores de una propiedad no definida, JavaScript lanza una excepcion del tipo TypeError.
 *   Esto puede evitarse utilizando el operador && para asegurarse si existe y es accesible.
 *   Ejemplos: 
 *   objeto.propiedad_no_definida                                               // undefined
 *   objeto.propiedad_no_definida.propiedad2                                    // TypeError: cannot read property 'propiedad2' or undefined
 *   objeto.propiedad_no_definida && objeto.propiedad_no_definida.propiedad2    // undefined
 *    
 *  
 * 3. Modificacion de objetos.
 * El valor de los objetos puede actualizarse a traves de una asignacion.
 * - Si el nombre de la pripuedad existe en el objeto, su valor se reemplaza.
 * - Si el nombre de la propiedad no existe en el objeto, se añade al objeto la propiedad y el valor.
 * 
 * Ejemplos:
 * objeto.propiedad = 'valor';
 * objeto['propiedad] = 'valor';
 *  
 * 
 * 4. Borrado de objetos.
 * Para el borrado de propiedades en objetos se utiliza el operadoe delete.
 * 
 * Ejemplos:
 * delete objeto.propiedad;
 * 
 * 5. Enumeracion de objetos.
 * Con el bucle for ... in podemos iterar los nombres de las propiedades de un objeto.
 * Es posible filtrar las propiedades a traves de la funcion hasOwnProperty y el operador typeof
 * 
 * Ejemplos:
 * for (indice in objeto) {
 *      if (typeof objeto[indice] !== 'function') {
 *          document.writeln(indice + ': ' + objeto[indice]);
 *      }
 * }
 * 
 * 
 * 
 * METODOS
 * 
 * Object.assign(target, ...sources)            - Copia las propiedades enumerables de uno o más objetos de origen a un objeto de destino.
 * Object.create(proto[, propertiesObject])     - Crea un nuevo objeto con el prototipo especificado y las propiedades opcionales dadas.
 * Object.defineProperty(obj, prop, descriptor) - Define una nueva propiedad directamente en un objeto o modifica una propiedad existente.
 * Object.defineProperties(obj, props)          - Define varias nuevas propiedades directamente en un objeto o modifica propiedades existentes.
 * Object.entries(obj)                          - Devuelve un array con las propiedades enumerables del objeto como [key, value] arrays.
 * Object.freeze(obj)                           - Congela un objeto: no se pueden añadir, eliminar o modificar propiedades.
 * Object.getOwnPropertyDescriptor(obj, prop)   - Devuelve un descriptor de propiedad para una propiedad específica de un objeto.
 * Object.getOwnPropertyNames(obj)              - Devuelve un array con los nombres de las propiedades del objeto.
 * Object.getPrototypeOf(obj)                   - Devuelve el prototipo de un obj a.
 * Object.is(value1, value2)                    - Determina si dos valores son iguales, en el sentido de la igualdad profunda.
 * Object.isExtensible(obj)                     - Determina si se pueden añadir propiedades a un objeto.
 * Object.isFrozen(obj)                         - Determina si un objeto está congelado.
 * Object.keys(obj)                             - Devuelve un array con las propiedades enumerables de un objeto.
 * Object.preventExtensions(obj)                - Evita que se añadan propiedades a un objeto.
 * Object.seal(obj)                             - Sella un objeto: no se pueden añadir ni eliminar propiedades, pero se pueden modificar las existentes.
 * Object.values(obj)                           - Devuelve un array con los valores de las propiedades enumerables de un objeto.
 * 
 * 
 * 
 * EJEMPLOS
 * 
 * 1. assign:
 * let obj1 = {a: 1, b: 2};
 * let obj2 = {c: 3, d: 4};
 * let obj3 = Object.assign({}, obj1, obj2);
 * console.log(obj3); // {a: 1, b: 2, c: 3, d: 4}
 * 
 * 
 * 2. create:
 * let obj1 = {a: 1, b: 2};
 * let obj2 = Object.create(obj1);
 * console.log(obj2); // {}
 * console.log(obj2.a); // 1
 * 
 * 
 * 3. defineProperty:
 * let obj1 = {};
 * Object.defineProperty(obj1, 'a', {
 *   value: 1,
 *   writable: true,
 *   enumerable: true,
 *   configurable: true
 * });
 * console.log(obj1); // {a: 1}
 * 
 * 
 * 4. defineProperties:
 * let obj1 = {};
 * Object.defineProperties(obj1, {
 *   a: {
 *     value: 1,
 *     writable: true
 *   },
 *   b: {
 *     value: 2,
 *     writable: true
 *   }
 * });
 * console.log(obj1); // {a: 1, b: 2}
 * 
 * 
 * 5. entries:
 * let obj1 = {a: 1, b: 2};
 * let entries = Object.entries(obj1);
 * console.log(entries); // [['a', 1], ['b', 2]]
 * 
 * 
 * 6. freeze:
 * let obj1 = {a: 1, b: 2};
 * Object.freeze(obj1);
 * obj1.a = 3;
 * console.log(obj1); // {a: 1, b: 2}
 * 
 * 
 * 7. getOwnPropertyDescriptor:
 * let obj1 = {a: 1, b: 2};
 * let descriptor = Object.getOwnPropertyDescriptor(obj1, 'a');
 * console.log(descriptor); // {value: 1, writable: true, enumerable: true, configurable: true}
 * 
 * 
 * 8. getOwnPropertyNames:
 * let obj1 = {a: 1, b: 2};
 * let names = Object.getOwnPropertyNames(obj1);
 * console.log(names); // ['a', 'b']
 * 
 * 
 * 9. getPrototypeOf:
 * let obj1 = {a: 1, b: 2};
 * let obj2 = Object.create(obj1);
 * let proto = Object.getPrototypeOf(obj2);
 * console.log(proto); // {a: 1, b: 2}
 * 
 * 
 * 10. is:
 * let obj1 = {a: 1};
 * let obj2 = {a: 1};
 * console.log(Object.is(obj1, obj2)); // false
 * 
 * 
 * 11. isExtensible:
 * let obj1 = {a: 1, b: 2};
 * console.log(Object.isExtensible(obj1)); // true
 * 
 * 
 * 12. isFrozen
 * let obj1 = {a: 1, b: 2};
 * Object.freeze(obj1);
 * console.log(Object.isFrozen(obj1)); // true
 * 
 * 
 * 14. keys:
 * let obj1 = {a: 1, b: 2};
 * let keys = Object.keys(obj1);
 * console.log(keys); // ['a', 'b']
 * 
 * 
 * 15. preventExtensions:
 * let obj1 = {a: 1, b: 2};
 * Object.preventExtensions(obj1);
 * obj1.c = 3;
 * console.log(obj1); // {a: 1, b: 2}
 * 
 * 
 * 16. seal:
 * let obj1 = {a: 1, b: 2};
 * Object.seal(obj1);
 * obj1.a = 3;
 * delete obj1.b;
 * console.log(obj1); // {a: 3}
 * 
 * 
 * 17. values:
 * let obj1 = {a: 1, b: 2};
 * let values = Object.values(obj1);
 * console.log(values); // [1, 2]
 */