# comandos de git

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

# pasos para crear un version de nuestro codigo
    1. agregar todos los archivos al commit
        -git add .   (forma de agregar todos los archivos existentes en la carpeta sin importar la extension)
            (cuando no se encuentran agregados los archivos con color verde y letra U, al ser agregados cambia al estado A)
        -git add *.js (forma de agregar los archivos con extension .js)
        -git add index.js (forma de agregar un archivo en especifico)
