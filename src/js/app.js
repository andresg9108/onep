"use strict";

var oApp = {};
var g_sRouteTemplate = 'src/template/';

$(() => {
	oHeader.load();
	oBody.load();
	oFooter.load();
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