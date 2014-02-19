$(document).ready(function () {


    $('#Contentframe').mixitup({
        layoutMode: 'list',
        effects: ['fade','rotateX'],
    });

    var $filters = $('#Filters').find('li'),
        dimensions = {
            experte: 'all',
            branche: 'all',
            kosten: 'all',
            projektphase: 'all',
            aufwand: 'all'
        };


    $filters.on('click', function () {
        var $t = $(this),
            dimension = $t.attr('data-dimension'),
            filter = $t.attr('data-filter'),
            filterString = dimensions[dimension];

        if (filter == 'all') {
            if (!$t.hasClass('active')) {
                $t.addClass('active').siblings().removeClass('active');
                filterString = 'all';
            } else {
                $t.removeClass('active');
                filterString = '';
            }
        } else {
            $t.siblings('[data-filter="all"]').removeClass('active');
            filterString = filterString.replace('all', '');
            if (!$t.hasClass('active')) {
                $t.addClass('active');
                filterString = filterString == '' ? filter : filterString + ' ' + filter;
            } else {
                $t.removeClass('active');
                var re = new RegExp('(\\s|^)' + filter);
                filterString = filterString.replace(re, '');
            };
        };

        dimensions[dimension] = filterString;
	
        console.info('dimension 1: ' + dimensions.experte);
        console.info('dimension 2: ' + dimensions.branche);
        console.info('dimension 3: ' + dimensions.kosten);
        console.info('dimension 4: ' + dimensions.projektphase);
        console.info('dimension 5: ' + dimensions.aufwand);

        
        $('#Contentframe').mixitup('filter', [dimensions.experte, dimensions.branche, dimensions.kosten, dimensions.projektphase, dimensions.aufwand])
    });
    
    
        /* $('#sortbar .sortbox span').on('click', function() {
            $('#Contentframe .mix .extendedinfo').slideUp("fast");
            $("#Contentframe .mix .dropwrapper").children("div").attr("class", "drophandlera");
        });*/
    
    
   /* $('#Contentframe .mix .dropwrapper').click(function() {
        $(this).parent('#Contentframe .mix').children('#Contentframe .mix .extendedinfo').slideToggle("slow");
        $(this).children("div").toggleClass("drophandlera drophandlerb");
                                                                                   
        /*({"background": "url() no-repeat", "background-color": "#822269", "height":"595px"});
    });
    
  /* $('#Contentframe .mix .extendedinfo .uphandler').click(function() {
        $(this).parent("div").parent("div").slideToggle("slow");             
        $("#Contentframe .mix .dropwrapper").children("div").attr("class", "drophandlera");
        toggleClass("drophandlera drophandlerb");
    });
     */
    

});



