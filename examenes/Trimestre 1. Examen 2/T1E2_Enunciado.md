# Trimestre 1 - Examen 2 - Enunciado

**I.E.S. JUAN DE LA CIERVA**  
**Grupo:** 2º DAW  
**Parcial 2 de 1ª Evaluación**  
**Módulo:** Desarrollo Web en Entorno Cliente  
**Curso:** 2024/2025  
**Fecha:** 19-11-24  

---

## Proyecto de desarrollo: Registro de calificaciones de alumnos por módulo

Este proyecto consiste en la implementación de un formulario interactivo para el registro de calificaciones de alumnos en distintos módulos. El formulario debe guiar al usuario de manera intuitiva, asegurando que las entradas sean correctas y mostrando en tiempo real cualquier error que requiera corrección. La estructura y lógica del código deben estar optimizadas y bien documentadas, facilitando su comprensión y mantenimiento.

El proyecto parte de una estructura general de código HTML y CSS fijo, es decir, no puede ser modificado, pero sí analizado detenidamente pues el uso del DOM es fundamental (aplicándolo junto a los eventos correspondientes) desde el fichero JavaScript para la creación y eliminación de elementos, así como la aplicación de los estilos correspondientes que ya están creados.

### Requisitos de Implementación

#### 1. Validación de entrada de datos (20%)
- La entrada del nombre del alumno debe cumplir con una longitud específica de caracteres para ser válida (establecida por cada estudiante tanto el mínimo como el máximo).
- La calificación debe ser un valor numérico entre 0 y 10. Si el nombre o la calificación no cumplen estos criterios, se debe mostrar un mensaje de error junto al campo correspondiente, indicando el motivo de la invalidación.
- Los mensajes de error deben crearse y eliminarse en función de las interacciones del usuario.

**Criterio clave:** Los mensajes de error deben aparecer solo cuando es necesario y deben reflejar claramente el problema para que el usuario pueda corregirlo.

#### 2. Habilitación del botón de confirmación (15%)
- El botón de confirmación debe permanecer inactivo hasta que todas las condiciones de entrada se hayan cumplido correctamente.
- Solo entonces debe habilitarse para permitir la confirmación.

**Criterio clave:** El botón debe reflejar siempre el estado de validez del formulario, asegurando que el registro solo se realice cuando los datos sean correctos.

#### 3. Inserción en la lista correspondiente (20%)
- Al confirmar un registro, el nombre del alumno, el módulo y la calificación deben añadirse en la lista de "Aprobados" o "Suspensos", según si la calificación es igual o superior a 5.

**Criterio clave:** La lista debe reflejar de inmediato los cambios en función de la calificación ingresada.

#### 4. Restablecimiento del formulario (15%)
- Tras cada registro, el formulario debe restablecerse a su estado inicial, incluyendo la eliminación de mensajes de error y limpieza de entradas.

**Criterio clave:** El formulario debe estar listo para un nuevo registro inmediatamente después de confirmar.

#### 5. Optimización del código (20%)
- El código debe estructurarse de forma clara y eficiente, con funciones reutilizables y evitando duplicación innecesaria.

**Criterio clave:** La organización y optimización del código son esenciales para la escalabilidad y el rendimiento del formulario.

#### 6. Documentación de funciones (10%)
- Cada función debe incluir una descripción clara de su propósito, parámetros de entrada y retorno.

**Criterio clave:** La documentación debe facilitar la comprensión y el mantenimiento del código.

---

### Entrega
La entrega se realiza en el aula virtual en el espacio habilitado con el siguiente formato: `apellidonombre.zip`. Ejemplo: `fontansergio.zip`.

NOTA: quien tiene la recuperación lo debe enviar por **MAIL**