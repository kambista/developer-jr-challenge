# Developer Jr Challenge

Este repositorio contiene el código fuente del backend y el frontend para el Developer Jr Challenge. Se trata de una aplicación Node.js con Express que proporciona una API para gestionar tareas (todos) en el backend y en el front con react + vite. La aplicación está diseñada para ser ejecutada dentro de un contenedor Docker, lo que facilita el despliegue y la gestión de dependencias.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu máquina:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instrucciones para ejecutar la aplicación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/diegobejardelaguila/developer-jr-challenge.git
```

2. Crea un archivo .env basado en el archivo .env_example:
```bash
cp .env_example .env
```

3. Levanta los servicios utilizando Docker Compose:
```bash
docker-compose up -d
``` 

4. Accede a la API
Una vez que los servicios estén en funcionamiento, podrás acceder a la API en http://localhost:8089. Puedes probar la API utilizando herramientas como Postman o curl.

5. Para visualizar todos los endpoints dirigite a http://localhost:8089/api-docs/#/ (Puedes haces las pruebas que quieras :D)
6. El frontend se ejecuta en el puerto 5173: http://localhost:5173


