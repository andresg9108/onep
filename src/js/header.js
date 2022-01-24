"use strict";

var oHeader = {};

/*
*/
oHeader.load = () => {
	let oData = {};
	oApp.loadTemplate('header', '#header', oData);
}