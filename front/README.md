# Rate a biz App

## Descripción:

Portal de búsqueda de empresas que muestra información acerca de las mismas, basada en las valoraciones aportadas por empleados anteriores registrados en la web, para que cualquier usuario pueda obtener información veraz a la hora de buscar empresas donde trabajar y poder encontrarla facilmente.

## Construido con:

- HTML
- CSS
- JAVASCRIPT
- NODE.JS
- REACT

## Autores:

- Roberto
- Martín
- Cristina

## Prerrequisitos

Para poder usar esta aplicación y probar todas sus funcionalidades necesitarás tener instalados las siguientes herramientas:

- Nodejs y npm. Para comprobrar si dispones de ellos ejecuta en una terminal:

```bash
node --version
```

Consulta [aquí](https://nodejs.org/es/) cómo instalarlo

- MySQL. Puedes obtenerlo desde [esta página]()

## Instrucciones de inicio:

1. Para arrancar la aplicación necesitarás clonar tanto el [repositorio de back](https://github.com/AgoladaMartin/Rate-a-Biz-Back) como este repositorio de front.

2. Abrir cada carpeta con Visual Studio Code o acceder al contenido de cada una de ellas y allí clickar con botón
   derecho y seleccionar: 'Abrir en un terminal'. Tras iniciar la terminal de comandos introducir: code .
3. Una vez abierto Visual Code, escribir en la terminal del programa: npm install (En back y en front)
4. Crear una base de datos nueva en SQL con el nombre "rate_a_biz" (sin comillas), con el comando:

```sql
CREATE DATABASE rate_a_biz
```

5. Renombrar el archivo .env.example del backend a .env y completarlo con los datos del usuario.
6. Crear las columnas para la base de datos, introduciendo en la terminal de Visual Studio de backend el comando: npm run initDB
7. Inicializar la base de datos con el comando: npm run dev en la terminal de Visual Studio correspondiente a backend
8. Inicializar frontend introduciendo el comando: npm start en la terminal de Visual Studio correspondiente a frontend
