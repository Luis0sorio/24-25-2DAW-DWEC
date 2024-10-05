# BOM
Modelo de objetos del navegador (browser). Clase padre.

## Objeto Navigator
Este objeto nos proporciona información sobre el navegador que estamos utilizando asi como su version.

- userAgent

- onLine

- cookieEnabled

## Objeto Console
Este objeto tiene herramientas para comunicarse con la consola.
Existen distintos tipos de mensajes:

- log

- error

- warn

- info

- table

- time ---> timeEnd

- group --> groupEnd

- assert

## Objeto History
Proporciona informacion sobre el historial del navegador

- back(): retrocede en el historial

- forward(): avanza en el historial

- go(valor): puede retroceder o avanzar en el historial
    + 1: avanza a la pagina siguiente
    + -1: retrocede a la pagina anterior
    + 0: recargar la pagina actual

## Objeto Location
Representa la URL actual del documento.
Proporciona informacion tanto de la URL actual como de futuras redirecciones a nuevas paginas web.
Manipular URL.

- **href**: proporciona la URL completa de la pagina web actual. Tambien puede redirigir el navegador a otra pagina web

- **protocol**: nos proporciona el protocolo de la URL que indica como se accede a los recursos de la pagina.
    + http
    + https
    + file
    + ftp
    ...

- **port**: proporciona informacion sobre el puerto utilizado

- **host**:devuelve el nombre de dominio y el numero de puerto (si existe) de la URL

- **hostname**: es similar a location.host, pero SIN EL NUMERO DE PUERTO. Devuelve el nombre del dominio

- **pathname**: nos dice la parte de la URL que sigue al nombre de dominio, EXCLUYENDO los parametros de consulta.

- **search**: devuelve los PARAMETROS DE CONSULTA de la URL, es decir, los datos despues de la interrogacion. Estos parametros se usan a menudo para pasar informacion de una pagina a otra.