"use strict";

var oHeader = {};

/*
*/
oHeader.load = () => {
	let oData = {};
	oApp.loadTemplate('components/header', '#header', oData);
}