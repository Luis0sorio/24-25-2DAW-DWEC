# Simulacro de Examen - Registro Completo

## **Proyecto de desarrollo: Registro completo de información personal**

Este proyecto consiste en la implementación de un formulario interactivo para registrar información completa de un usuario, incluyendo validaciones en tiempo real y mensajes contextuales que guíen al usuario. Se debe trabajar con eventos variados del DOM para enriquecer la experiencia de usuario.

El formulario debe ser dinámico y manejar múltiples eventos para la validación, visualización de mensajes y actualización del estado de los elementos. La estructura y lógica del código deben estar optimizadas y documentadas, facilitando su comprensión y mantenimiento.

El proyecto parte de una estructura general de código HTML y CSS fijo, es decir, no puede ser modificado, pero sí analizado detenidamente para interactuar con él desde un archivo JavaScript.

---

## **Requisitos de Implementación**

### 1. **Interacción dinámica con los campos del formulario (20%)**
- Al enfocar (`focus`) un campo de entrada, su fondo debe cambiar para indicar que está activo.
- Al desenfocar (`blur`), el fondo debe volver a su estado original y los datos deben validarse en tiempo real.
- Mientras el usuario escribe, el borde del campo debe cambiar para indicar que hay interacción.

**Criterio clave:** Los cambios visuales deben ser claros y funcionales, reflejando las interacciones del usuario.

---

### 2. **Mensajes contextuales dinámicos (15%)**
- Al pasar el ratón (`mouseenter`) sobre un campo, debe mostrarse un mensaje contextual relacionado con ese campo en un área específica.
- El mensaje debe desaparecer cuando el ratón salga del campo (`mouseleave`).
- Los mensajes deben estar posicionados dinámicamente y actualizarse según el campo seleccionado.

**Criterio clave:** Los mensajes deben ser útiles y estar correctamente alineados con el elemento que genera el evento.

---

### 3. **Validación del formulario en tiempo real (20%)**
- El botón de envío debe permanecer inactivo hasta que todos los campos sean válidos:
  - El nombre debe tener al menos 3 caracteres.
  - El correo debe incluir un símbolo `@`.
  - La calificación debe ser un número entre 0 y 10.
- El estado del botón debe actualizarse dinámicamente según los valores introducidos.

**Criterio clave:** El botón de envío debe reflejar siempre el estado de validez del formulario.

---

### 4. **Gestión del formulario (20%)**
- Incluir un botón adicional para limpiar todo el formulario y restablecerlo a su estado inicial.
- Los comentarios deben poder limpiarse rápidamente mediante un doble clic (`dblclick`) en el área de texto.
- Tras enviar el formulario, debe mostrarse un mensaje emergente con la información registrada y el formulario debe reiniciarse automáticamente.

**Criterio clave:** La funcionalidad de reinicio y limpieza debe ser clara y dejar el formulario listo para un nuevo registro.

---

### 5. **Mensajes adicionales (15%)**
- Incluir un área que muestre un mensaje de ayuda cuando el usuario pase el ratón sobre un área específica fuera de los campos del formulario (por ejemplo, "hoverBox").
- Este mensaje debe aparecer al pasar el ratón (`mouseenter`) y desaparecer al salir (`mouseleave`).

**Criterio clave:** El mensaje debe ser claro, informativo y aparecer en el momento adecuado.

---

### 6. **Optimización y Documentación del Código (10%)**
- El código debe estar organizado en funciones reutilizables, evitando duplicaciones innecesarias.
- Cada función debe incluir una descripción clara de su propósito, parámetros y retorno (si aplica).

**Criterio clave:** La organización y documentación del código deben facilitar su mantenimiento y escalabilidad.

