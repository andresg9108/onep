# OneP (En una página) #

## Contenido ##

1. Introducción.
2. Dependencias.
3. Comenzando.
4. Uso de componentes.
5. Producción.

## Introducción ##

Este proyecto busca brindar una alternativa a la creación de aplicaciones de una sola página (SPA).

## Dependencias ##

* Node.js (https://nodejs.org).
  - Ejecuta "node --version" en la consola de su sistema operativo para ver si ya está instalado.
* CLI de Npm (https://docs.npmjs.com/cli).
  - En Windows viene con el instalador de Node.js, en los sistemas operativos basados en Linux deberá instalarlo.
  - Ejecuta "npm --version" en la consola de su sistema operativo para ver si ya está instalado.
* Sass (https://sass-lang.com).
  - Ejecuta "npm i sass -g" en la consola de su sistema operativo para instalarlo.
  - Ejecuta "sass --version" en la consola de su sistema operativo para ver si ya está instalado.
* CLI de OneP.
  - Ejecuta "npm i onep-cli -g".
  - En sistemas operativos basados en Linux incluya "--unsafe-perm". El comando quedaría de la siguiente forma "npm i onep-cli -g --unsafe-perm".
  - Ejecuta "onep-cli --version" en la consola de su sistema operativo para ver si ya está instalado.

## Comenzando ##

Usando la consola de nuestro sistema operativo accederemos al directorio que queramos para nuestro proyecto, luego ejecutaremos el siguiente comando que cargará todos los archivos del proyecto "onep".

~~~
onep-cli install
~~~

Ahora podemos ejecutar el siguiente comando que hace que nuestro proyecto esté al tanto de los cambios para ejecutar automáticamente los comandos correspondientes.

~~~
onep-cli start
~~~

En la fase de desarrollo, el proyecto siempre debe estar atento a los cambios y para salir solo hay que usar Ctrl + C. Con esto podemos ingresar a la siguiente URL y ver nuestro proyecto por primera vez.

**http://localhost:8084**

También se recomienda agregar la extensión "Livereload" para "Google Chrome" o "Mozilla Firefox". Esto les indicará a estos navegadores que actualicen la página tan pronto como detecten un cambio, pero recuerde siempre ejecutar el comando "onep-cli start", evitar que el navegador almacene en caché y habilitar "Livereload" en él.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

Para actualizar "onep" en nuestro proyecto y sus dependencias podemos usar el siguiente comando.

~~~
onep-cli update
~~~

Con esto podemos hacer nuestra primera prueba modificando el archivo "./src/template/components/body.hbs" agregándole un "Hello World". La modificación de este archivo se vería así.

**Archivo: ./src/template/components/body.hbs**

```hbs
<h2>¡Hello World!</h2>
```

Si todo va bien verá los cambios en el navegador. Cada uno de los archivos y carpetas más relevantes del proyecto se explica a continuación con una descripción.

* "./grunt/": Contiene todas las rutas que usa Grunt para funcionar.
* "./src/": Contiene todos los recursos del proyecto.
  - "./src/css/": Contiene todos los archivos CSS que genera SASS.
  - "./src/js/": Aquí podemos administrar nuestros archivos JavaScript.
  - "./src/sass/": Aquí podemos administrar nuestros archivos SASS.
  - "./src/template/": Aquí podemos gestionar nuestros archivos de Handlebars.
* "./Gruntfile.js": Almacena todas las configuraciones de grunt.
* "./index.html": Archivo HTML principal.
* "./package.json": Almacena todas las configuraciones de Node.js

## Uso de componentes ##

Los componentes constan de tres archivos, un archivo ".hbs" que contendrá etiquetas HTML y sintaxis de Handlebars, un archivo ".js" que contendrá código JavaScript y un archivo ".sass" que contendrá instrucciones CSS con sintaxis SASS. Podemos ver esto mirando el componente "body" que se deriva en los siguientes archivos.

**Archivo #1: ./src/template/components/body.hbs**

**Archivo #2: ./src/js/components/body.js**

**Archivo #3: ./src/sass/components/_body.sass**

Ahora vamos a crear un nuevo componente llamado "contact". Comenzaremos a crear el archivo "./src/template/components/contact.hbs".

**Archivo: ./src/template/components/contact.hbs**

```hbs
<h2>Contact</h2>
```

**Advertencia: Se recomienda reiniciar los procesos en la consola usando Ctrl + C y nuevamente "onep-cli start" para que reconozca los archivos nuevos. Si es necesario, hay que volver a guardar los cambios realizados para que los archivos de producción se actualicen. También es importante mientras estamos en la fase de desarrollo, verificar que nuestro navegador no esté usando el caché.**

Ahora crearemos el archivo "./src/sass/components/\_contact.sass" donde agregaremos los estilos del componente. Se recomienda que los archivos ".sass" para componentes comiencen con el carácter "\_".

**Archivo: ./src/sass/components/\_contact.sass**

```sass
#contact
  color: black
  background-color: orange
```

Ahora podemos agregar nuestro nuevo archivo de estilos al archivo "./src/sass/main.sass" de la siguiente manera.

**Archivo: ./src/sass/main.sass**

```sass
@import "components/header"
@import "components/body"
@import "components/footer"

@import "components/contact"
```

También crearemos el archivo "./src/js/components/contact.js" que usaremos para cargar nuestro componente en la vista.

**Archivo: ./src/js/components/contact.js**

```js
"use strict";

var oContact = {};

/*
*/
oContact.load = () => {
  let oData = {};
  oApp.loadTemplate('components/contact', '#contact', oData);
}
```

Con esto ya tenemos todos los archivos que componen nuestro nuevo componente y la función "oContact.load()" es la que nos ayudará a cargar el componente en la vista.

**Advertencia: Se recomienda reiniciar los procesos en la consola usando Ctrl + C y nuevamente "onep-cli start" para que reconozca los archivos nuevos. Si es necesario, hay que volver a guardar los cambios realizados para que los archivos de producción se actualicen. También es importante mientras estamos en la fase de desarrollo, verificar que nuestro navegador no esté usando el caché.**

Para cargar nuestro componente a la vista comenzaremos modificando el archivo "./index.html" agregando las etiquetas HTML donde se cargará nuestro componente, lo haremos de la siguiente manera.

**Archivo: ./index.html**

```html
...
<body>
  <main>
    <header id="header" data-template="true" data-styles="">
      loaded...
    </header>
    <section id="body" data-template="true" data-styles="">
      loaded...
    </section>

    <div id="contact" data-template="true" data-styles="">
      loaded...
    </div>

    <footer id="footer" data-template="true" data-styles="">
      loaded...
    </footer>
  </main>
</body>
...
```

Finalmente agregaremos la instrucción para cargar el componente modificando el archivo "./src/js/app.js" de la siguiente manera.

**Archivo: ./src/js/app.js**

```js
...
document.addEventListener('DOMContentLoaded', (e) => {;
  oHeader.load();
  oBody.load();
  oFooter.load();

  oContact.load();
});
...
```

Si todo va bien podrás ver los cambios en el navegador.

## Producción ##

Para obtener los archivos de producción de su proyecto, siga los pasos a continuación.

1. Recuerda hacer una copia de los archivos de desarrollo para seguir los siguientes pasos y obtener los archivos de producción.
2. Comenzaremos instalando las dependencias usando el siguiente comando en la raíz del proyecto.

~~~
npm i
~~~

3. Modificaremos los archivos javascript u otros que necesiten hacer algún cambio para producción.
4. Ahora ejecutaremos el siguiente comando que se encargará de preparar los archivos para la producción.

~~~
npm run prepare
~~~

5. Borramos el directorio "node_modules" y ejecutamos el siguiente comando que cargará este mismo directorio pero solo con las dependencias de producción.

~~~
npm i --production --ignore-scripts
~~~

6. En la raíz del proyecto eliminaremos todos los archivos excepto "index.html" y mantendremos las siguientes carpetas.

- node_modules/
- src/

7. También eliminaremos "src/sass" y dentro de "src/js" y "src/template" solo quedará la carpeta "dist".