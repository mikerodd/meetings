/*
 * Rendu d'un template mustache à partir d'un id contenant le template
 * tTag : id de l'emplacement contenant le template
 * mydata : data à templater
 * wRender : id de l'emplacement où rendre le template
 * rWithin : doit-on faire un enhanceWithin ?
*/

function renderTemplate(tTag, mydata,wRender,rWithin) {
    var template = $(tTag).html();
    Mustache.parse(template); // optional, speeds up future uses
    var rendered = Mustache.render(template,mydata);
    $(wRender).html(rendered);
    if (rWithin) $(wRender).enhanceWithin();
}




$(document).on('pagebeforecreate', '#home', function () {
	
	
	
	 $.getJSON("js/data.json")
     .done(function (data) {
    		var template = $('#question-temps-templ').html();
    	    Mustache.parse(template); // optional, speeds up future uses
    	    var rendered = Mustache.render(template, data);
    		$('questions-temps-render').html(rendered)
    	    
     })
     .fail(function () {
         console.log("error json");
     });
});	
	

