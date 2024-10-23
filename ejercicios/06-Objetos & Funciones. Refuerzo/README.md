# Descripción de propiedades

- id: El número de identificación único del Pokémon en la Pokédex. Es un valor numérico que indica la posición del Pokémon en el orden oficial.

- nombre: El nombre del Pokémon. Es una cadena de texto que representa cómo se llama el Pokémon.

- tipos: Una lista de los tipos a los que pertenece el Pokémon (por ejemplo, "Fuego", "Agua", "Eléctrico"). Puede contener uno o dos tipos.

- fuerza_contra: Una lista de los tipos de Pokémon contra los cuales el Pokémon es fuerte o tiene ventaja, lo que significa que hace más daño al atacar a Pokémon de estos tipos.

- debil_contra: Una lista de los tipos de Pokémon contra los cuales el Pokémon es débil, lo que significa que recibe más daño de ataques de estos tipos.

- inmune_contra: Una lista de los tipos a los que el Pokémon es inmune, lo que significa que no recibe daño de ataques de esos tipos.

- resistente_a: Una lista de los tipos de los que el Pokémon recibe menos daño. Representa los tipos de ataques que son menos efectivos contra él.

- estadisticas_base: Un objeto que contiene las estadísticas base del Pokémon, incluyendo:

- hp: La salud o puntos de vida del Pokémon.
    - ataque: La fuerza del Pokémon para los movimientos físicos.
    - defensa: La resistencia del Pokémon contra los movimientos físicos.
    - ataque_especial: La fuerza del Pokémon para los movimientos especiales.
    - defensa_especial: La resistencia del Pokémon contra los movimientos especiales.
    - velocidad: La rapidez del Pokémon, que determina el orden en el que ataca en combate.
    - habilidades: Una lista de habilidades que tiene el Pokémon. Cada habilidad tiene:

- nombre: El nombre de la habilidad.
    - descripcion: Una breve explicación de lo que hace la habilidad.
    - movimientos: Una lista de movimientos que el Pokémon puede aprender. Cada movimiento incluye:

- nombre: El nombre del movimiento.
    - tipo: El tipo del movimiento (por ejemplo, "Fuego", "Agua").
    - potencia: La fuerza del movimiento, o su valor de daño (puede ser 0 si es un movimiento de estado).
    - precision: La probabilidad de que el movimiento acierte.
    - categoria: El tipo de movimiento: "Físico", "Especial" o "Estado".

- evoluciones: Un objeto que describe las evoluciones del Pokémon. Contiene:
    - pre_evolucion: El Pokémon del que evoluciona, si existe.
    - evolucion_base: El Pokémon al que puede evolucionar, si existe.

- peso: El peso del Pokémon, medido en kilogramos.

- altura: La altura del Pokémon, medida en metros.

- amistad_base: El nivel inicial de amistad del Pokémon con el entrenador, un valor que puede afectar ciertos aspectos del juego.

- color: El color principal del Pokémon, que generalmente se usa para clasificarlo en la Pokédex por color.

- género: Un objeto que indica la distribución de género del Pokémon:
    - macho: El porcentaje de probabilidades de que el Pokémon sea macho.
    - hembra: El porcentaje de probabilidades de que el Pokémon sea hembra.

- hábitat: El tipo de entorno donde es más probable encontrar al Pokémon (por ejemplo, "Montaña", "Agua Dulce").

- es_legendario: Un valor booleano que indica si el Pokémon es considerado legendario (true) o no (false).

- es_mitico: Un valor booleano que indica si el Pokémon es considerado mítico (true) o no (false).