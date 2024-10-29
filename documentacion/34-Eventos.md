# Eventos

Los eventos en JavaScript son un mecanismo que permite a los desarrolladores ejecutar código en respuesta a acciones del usuario o cambios en el estado de la página. Son fundamentales en la programación de aplicaciones web interactivas, pues permiten manipular el DOM (Document Object Model) de manera dinámica.

## Definición
Los eventos en JavaScript son mecanismos fundamentales que permiten que el navegador detecte y responda a interacciones del usuario o a cambios en el entorno de la página. 

Estos pueden generarse tanto por el usuario (mediante acciones como movimientos de ratón, clics, o presiones de teclas) como por el propio sistema del navegador (por ejemplo, al cargar la página o cambiar el estado de un recurso). 

Los eventos constituyen, por tanto, la base de la comunicación entre el navegador y el código de la aplicación, permitiendo que las acciones tengan un efecto directo en el contenido o en la presentación de la página web.

## Manejadores de eventos y listeners
Un manejador de eventos es una función o conjunto de instrucciones que se ejecutan en respuesta a un evento. 

En términos simples, se trata de un código que "reacciona" cuando ocurre una interacción, como un clic o un desplazamiento de ratón.

Los manejadores de eventos se configuran a través de un método llamado ***addEventListener***, que permite añadir varios manejadores al mismo evento sin que se reemplacen unos a otros. 

Esto es especialmente útil para personalizar cómo una página responde a un evento, y facilita la programación de eventos complejos sin riesgo de perder otras funciones ya asignadas. 

Además, addEventListener permite especificar en qué fase de la propagación se ejecutará el manejador, lo que otorga un control detallado del flujo de la respuesta al evento.

## Eventos del ciclo de vida de la página
Existen ciertos eventos en JavaScript que se relacionan con el "ciclo de vida" de la página, es decir, con momentos clave del proceso de carga y cierre de la página. 

Algunos de estos eventos son:

- **DOMContentLoaded**: Indica que el contenido básico de la página (texto, estructura, etc.) ya está cargado, por lo que el código JavaScript puede ejecutarse de manera segura. Es ideal para comenzar a manipular la página una vez que su estructura está lista.

- **Load**: Este evento ocurre una vez que todos los recursos (imágenes, archivos de estilo, etc.) de la página han sido completamente cargados. Este evento es útil cuando es necesario que todos los elementos visuales de la página estén completamente disponibles.

- **Beforeunload** y **Unload**: Estos eventos se activan cuando el usuario está a punto de abandonar la página. Su propósito es permitir que el navegador notifique al usuario o que guarde cambios, según sea necesario.

Estos eventos son importantes porque ayudan a coordinar cuándo y cómo ejecutar el código, asegurando que cada parte de la aplicación funcione en el momento correcto y en armonía con el estado de carga de la página.

## Prevención y modificación del comportamiento por defecto de los eventos
En JavaScript, ciertos eventos tienen un comportamiento predeterminado que se ejecuta automáticamente cuando el usuario interactúa con ciertos elementos. 

Por ejemplo, al hacer clic en un enlace, el navegador navega automáticamente a la página que este enlace apunta. 

Sin embargo, JavaScript permite evitar este comportamiento predeterminado mediante el método **preventDefault**.

Esta capacidad de prevenir el comportamiento por defecto le da al desarrollador control total sobre lo que sucede cuando ocurre un evento. 

Por ejemplo, al evitar el comportamiento predeterminado, el desarrollador puede programar acciones personalizadas, como verificar si un formulario está correctamente completado antes de enviarlo. 

Esta flexibilidad es crucial para que las aplicaciones puedan cumplir con requisitos específicos de forma personalizada.