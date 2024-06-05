(function () {
    $.fn.card_slideshow = function (args) {
        this.each(function (index, slideshow_el) {
            var $this = $(slideshow_el),
                $container = $this.find(".slides-container"),
                $cards = $container.find(".slide-card"),
                $text_container = $this.find(".slides-text-container"),
                $text = $text_container.find(".side-text"),
                $indicator = $('<ul className="slides-indicator" />').appendTo(this),
                in_animation = false,
                defaults = {
                    speed: 200,
                    ease: "swing"
                };

            // parse defaults
            args = $.extend({}, defaults, args);

            // indicator points
            $indicator
                .html("<li></li>".repeat($cards.length))
                .find("li:first-child")
                .addClass("active");

            // index attribute
            $($cards).each(function (index, element) {
                $(element).attr("data-index", index);
                $text.filter(":eq(" + index + ")").attr("data-index", index);
            });

            // enable first one
            $text.first().addClass("active");

            // go slide animation
            var next_slide = function () {
                var $current_card = $cards.filter(":first-child"),
                    next_index = parseInt($current_card.attr("data-index")) + 1;

                // start animation
                in_animation = true;

                // next index validation
                if (next_index >= $cards.length) {
                    next_index = 0;
                }

                // switch text
                $text.filter(".active").removeClass("active");
                $text.filter("[data-index=" + next_index + "]").addClass("active");

                // switch indicator
                $indicator.find("li.active").removeClass("active");
                $indicator.find("li:eq(" + next_index + ")").addClass("active");

                // fade out first/top card
                $current_card
                    .fadeOut(args.speed, args.ease, function () {
                        // move it way back to be the last item
                        $current_card.appendTo($container);
                        in_animation = false;
                    })
                    .fadeIn(args.speed, args.ease);
            };

            // on card click
            $cards.on("click", function (e) {
                e.preventDefault();
                // only slide when animation is complete
                if (false === in_animation) {
                    next_slide();
                }
            });
        });

        return this;
    };

    $(".slideshow").card_slideshow({
        speed: 150,
        ease: "swing"
    });
})();

var $card = $('.card');
var lastCard = $(".card-list .card").length - 1;

var biosection = document.getElementById('biosection');

setInterval(changeTimer, 10000);

function changeTimer() {
    if(!biosection.matches(':hover')) {
        var prependList = function () {
            if ($('.card').hasClass('activeNow')) {
                var $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
                $('.ul-card').prepend($slicedCard);
            }
        }
        $('.li-card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
        setTimeout(function () {
            prependList();
        }, 150);

        toggleContent();
    }
    else {
        console.log("worked");
    }
}


$('.next').click(function(){
    var prependList = function() {
        if( $('.card').hasClass('activeNow') ) {
            var $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
            $('.ul-card').prepend($slicedCard);
        }
    }
    $('.li-card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
    setTimeout(function(){prependList(); }, 150);

});

function toggleContent() {
    var message1 = "Allen Azarkian RA, AIA";
    var message2 = "Pierre E. Tairouz";
    var message3 = "Person 3";
    
    var title1 = "Principal Architect";
    var title2 = "Design Team Director";
    var title3 = "title 3";
    
    var desc1 = " Allen, a dynamic professional at the intersection of business and architecture, possesses a unique blend of academic prowess and practical experience, exemplified by his undergraduate degree in Finance and a master's in architecture.";
    var desc2 = "Currently serving as the Design Team Director at our studios, Pierre brings his expertise to bear on high-end projects, overseeing construction, design development, client relationships, and project coordination. Pierre embodies a global perspective in his architectural endeavors. His multifaceted talents encompass not only design and project management but also languages, making him a truly exceptional architect and leader in the field.";
    var desc3 = "3Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta";
    
    var element = document.getElementById('testtitle');
    var element2 = document.getElementById('personTitle');
    var element3 = document.getElementById('personDescription');

    if (element.innerHTML===message1) {
        element.innerHTML = message2;
        element2.innerHTML = title2;
        element3.innerHTML = desc2;
    }/*
    else if(element.innerHTML===message2){
        element.innerHTML = message3;
        element2.innerHTML = title3;
        element3.innerHTML = desc3;
    }
    */
    else {
        element.innerHTML = message1;
        element2.innerHTML = title1;
        element3.innerHTML = desc1;
    }
    
    return false;
}

/**
 * Constructor function for Projects
 */