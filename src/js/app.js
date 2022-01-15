"use strict";

var g_sRouteTemplate = 'src/template/';
var oApp = {};

$(() => {
	var oData = {};
	oApp.loadTemplate('header', '#head', oData);
	oApp.loadTemplate('body', '#body', oData);
	oApp.loadTemplate('footer', '#foot', oData);
});

/*
*/
oApp.loadTemplate = (sRouteTemplate, sTag, oData) => {
	var sRoute = g_sRouteTemplate+sRouteTemplate+'.hbs';
	var sTemplate = Hbs[sRoute](oData);
	var isTemplate = $(sTag).attr('data-template');
	isTemplate = (isTemplate == 'true');
	var sClassCss = $(sTag).attr('data-styles');
	if(isTemplate){
		$(sTag).removeClass();
		$(sTag).addClass(sClassCss);
		$(sTag).html(sTemplate);
	}
}