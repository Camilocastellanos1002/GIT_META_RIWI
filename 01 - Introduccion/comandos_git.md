## COMANDOS DE GIT

# comando para ver la version de git
    - git -v
    - git --version

# comandos para configuracion inicial de git

    - git config --global user.name "Your name"
    - git config --global user.email "Your email"

# comando para editar o ver la configuracion de git
    - git config --global --edit   
        (control+x para salir del editor) (..wq para salir de windows)
            (nano para linux, txt para windows)
    - git config --global --list 

# como iniciar git en un directorio
    - git init  

#  ver el estado de los archivos, si no se han guardado los cambios 
        - git status

# comando para listar  las versiones de mi proyecto
    -git log    (muestra autor, id del commit, fecha, hora)
    -git log --online   (muesta solo el id del commit)

# comando para cambiar de version
    - git checkout "id del commit o nombre de la rama"

# comando para volver a la version actual 
    -git checkout master (en linux), en windows no se

# pasos para crear un version de nuestro codigo
    1. agregar todos los archivos al commit
        -git add .   (forma de agregar todos los archivos existentes en la carpeta sin importar la extension)
            (cuando no se encuentran agregados los archivos con color verde y letra U, al ser agregados cambia al estado A)
        -git add *.js (forma de agregar los archivos con extension .js)
        -git add index.js (forma de agregar un archivo en especifico)

    2. tomar foto del codigo (crear una nueva version)
        - git commit -m "Nombre del commit"

# Rama 
    es la forma de la cual todos los participantes pueden modificar un proyecto, es crear diferentes contextos de este sobre el mismo repositorio
        * desarrolla caracteristicas de manera aislada
        * corregir errores
        * independencia
        * falicidad de combinar
        * agilidad
# que es un merge
    proceso de integrar los cambios de una rama (fuente) en otra rama (destino) comando dos historiales de commits diferentes
    "tome los cambios de la rama y los combine con otra de forma automatica"
    se genera la union tanto de los cambios de los archivos como el historial de versiones

# que es un conflicto
    conflicto en git es cuando se han realizado cambios en el mismo segmento de un archivo y luego se intenta fusionar estas ramas con comando merge
    (para decidir cual prevalece sobre cual, es de forma manual)

