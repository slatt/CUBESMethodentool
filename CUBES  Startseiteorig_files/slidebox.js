$(document).ready(function () {

$('#Contentframe .mix .dropwrapper').click(function() {
        $(this).parent('#Contentframe .mix').children('#Contentframe .mix .extendedinfo').slideToggle("slow");
        $(this).children("div").toggleClass("drophandlera drophandlerb");
                                                                                   
        /*({"background": "url() no-repeat", "background-color": "#822269", "height":"595px"});*/
    });
    
   $('#Contentframe .mix .extendedinfo .uphandler').click(function() {
        $(this).parent("div").parent("div").slideToggle("slow");             
        $("#Contentframe .mix .dropwrapper").children("div").attr("class", "drophandlera");
        toggleClass("drophandlera drophandlerb");
    });
    
    });
    