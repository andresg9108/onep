"use strict";

var oFooter = {};

/*
*/
oFooter.load = () => {
	let oData = {};
	oApp.loadTemplate('components/footer', '#footer', oData);
}