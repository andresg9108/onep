"use strict";

var g_sRouteTemplate = 'src/template/';
var oApp = {};

document.addEventListener('DOMContentLoaded', (e) => {
    oHeader.load();
	oBody.load();
    oFooter.load();
});

/*
*/
oApp.loadTemplate = (sRouteTemplate, sTag, oData) => {
    new Promise((resolve, reject) => {
        let oElement = document.querySelector(sTag);

        if(oElement !== null){
            let sRoute = `${g_sRouteTemplate}${sRouteTemplate}.hbs`
            let sTemplate = Hbs[sRoute](oData);
            let isTemplate = (oElement.getAttribute('data-template') === 'true');
            let sClassCss = oElement.getAttribute('data-styles');

            sClassCss = (sClassCss !== null) ? sClassCss : '';

            if(isTemplate){
                oElement.setAttribute('class', '');
                oElement.setAttribute('class', sClassCss);
                oElement.innerHTML = sTemplate;
            }
        }

        return resolve();
    });
}