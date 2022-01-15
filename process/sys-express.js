var oApp = {};

oApp.sysExpressApp = require('../sys-express/app.js');

process.on('message', (msg) => {
	if(msg.sysexpress.activate){
		oApp.sysExpressApp.setPath(msg.sysexpress.path);
		oApp.sysExpressApp.setPort(msg.sysexpress.port);
		oApp.sysExpressApp.run();
	}
});