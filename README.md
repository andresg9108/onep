**Excuses:** ___I apologize for the English used, my language is Spanish.___

# OneP (In a Page) #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Starting.](#Starting "Starting")
4. [Templates management.](#TemplatesManagement "Templates management")

<span id="Introduction"></span>
- Node.js (https://nodejs.org).
- Ruby (https://www.ruby-lang.org or https://rubyinstaller.org).
- XAMPP (https://www.apachefriends.org/es/index.html).
- Execute "gem install sass" on the console of your operating system.

<span id="Starting"></span>
## Starting ##

In principle, don't forget to open the "XAMPP Control Panel" and start the "Apache" service. Now we can clone or download the files of the "onep" project in the "XAMPP" file path, which is "../xampp/htdocs/" and it would remain "../xampp/htdocs/onep". The link to the "onep" project can be found below:

[OneP project.](https://github.com/andresg9108/onep "OneP project")

Now we will go to "../xampp/htdocs/onep" using the console of our operating system and execute the following command, which will load all the dependencies of the "onep" project.

***npm i***

Now we can execute the following command, which listens to our project.

***npm start***

In the development phase, the project must always be listening to changes. With this we can already enter the following URL and see our project for the first time.

**http://localhost/onep/**

Also, it is recommended to add the "Livereload" extension for "Google Chrome" or "Mozilla Firefox". This will instruct these browsers to refresh the page the moment they detect a change, but remember to listen to the project with the "npm start" command and activate "Livereload" in the browser you want.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

With this we can do our first test modifying the following file.

**File: ../xampp/onep/src/template/body.hbs**

~~~
<h2>Hello World!!!</h2>
~~~

If all goes well, you will see the changes in the browser. Each of the most relevant files and folders in the project is explained below with a description.

* "../src/": Contains all the resources of the project.
	- "../src/css/": Contains all the CSS files that SASS generates.
	- "../src/js/": Contains all the JavaScript files for the project.
	- "../src/sass/": Contains all the SASS files of the project.
	- "../src/template/": Contains all the project templates.
* "Gruntfile.js": Stores all grunt settings.
* "index.html": HTML main file.
* "package.json": Stores all Node.js settings.

<span id="TemplatesManagement"></span>
## Templates management ##

We already know that the templates are in the "../src/template/" directory, now we will create two new templates to see how it works, which we will call "theme1.hbs" and "theme2.hbs".

**File: ../src/template/theme1.hbs**

~~~
<h1>This is my theme #1</h1>
~~~

**File: ../src/template/theme2.hbs**

~~~
<h1>This is my theme #2</h1>
~~~
