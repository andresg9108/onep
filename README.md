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

To update "onep" in our project and its dependencies we can use the following command.

~~~
onep-cli update
~~~

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

The components consist of three files, a ".hbs" file that will contain HTML tags and Handlebars syntax, a ".js" file that will contain JavaScript code with JQuery syntax, and a ".sass" file that will contain CSS instructions with SASS syntax. We can see this by looking at the "body" component that is derived in the following files.

**File #1: ./src/template/components/body.hbs**

**File #2: ./src/js/components/body.js**

**File #3: ./src/sass/components/_body.sass**

Now we are going to create a new component called "contact", we will start to create the file "./src/template/components/contact.hbs".

**File: ./src/template/components/contact.hbs**

```hbs
<h2>Contact</h2>
```

***Warning: It is recommended to restart the processes in the console using Ctrl + C and again "onep-cli start", this so that they recognize the changes in the file "Gruntfile.js" and the new files. If it is necessary to re-save the changes made for the production files to be updated. It is also important while we are in the development phase to verify that our browser is not using the cache, as this will prevent the page from updating correctly.***

Now we will create the file "./src/sass/components/\_contact.sass" where we will add the styles of the component. It is recommended that ".sass" files for components start with the "\_" character.

**File: ./src/sass/components/\_contact.sass**

```sass
#contact
  color: black
  background-color: orange
```

We can now add our new styles file to the "./src/sass/main.sass" file as follows.

**File: ./src/sass/main.sass**

```sass
*
  margin: 0
  padding: 0

@import "components/header"
@import "components/body"
@import "components/footer"

@import "components/contact"
```

We will also create the "./src/js/components/contact.js" file that will be used to load our component into the view.

**File: ./src/js/components/contact.js**

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

With this we already have all the files that make up our new component and the "oContact.load()" function is the one that will help us load the component in the view.

***Warning: It is recommended to restart the processes in the console using Ctrl + C and again "onep-cli start", this so that they recognize the changes in the file "Gruntfile.js" and the new files. If it is necessary to re-save the changes made for the production files to be updated. It is also important while we are in the development phase to verify that our browser is not using the cache, as this will prevent the page from updating correctly.***

To load our component to the view we will start by modifying the "./index.html" file adding the HTML tags where our component will be loaded, we will do it in the following way.

**File: ./index.html**

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

Finally we will add the instruction to load the component by modifying the "./src/js/app.js" file as follows.

**File: ./src/js/app.js**

```js
...
$(() => {
  oHeader.load();
  oBody.load();
  oFooter.load();

  oContact.load();
});
...
```

If all goes well you will be able to see the changes in the browser.

## Production <span name="Production"></span> ##

To obtain the production files for your project, follow the steps below.

1. Remember to make a copy of the development files to follow the next steps and get the production files.

2. We will start by installing the dependencies using the following command in the root of the project.

~~~
npm i
~~~

3. We will modify the javascript files or others that need to make a change for production.

4. Now we will execute the following command that will be in charge of preparing the files for production.

~~~
npm run prepare
~~~

5. We delete the directory "node_modules" and execute the following command that will load this same directory but only with the production dependencies. 

~~~
npm i --production --ignore-scripts
~~~

6. In the root of the project we will delete all the files except for "index.html" and we will keep the following folders.

- node_modules/
- src/

7. We will also delete "src/sass" and within "src/js" and "src/template" only the "dist" folder will remain.