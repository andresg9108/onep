"use strict";

var g_sRouteTemplate = 'src/template/';

$(function(){
	var oData = {};
	loadTemplate('header', 'header', oData);
	loadTemplate('body', 'section', oData);
	loadTemplate('footer', 'footer', oData);
});

/*
*/
function loadTemplate(sRouteTemplate, sTag, oData){
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