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

- Martín García García (https://github.com/AgoladaMartin)
- Cristina López Rey (https://github.com/krizs981)
- Roberto Palomino de la Cruz (https://github.com/roberto-palomino)

## Prerrequisitos:

Para poder usar esta aplicación y probar todas sus funcionalidades necesitarás tener instalados las siguientes herramientas:

- Nodejs y npm. Para comprobrar si dispones de ellos ejecuta en una terminal:

```bash
node --version
```

Consulta [aquí](https://nodejs.org/es/) cómo instalarlo

- MySQL Server. Puedes obtenerlo desde [esta página](https://dev.mysql.com/downloads/mysql/) y en Ubuntu desde la terminal de comandos con la siguiente línea de código:

```bash
sudo apt-get install mysql-server
```

- MySQL Workbench. Puedes obtenerlo desde [esta página](https://dev.mysql.com/downloads/workbench/) y en Ubuntu desde la terminal de comandos con la siguiente línea de código:

```bash
sudo snap install mysql-workbench-community
```

## Instrucciones de inicio:

1. Para arrancar la aplicación necesitarás clonar tanto el [repositorio de back](https://github.com/AgoladaMartin/Rate-a-Biz-Back) como este repositorio de front.

2. Abrir cada carpeta con Visual Studio Code o acceder al contenido de cada una de ellas. Una vez dentro clickar con el botón
   derecho del ratón y seleccionar: 'Abrir en un terminal'. Tras iniciar la terminal de comandos introducir:

   ```bash
   code .
   ```

3. Una vez abierto Visual Code, escribir en la terminal del programa para cada repositorio:

```bash
   npm install
```

4. Renombrar el archivo .env.example del backend a .env y completarlo con los datos del usuario.

5. Crear una base de datos nueva en SQL con el nombre "rate_a_biz" (sin comillas), con el comando:

```sql
CREATE DATABASE rate_a_biz
```

6. Crear las columnas para la base de datos, introduciendo en la terminal de Visual Studio de backend el comando:

```bash
 npm run initDB
```

7. Inicializar la base de datos en la terminal de Visual Studio de backend con el comando:

```bash
 npm run dev
```

8. Inicializar la app introduciendo en la terminal de Visual Studio correspondiente a frontend el comando:

```bash
 npm start
```
