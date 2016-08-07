$(document).ready(function() {
    try {
        //Initialize Slippery 
        $('#fullscreen-slider').slippry({
            // options
            adaptiveHeight: false, // height of the sliders adapts to current slide
            captions: false, // Position: overlay, below, custom, false
            // pager
            pager: false,
            // controls
            controls: false,
            autoHover: false,
            // transitions
            transition: 'fade', // fade, horizontal, kenburns, false
            kenZoom: 140,
            speed: 19000 // time the transition takes (ms)
        });

    } catch (err) {

    }
    //Preloader
    $(window).load(function() {

        var preloaderDelay = 100,
                preloaderFadeOutTime = 500;

        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });

    //Filterable Portfolio
    $('.portfolioFilter a').click(function(e) {
        e.preventDefault();

        $filtervalue = $(this).attr("data-value");

        $hidespeed = 500;
        $showspeed = 1000;

        $(".portfolio-wrapper .row > div:not([data-value='" + $filtervalue + "'])").hide($hidespeed);
        $(".portfolio-wrapper .row div[data-value='" + $filtervalue + "']").show($showspeed);

        if ($filtervalue == "all") {
            $(".portfolio-wrapper .row div").show($showspeed);
        }
    });

    //Text Rotator for homepage
    if ($("span").hasClass("textrotator")) {
        $(".textrotator").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 6000 // How many milliseconds until the next word show.
        });
    }

    //Sticky footer on large screens
    console.log("Window height is " + $(window).height());
    console.log("Document height is " + $(document).height());

    if ($(window).height() > 714 && $(window).width() > 1349) {
        $("footer").addClass("navbar-fixed-bottom");
        $(".sub-page").addClass("large-screen-margin");
    }

    //Animation on scroll
    try {
        var config = {
            move: '50px',
            over: '.90s',
            easing: 'ease-out',
            viewportFactor: 0,
            reset: false,
            init: true
        };

        window.scrollReveal = new scrollReveal(config);
    } catch (err) {

    }

});
