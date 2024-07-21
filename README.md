# TP Construcción de Interfaces de Usuario

## Integrantes

Gerace Cesar Emiliano

Mai Melanie

Pisoni Denise Ailen

## Instrucciones de uso

Primero, posicionarse sobre la carpeta <react> y correr el siguiente comando´para instalar la dependencia necesaria

### `yarn`

En la carpeta principal del proyecto, puedes correr el siguiente comando para iniciar la aplicación

### `npm start`

## Formación del proyecto

El proyecto está constituido por un archivo principal llamado index.js donde se inyecta el react al index.html.

El index.html contiene los js y css principales a utilizar en toda la web.

El archivo App.js inyecta dentro del index.js y se encarga de agrupar todas las secciones que conforman el sitio.

El sitio está formado por:

    * Header.js: Contiene el encabezado y menú de navegación de la web
    * Home.js: Tiene el slider principal 
    * About.js: Muestra la historia de la cafeteria
    * Menu.js: Explica brevemente el menú, permite al usuario agregar al carrito y calcular el total del mismo
        ** Menu.css: Tiene los estilos del menú
        ** MenuItem.js: Contenie la manera de mostrar cada item dentro del menú
    * Blog.js: Un blog con imágenes y enlaces a youtube
    * Gallery.js: Mediante una API levantamos imágenes externas para mostrar de la cafetería.
    * ContactInfo.js: Permite tanto visualizar información de contacto importante como también ver la locación e incluso realizar una reserva.
    * Footer.js: Muestra un breve resumen de preguntas frecuentes, los servicios y los integrantes del trabajo práctico.
    