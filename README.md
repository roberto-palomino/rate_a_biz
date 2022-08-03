# Rate a biz App

## Descripción:

Portal de búsqueda de empresas que muestra información acerca de las mismas, basada en las valoraciones aportadas por empleados anteriores registrados en la web, para que cualquier usuario pueda obtener información veraz a la hora de buscar empresas donde trabajar y poder encontrarla facilmente.

## Desarrollado con:

- HTML
- CSS
- JAVASCRIPT
- NODE.JS
- REACT

## Autores:

- Martín García García: [github](https://github.com/AgoladaMartin)
- Cristina López Rey: [github](https://github.com/krizs981)
- Roberto Palomino de la Cruz: [github](https://github.com/roberto-palomino)

## Prerrequisitos:

Para poder usar esta aplicación y probar todas sus funcionalidades necesitarás tener instalados las siguientes herramientas:

- NodeJS y npm. Para comprobrar si dispones de ellos ejecuta en una terminal:

```bash
node --version
```

Consulta [aquí](https://nodejs.org/es/) cómo instalarlo

- MySQL Server. Si tienes Ubuntu desde la terminal lanza la siguiente línea de código:

```bash
sudo apt-get install mysql-server
```

Para más información sobre cómo descargarlo puedes acceder a [esta página](https://dev.mysql.com/downloads/mysql/).

- MySQL Workbench. Puedes obtenerlo desde [esta página](https://dev.mysql.com/downloads/workbench/) y en Ubuntu desde la terminal de comandos con la siguiente línea de código:

```bash
sudo snap install mysql-workbench-community
```

## Instrucciones de inicio:

1. Para arrancar la aplicación necesitarás clonar tanto el [repositorio de back](https://github.com/AgoladaMartin/Rate-a-Biz-Back) como este repositorio de front.

2. Accede a cada repositorio desde la terminal y una vez dentro, instala las dependencias para cada uno de ellos con el comando:

```bash
   npm install
```

3. En el repositorio de backend, renombra el archivo .env.example a .env y complétalo con tus datos.

4. Crea una base de datos nueva en SQL con el nombre "rate_a_biz" (sin comillas), con el comando:

```sql
CREATE DATABASE rate_a_biz
```

5. Necesitaremos crear las columnas para la base de datos, para ello, introduce en la terminal del backend el comando:

```bash
 npm run initDB
```

6. Para inicializar la base de datos creada, lanza en esta misma terminal del backend el comando:

```bash
 npm run dev
```

7. Una vez lanzado el servidor del backend, accede a la terminal del repositorio del frontend e inicializa la app y ejecuta el comando:

```bash
 npm start
```

Se abrirá una nueva ventana en tu navegador con la aplicación funcionando.
