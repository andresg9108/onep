var oApp = {};

oApp.sysExpressApp = require('./sys-express/app.js');

oApp.sysExpressApp.setPath(__dirname);
oApp.sysExpressApp.setPort(8084);
oApp.sysExpressApp.run();