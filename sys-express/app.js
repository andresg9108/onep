var oApp = {};

oApp.path = '';
oApp.port = 8080;
oApp.express = require('express');
oApp.inquirer = require('inquirer');
oApp.open = require('open');
oApp.http = require('http');
oApp.app = {};

oApp.setPath = (sPath) => {
	oApp.path = sPath;
}

oApp.run = () => {
	oApp.app = oApp.express();

	oApp.app.use(oApp.express.static(oApp.path));
	
	let oServer = oApp.http.Server(oApp.app);
	oServer.listen(oApp.port, () => {
		let sRoute = `http://localhost:${oApp.port}`;

		console.log(`Port: ${oApp.port}`);
		console.log(`Route: ${sRoute}`);
		console.log('');
		oApp.browser(sRoute);
	});
}

oApp.browser = (sRoute) => {
	oApp.inquirer.prompt([
		{
			type: 'list',
			name: 'option',
			message: '¿Do you want to open the browser?',
			choices: ['Yes', 'No']
		}
	])
	.then(oAnswers => {
		if(oAnswers.option == 'Yes'){
			oApp.open(sRoute);
			console.log('Ok, opening browser...');
		}

		oApp.browser(sRoute);
	});
}

exports.setPath = oApp.setPath;
exports.run = oApp.run;