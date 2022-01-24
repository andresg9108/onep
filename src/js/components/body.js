"use strict";

var oBody = {};

/*
*/
oBody.load = () => {
	let oData = {};
	oApp.loadTemplate('components/body', '#body', oData);
}