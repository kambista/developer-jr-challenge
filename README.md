# Developer Jr Challenge

Este repositorio contiene el código fuente del backend y el frontend para el Developer Jr Challenge. Se trata de una aplicación Node.js con Express que proporciona una API para gestionar tareas (todos) en el backend y en el front con react + vite. La aplicación está diseñada para ser ejecutada dentro de un contenedor Docker, lo que facilita el despliegue y la gestión de dependencias.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu máquina:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instrucciones para ejecutar la aplicación TodoList
![image](https://github.com/diegobejardelaguila/developer-jr-challenge/assets/47013845/549fd21b-c123-4601-b5aa-5dea4d7fe751)


1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/diegobejardelaguila/developer-jr-challenge.git
```

2. Crea un archivo .env basado en el archivo .env_example, tambien para backend y front:
```bash
cp .env_example .env
```
```bash
 cp backend/.env_example backend/.env
```
```bash
 cp frontend/.env_example frontend/.env
```

3. Levanta los servicios utilizando Docker Compose:
```bash
docker-compose up -d
``` 

4. Accede a la API
Una vez que los servicios estén en funcionamiento, podrás acceder a la API en http://localhost:8089. Puedes probar la API utilizando herramientas como Postman o curl.

5. Para visualizar todos los endpoints dirigite a http://localhost:8089/api-docs/#/ (Puedes haces las pruebas que quieras :D)
![image](https://github.com/diegobejardelaguila/developer-jr-challenge/assets/47013845/91f60092-6359-47b5-8670-7b70471421aa)

6. El frontend se ejecuta en el puerto 5173: http://localhost:5173
![image](https://github.com/diegobejardelaguila/developer-jr-challenge/assets/47013845/f3804ddc-178e-4563-b242-35c058fe03cd)

## Funcionamiento

TodoList te permite visualizar las tareas que tienes pendientes, como las completas, ademas brindar la opcion de eliminar las tareas que ya culminaste y crear nuevas. Asi como indicar cuales estan completas.

1. Crear
  - Se da click al boton de crear:
  ![image](https://github.com/diegobejardelaguila/developer-jr-challenge/assets/47013845/74c8f59e-91c9-4b9b-a067-8289a6e4461f)
  - Llenamos los datos del formulario:
![image](https://github.com/diegobejardelaguila/developer-jr-challenge/assets/47013845/00f84334-b63f-42ea-bbfb-0cbc140231ef)

  - Si todo es correcto, se visualiza la nueva tarea y una notificacion:
![image](https://github.com/diegobejardelaguila/developer-jr-challenge/assets/47013845/aa800eba-ffbb-4160-9438-022f537616e1)

2. Completar
  - Se da click al boton completar:
  ![image](https://github.com/diegobejardelaguila/developer-jr-challenge/assets/47013845/643f6ead-8a7b-4482-b113-a0ccde9cdbb7)
  - Si todo es correcto la tarea se pasa con exito a la lista de completadas
3. Eliminar
  - Se da click a eliminar:
    ![image](https://github.com/diegobejardelaguila/developer-jr-challenge/assets/47013845/ec615cb9-2a1f-4f01-98ea-4f324639f294)
  - Si todo es correcto la tarea se elimina y se actualiza la lista.


## Problema con git y docker
```bash
  frontend-task  | /usr/local/bin/docker-entrypoint.sh: exec: line 11: ./wait-for.sh: not found
```
  - Git con windows escapa los espacio modificando los archivos e imposibilitando que se creen correctamente en docker(mas informacion: https://stackoverflow.com/a/40537078):
  - Ejecuta los siguientes comandos para que puedas copiar los archivos necesarios por algun contenedor de manera correcta.
```bash
git config --global core.autocrlf input
```
```bash
git rm --cached -r .

```
```bash
git reset --hard
```
