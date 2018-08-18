"use strict";

$(function(){
	let template = Handlebars.templates['src/template/header.hbs'];
	console.log(template);
});

/*
*/
/*function loadTemplate(sNameTemplate, sTag, oData){
	let template = Handlebars.templates[sNameTemplate];
	let isTemplate = $(sTag).attr('data-template');
	if(isTemplate){
		$(sTag).html(template(oData));
	}
}*/