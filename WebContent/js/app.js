/*
 * Rendu d'un template mustache à partir d'un id contenant le template
 * tTag : id de l'emplacement contenant le template
 * mydata : data à templater
 * wRender : id de l'emplacement où rendre le template
 * rWithin : doit-on faire un enhanceWithin ?
*/


var nbQuestions = 0;
var total = 0;



$(document).on('pagebeforeshow', '#home', function () {
	
	
	
	 $.getJSON("js/data.json")
     .done(function (data) {
    		var topicTempl= $('#topic-templ').html();
    		//var questionTempl= $('#question-templ').html();
    		
    		
    	    Mustache.parse(topicTempl); // optional, speeds up future uses
    	    //
    	    var rendered = Mustache.render(topicTempl,data);
    	    $('#questions-temps-render').html(rendered)
        	$('#questions-temps-render').enhanceWithin();
    	    
    	    $.each(data.topics, function(index,value) {
    	    	nbQuestions += value.questions.length;
    	    });

    	    console.log("on a " + nbQuestions + " questions.")
    	    	
    		
    	    
     })
     .fail(function () {
         console.log("error json");
     });
});	
	
$(document).on('change','.thiscount', function(event,date) {
	   console.log("un changement!");
	   if (event.target.value == "on") {
		   	total += 1
	   } else {
		   	total -= 1
	   }
	   $("#mypercent").html(Math.round(total*100/nbQuestions));
	   //$("#mypercent").refresh();
		   
	   
	});

