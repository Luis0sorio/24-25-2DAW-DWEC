# Introducción

Git y GitHub son dos herramientas fundamentales en el mundo del desarrollo de software, y cada una cumple una función específica en el proceso de control de versiones y colaboración.

## Git

Git es un sistema de control de versiones distribuido, desarrollado originalmente por Linus Torvalds en 2005, el mismo creador del kernel de Linux. Git permite a múltiples desarrolladores trabajar en un proyecto sin interferir unos con otros, facilitando la colaboración y manteniendo un registro detallado de todos los cambios realizados en los archivos de un proyecto.

Conceptos básicos:

- **Control de versiones**: Git mantiene un historial de todos los cambios realizados en un proyecto. Esto incluye información sobre qué se cambió, quién lo cambió y cuándo se cambió. Esto facilita el proceso de volver a versiones anteriores del código si es necesario.

- **Distribuido**: Git es un sistema distribuido, lo que significa que cada desarrollador tiene una copia completa del historial del proyecto en su ordenador. Esto permite trabajar sin conexión y hacer cambios sin depender de un servidor central.

- **Commit**: En Git, los cambios se agrupan en "commits". Un commit es un "paquete" de cambios que se guarda en el historial del proyecto, con un mensaje que describe qué se modificó.

- **Branch (rama)**: Git permite crear "ramas", que son esencialmente líneas separadas de desarrollo. Esto permite experimentar o trabajar en nuevas características sin afectar la rama principal o estable (conocida como main o master). Una vez que los cambios en una rama se consideran estables, se pueden combinar con la rama principal usando un proceso llamado merge.

- **Fusión y resolución de conflictos**: Cuando se trabaja en equipo, es común que haya varios desarrolladores trabajando en el mismo archivo. Git permite combinar los cambios hechos por cada persona, y en caso de conflictos (cuando varios cambios afectan la misma parte del archivo), se requiere una "resolución de conflictos" manual.

## GitHub

GitHub es una plataforma en línea que utiliza Git para el alojamiento y la gestión de repositorios de código. Aunque GitHub no es la única plataforma de este tipo (también existen GitLab y Bitbucket), es una de las más populares y proporciona muchas funcionalidades que mejoran la colaboración en proyectos, como:

- **Almacenamiento remoto de repositorios**: GitHub permite almacenar el código de manera centralizada en la nube, lo cual facilita compartir el proyecto con otros desarrolladores y tener una copia de seguridad.

- **Colaboración**: GitHub facilita la colaboración entre equipos de desarrollo a través de características como:

    - **Pull Requests**: Un pull request es una solicitud para que los cambios en una rama específica se combinen con otra (generalmente con la rama main). Esto facilita la revisión del código y el intercambio de comentarios antes de aceptar los cambios.

    - **Issues**: GitHub permite la gestión de problemas o tareas relacionadas con un proyecto, lo cual es muy útil para el seguimiento del progreso y la asignación de tareas entre el equipo.

- **GitHub Actions**: Esta es una característica que permite automatizar procesos, como pruebas o despliegues automáticos. GitHub Actions facilita la integración continua y el despliegue continuo (CI/CD).

- **Documentación y visibilidad**: Cada repositorio en GitHub puede incluir documentación, como el archivo README.md, que actúa como una introducción al proyecto. Esto es útil para que nuevos desarrolladores entiendan rápidamente de qué se trata el proyecto, cómo instalarlo y cómo contribuir.

## Relación entre Git y GitHub

Git es la herramienta que se usa para manejar versiones localmente en el ordenador de cada desarrollador, mientras que GitHub es el servidor remoto donde se almacenan esos cambios para que otros desarrolladores puedan trabajar en conjunto. En otras palabras, GitHub se puede ver como una "red social" para el código, que facilita la colaboración y el intercambio del trabajo.

Un flujo de trabajo típico usando Git y GitHub sería:

1. **Clonar el repositorio**: Al empezar a trabajar en un proyecto ya existente, el desarrollador puede "clonar" el repositorio remoto (ubicado en GitHub) en su computadora usando Git. Esto crea una copia exacta de todo el historial del proyecto.

2. **Hacer cambios**: Después de clonar el proyecto, el desarrollador puede hacer cambios en su copia local. Puede hacer múltiples "commits" para guardar los cambios de manera incremental.

3. **Crear una nueva rama**: Para desarrollar una nueva funcionalidad o corregir un error, el desarrollador crea una nueva rama. Esto permite que el trabajo en curso no afecte a la versión estable del proyecto.

4. **Push**: Una vez que los cambios se consideran listos, el desarrollador usa el comando git push para enviar sus cambios a GitHub. Esto sincroniza la copia local con el servidor remoto.

5. **Pull Request**: El desarrollador abre un pull request en GitHub para notificar al equipo que los cambios están listos para ser revisados. Otros desarrolladores pueden revisar, comentar, y eventualmente aprobar esos cambios.

6. **Merge**: Una vez que el pull request es aprobado, los cambios se pueden integrar (merge) en la rama principal (main o master).

## Lista de comandos 

### Comandos Básicos 

1. **git init**

    - Descripción: Inicializa un nuevo repositorio de Git en el directorio actual.

    - Uso: Crea un subdirectorio .git que contiene toda la información del repositorio.

    - Ejemplo:
    
    ```bash
    git init
    ```

    - Este comando se usa cuando deseas comenzar un nuevo proyecto con Git.

2. **git clone**

    - Descripción: Clona un repositorio remoto en tu computadora.

    - Uso: Copia un repositorio existente (remoto o local) a una nueva carpeta.

    - Ejemplo:

    ```bash
    git clone https://github.com/usuario/repo.git
    ```

    - Esto descargará el repositorio especificado desde GitHub.

3. **git status**

    - Descripción: Muestra el estado del repositorio, indicando los archivos que han sido modificados, los que están preparados para commit, y otros cambios pendientes.

    - Ejemplo:

    ```bash
    git status
    ```

    - Te da información sobre el estado actual del área de trabajo y el área de preparación.

4. **git add**

    - Descripción: Agrega archivos al área de preparación (staging area).

    - Uso: Se utiliza para incluir archivos en el próximo commit.

    - Ejemplos:

    ```bash
    git add archivo.txt
    ```

    - Agrega archivo.txt al staging.

    ```bash
    git add .
    ```

    - Agrega todos los archivos modificados y nuevos en el directorio actual.

5. **git commit**

    - Descripción: Crea un commit con los cambios agregados al staging.

    - Uso: Guarda un conjunto de cambios en el historial del repositorio.

    - Ejemplos:

    ```bash
    git commit -m "Mensaje del commit"
    ```
    
    - Realiza un commit con el mensaje especificado.

    ```bash
    git commit
    ```

    - Abre el editor de texto para ingresar un mensaje de commit detallado.

6. **git push**

    - Descripción: Envía los cambios locales al repositorio remoto.

    - Uso: Se usa para sincronizar tu copia local del repositorio con la versión remota.

    - Ejemplo:

    ```bash
    git push origin main
    ```

    - Envía los cambios a la rama main del repositorio remoto.

7. **git pull**

    - Descripción: Trae cambios desde el repositorio remoto y fusiona con la rama actual.

    - Uso: Mantiene tu copia local actualizada con la versión remota.

    - Ejemplo:

    ```bash
    git pull origin main
    ```

    - Descarga y fusiona los cambios en la rama main.

8. **git branch**

    - Descripción: Gestiona las ramas del repositorio.

    - Uso: Lista, crea o elimina ramas.

    Ejemplos:

    ```bash
    git branch
    ```

    - Lista todas las ramas locales.

    ```bash
    git branch nueva-rama
    ```

    - Crea una nueva rama llamada nueva-rama.

    ```bash
    git checkout
    ```

    - Descripción: Cambia entre ramas o recupera versiones anteriores de los archivos.

    - Uso: Para moverse a otra rama o restaurar archivos desde el historial.

    Ejemplos:

    ```bash
    git checkout main
    ```

    - Cambia a la rama main.

    ```bash
    git checkout -b nueva-rama
    ```

    - Crea y cambia a nueva-rama.

9. **git merge**

    - Descripción: Fusiona cambios de una rama a otra.

    - Uso: Se utiliza para integrar los cambios de una rama secundaria con otra, generalmente main.

    - Ejemplo:

    ```bash
    git merge nueva-rama
    ```

    - Fusiona nueva-rama con la rama actual.

### Comandos de Repositorios Remotos

1. **git remote**

    - Descripción: Gestiona los enlaces a repositorios remotos.

    - Uso: Lista, agrega o elimina repositorios remotos.

    - Ejemplos:

    ```bash
    git remote -v
    ```

    - Lista los repositorios remotos existentes.

    ```bash
    git remote add origin https://github.com/usuario/repo.git
    ```

    - Agrega un nuevo remoto llamado origin.

2. **git fetch**

    - Descripción: Descarga los cambios del repositorio remoto sin fusionarlos automáticamente.

    - Uso: Se usa para traer actualizaciones sin afectar la rama local.

    - Ejemplo:

    ```bash
    git fetch origin
    ```

    - Descarga la información del repositorio remoto origin.

### Comandos para Historial

1. **git log**

    - Descripción: Muestra el historial de commits.

    - Uso: Proporciona información detallada de cada commit.

    - Ejemplos:

    ```bash
    git log
    ```

    - Muestra el historial completo.

    ```bash
    git log --oneline
    ```

    - Muestra el historial en formato resumido (una sola línea por commit).

2. **git diff**

    - Descripción: Muestra los cambios entre commits, ramas o archivos.

    - Ejemplos:

    ```bash
    git diff
    ```

    - Muestra los cambios que aún no se han llevado a commit.

    ```bash
    git diff rama1 rama2
    ```

    - Muestra las diferencias entre rama1 y rama2.

### Comandos de Revertir Cambios

1. **git reset**

    - Descripción: Deshace cambios que se encuentran en el staging o los commits anteriores.

    - Ejemplos:

    ```bash
    git reset archivo.txt
    ```

    - Quita archivo.txt del staging.

    ```bash
    git reset --hard HEAD~1
    ```

    - Deshace el último commit de manera irreversible.

2. **git revert**

    - Descripción: Crea un nuevo commit que revierte un commit anterior.

    - Ejemplo:

    ```bash
    git revert abc1234
    ```

    - Revierte el commit identificado por el hash abc1234.

### Otros Comandos Útiles

1. **git stash**

    - Descripción: Guarda cambios temporales sin hacer un commit.

    - Ejemplos:

    ```bash
    git stash
    ```

    - Guarda los cambios actuales para que puedas cambiar de rama sin problemas.

    ```bash
    git stash apply
    ```

    - Aplica los cambios guardados sin eliminarlos del stash.

2. **git tag**

    - Descripción: Marca puntos específicos en el historial como versiones.

    - Ejemplos:

    ```bash
    git tag v1.0.0
    ```

    - Crea una etiqueta v1.0.0 en el commit actual.

    ```bash
    git tag -a v1.0.0 -m "Versión 1.0.0"
    ```

    - Crea una etiqueta anotada v1.0.0 con un mensaje explicativo.