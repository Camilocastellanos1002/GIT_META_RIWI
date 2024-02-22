# Comandos para crear conexion con un repositorio en Git Hub
    - git remote add nombre_de_conexion https://github.com/Camilocastellanos1002/GIT_META.git
        ejm:  git remote add origin https://github.com/Camilocastellanos1002/GIT_META.git
    (para esto ya se debe tener creado la cuenta y y repositorio en git hub)

# Comando para ver listado de conexiones remotas
    - git remote -v
    (deben aparecer dos parametros "fetch" y "push")

# Comando para eliminar una conexion remota 
    - git remote remove nombre_conexion

# Nota
    * antes de generar un push al remositorio de la nube se debe realizar un pull 
    para traer los archivos existentes en este
    * cuando se hace la conexion por primera vez se debe realizar un fetch inicialmente

# Comando para Obtener archivos del repositorio de la conexion remota
    - git pull nombre_conexion rama_del_reposiotorio

# Comando para realizar un fetch con el repositiorio remoto
    -git fetch nombre_conexion nombre_rama_del_repositorio
