**Excuses:** ___I apologize for the English used, my language is Spanish.___

# OneP (In a page) #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Getting started.](#GettingStarted "Getting started")
4. [Using components.](#UsingComponents "Using components")
5. [Production.](#Production "Production")

## Introduction <span name="Introduction"></span> ##

This project seeks to provide an alternative to creating Single Page Application Sites (SPA).

## Dependencies <span name="Dependencies"></span> ##

* Node.js (https://nodejs.org).
  - Run "node -v" in your OS console to see if it is already installed.
* Npm CLI (https://docs.npmjs.com/cli).
  - On Windows it comes with the Node.js installer, on Linux based OSs you will need to install it.
  - Run "npm -v" in your OS console to see if it is already installed.
* Sass (https://sass-lang.com).
  - Run "npm i sass -g" in your OS console to install it.
  - Run "sass --version" in your OS console to see if it is already installed.
* OneP CLI.
  - Run "npm i onep-cli -g".
  - On Linux based OSs, include "--unsafe-perm", then the command would be "npm i onep-cli -g --unsafe-perm".
  - Run "onep-cli -v" in your OS console to see if it is already installed.

## Getting started <span name="GettingStarted"></span> ##

Using the console of our operating system we will access the directory that we want for our project, then we will execute the following command that will load all the files of the "onep" project.

~~~
onep-cli install
~~~

Now we can execute the following command that makes our project be aware of the changes to automatically execute the corresponding commands.

~~~
onep-cli start
~~~

In the development phase, the project must always be attentive to changes and to exit you just have to use Ctrl + C. With this we can enter the following URL and see our project for the first time.

**http://localhost:8084**

It is also recommended to add the extension "Livereload" for "Google Chrome" or "Mozilla Firefox". This will tell these browsers to refresh the page the moment they detect a change, but always remember to run the "onep-cli start" command, prevent the browser from caching, and enable "Livereload" on it.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

With this we can make our first test modifying the file "./src/template/components/body.hbs" adding a "Hello World" to it. Modifying this file would look like this.

**File: ./src/template/components/body.hbs**

```hbs
<h2>Hello World!!!</h2>
```

If all goes well, you will see the changes in the browser. Each of the most relevant files and folders in the project is explained below with a description.

* "./grunt/": It contains all the routes that Grunt uses to function.
* "./src/": It contains all the resources of the project.
	- "./src/css/": It contains all the CSS files that SASS generates.
	- "./src/js/": Here we can manage our javascript files.
	- "./src/sass/": Here we can manage our sass files.
	- "./src/template/": Here we can manage our handlebars files.
* "./Gruntfile.js": Stores all grunt settings.
* "./index.html": Main HTML file.
* "./package.json": Stores all Node.js settings.

## Using components <span name="UsingComponents"></span> ##

***THE DOCUMENTATION IS BEING REVIEWED FROM HERE***

## Production <span name="Production"></span> ##