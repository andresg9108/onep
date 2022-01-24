**Excuses:** ___I apologize for the English used, my language is Spanish.___

# OneP (In a page) #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Getting started.](#GettingStarted "Getting started")
4. [Using Templates.](#UsingTemplates "Using Templates")
5. [Using JavaScript.](#UsingJavaScript "Using JavaScript")
6. [Using SASS.](#UsingSASS "Using SASS")
7. [Production.](#Production "Production")

## Introduction <span name="Introduction"></span> ##

This project seeks to provide an alternative to creating Single Page Application Sites (SPA).

## Dependencies <span name="Dependencies"></span> ##

- Node.js (https://nodejs.org).
- Ruby (https://www.ruby-lang.org or https://rubyinstaller.org).
- Execute "gem install sass" on the console of your operating system.
- Execute "npm i onep-cli -g" on the console of your operating system.

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

With this we can make our first test modifying the file "./src/template/body.hbs" adding a "Hello World" to it. Modifying this file would look like this.

**File: ./src/template/body.hbs**

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

***THE DOCUMENTATION IS BEING REVIEWED FROM HERE***












## Using Templates <span name="UsingTemplates"></span> ##

We already know that the templates are in the "../src/template/" directory, now we will create two new templates to see how it works, which we will call "theme1.hbs" and "theme2.hbs".

**File: ../src/template/theme1.hbs**

~~~
<h1>This is my theme #1</h1>
~~~

**File: ../src/template/theme2.hbs**

~~~
<h1>This is my theme #2 [{{hello}}]</h1>
~~~

Now we will modify the "body" of the file "../index.html", adding two type labels "section" called "theme1" and "theme2", as shown below.

**File: ../index.html**

~~~
...
<body>
	<main>
	  <header id="head" data-template="true" data-styles="">
	    loaded...
	  </header>
	  <section id="body" data-template="true" data-styles="">
	    loaded...
	  </section>

	  <section id="theme1" data-template="true" data-styles="">
	    loaded...
	  </section>
	  <section id="theme2" data-template="true" data-styles="">
	    loaded...
	  </section>

	  <footer id="foot" data-template="true" data-styles="">
	    loaded...
	  </footer>
	</main>
</body>
...
~~~

Now we will modify the file "../src/js/app.js", adding the lines that load the two new templates, as follows.

**File: ../src/js/app.js**

~~~
...
$(function(){
	var oData = {};
	oApp.loadTemplate('header', '#head', oData);
	oApp.loadTemplate('body', '#body', oData);
	oApp.loadTemplate('footer', '#foot', oData);

	oApp.loadTemplate('theme1', '#theme1', oData);
	oData = {
		'hello': 'Hello World'
	};
	oApp.loadTemplate('theme2', '#theme2', oData);
});
...
~~~

See how the "oApp.loadTemplate(parameter1, parameter2, parameter3)" function is used to add new templates, where the first parameter is the name of the template, the second parameter is the ID where the template is loaded and the third parameter is the data that is send the template.

Note: "grunt" may have problems loading new files, so it is recommended to stop the console using Ctrl + C, run "npm start" again and try to save the changes again.

## Using JavaScript <span name="UsingJavaScript"></span> ##

We start creating a file called "example.js" in the path "../src/js/", in which we will add the following lines.

**File: ../src/js/example.js**

~~~
"use strict";

$(function(){
	var hello = "Hello World!!!"

	console.log(hello);
});
~~~

If you go to the browser again and open its console, you will see the changes.

Note: "grunt" may have problems loading new files, so it is recommended to stop the console using Ctrl + C, run "npm start" again and try to save the changes again.




## Using SASS <span name="UsingSASS"></span> ##

We start creating a file called "example.sass" in the path "../src/sass/", in which we will add the following lines.

**File: ../src/sass/_example.sass**

~~~
$sBackgroundColor: #5555ff
$sFontColor: #ffffff

main
	background-color: $sBackgroundColor
	color: $sFontColor
~~~

Now we will modify the file "../src/sass/main.sass", as follows.

**File: ../src/sass/main.sass**

~~~
@import 'example'

*
	margin: 0
	padding: 0
~~~

See how we use the "@import 'example'" line, which adds our new file to the main SASS file (main.sass). If all goes well, you will see the changes in the browser.

Note: "grunt" may have problems loading new files, so it is recommended to stop the console using Ctrl + C, run "npm start" again and try to save the changes again.




## Production <span name="Production"></span> ##