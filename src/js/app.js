$(document).ready(function() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS('particles-js', {
        "particles" : {
            "number" :
            {"value" : 50, "density" : {"enable" : true, "value_area" : 800}},
            "color" : {"value" : "#4dba82"},
            "shape" : {
                "type" : "polygon",
                "stroke" : {"width" : 0, "color" : "#000000"},
                "polygon" : {"nb_sides" : 5},
                "image" : {"src" : "img/github.svg", "width" : 100, "height" : 100}
            },
            "opacity" : {
                "value" : 1,
                "random" : false,
                "anim" : {
                    "enable" : false,
                    "speed" : 1,
                    "opacity_min" : 0.1,
                    "sync" : false
                }
            },
            "size" : {
                "value" : 3,
                "random" : true,
                "anim" : {
                    "enable" : false,
                    "speed" : 19.18081918081918,
                    "size_min" : 0.1,
                    "sync" : false
                }
            },
            "line_linked" : {
                "enable" : true,
                "distance" : 150,
                "color" : "#4dba82",
                "opacity" : 0.8,
                "width" : 1
            },
            "move" : {
                "enable" : true,
                "speed" : 4,
                "direction" : "none",
                "random" : true,
                "straight" : false,
                "out_mode" : "bounce",
                "bounce" : false,
                "attract" : {"enable" : false, "rotateX" : 600, "rotateY" : 1200}
            },
            nb : 80
        },
        "interactivity" : {
            "detect_on" : "window",
            "events" : {
                "onhover" : {"enable" : true, "mode" : "bubble"},
                "onclick" : {"enable" : true, "mode" : "push"},
                "resize" : true
            },
            "modes" : {
                "grab" : {"distance" : 250, "line_linked" : {"opacity" : 1}},
                "bubble" : {
                    "distance" : 300,
                    "size" : 10,
                    "duration" : 4,
                    "opacity" : 8,
                    "speed" : 3
                },
                "repulse" : {"distance" : 200, "duration" : 0.4},
                "push" : {"particles_nb" : 4},
                "remove" : {"particles_nb" : 2}
            }
        },
        "retina_detect" : true
    });

    if ($(window).scrollTop() > 10) {
        $('#main-header').addClass('site-header');
        $('#main-header').removeClass('main-site-header');
    }
    if ($(window).scrollTop() < 11) {
        $('#main-header').removeClass('site-header');
        $('#main-header').addClass('main-site-header');
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('#main-header').addClass('site-header');
            $('#main-header').removeClass('main-site-header');
        }
        if ($(window).scrollTop() < 11) {
            $('#main-header').removeClass('site-header');
            $('#main-header').addClass('main-site-header');
        }
    });

    $("#menu a[href^='/#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){

            // when done, add hash to url
            // (default click behaviour)
            if (hash != "#particles-js") {
                window.location.hash = hash;
            } else {
                window.location.hash = "";
            }
        });
    });

    $("#ymh_logo a[href^='/#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){

            // when done, add hash to url
            // (default click behaviour)
            if (hash != "#particles-js") {
                window.location.hash = hash;
            } else {
                window.location.hash = "";
            }
        });
    });

    (function($) {

		$('#header__icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('with--sidebar');
		});
        
        $('#site-cache').click(function(e){
            $('body').removeClass('with--sidebar');
        });
        
	})(jQuery);
});
