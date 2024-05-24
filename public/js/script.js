(function () {
    $.fn.card_slideshow = function (args) {
        this.each(function (index, slideshow_el) {
            var $this = $(slideshow_el),
                $container = $this.find(".slides-container"),
                $cards = $container.find(".slide-card"),
                $text_container = $this.find(".slides-text-container"),
                $text = $text_container.find(".side-text"),
                $indicator = $('<ul class="slides-indicator" />').appendTo(this),
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
function ChangeStep(name, description, img) {
    this.name = name;
    this.description = description;
    this.img = img;
}

// An array containing all the projects with their information
var projects = [
    new ChangeStep('Feasibility', 'Our Team, Commences with an in-depth discussion to ascertain the project\'s scope, objectives, and financial parameters, which Involves a comprehensive assessment to gauge the project\'s viability, taking into account zoning regulations and other relevant considerations.', '../project/content/113 Franklin/IMG_6183.jpeg'),
    new ChangeStep('Design Phase', 'Our process continues with the Schematic Design phase, during which we diligently craft initial design concepts and layouts that incorporate all client requirements. As we seamlessly transition into the Design Development stage, our focus sharpens on refining these concepts, delving into the creation of detailed plans and specifications. This iterative progression ensures a comprehensive and tailored approach to transforming ideas into concrete, well-defined designs.', 'project/content/480 7th ave/7.jpg'),
    new ChangeStep('Documentation', 'To ensure precise and comprehensible deliverables, our process seamlessly advances to the Construction Drawings phase. Here, we produce detailed technical drawings that serve as a roadmap for the construction process. These drawings are accompanied by clear Specifications, providing written descriptions of materials and methods to further enhance the clarity and precision of the construction guidelines. This meticulous combination of detailed drawings and specifications forms a robust foundation for the seamless execution of the envisioned project.', '../project/content/480 7th ave/5.jpg'),
    new ChangeStep('Bidding and Negotiation', 'It is part of our due-deligence to assist clients in the solicitation and evaluation of bids from contractors. We maintain open lines of communication, ensuring clients are well-informed at every step and decision-making point as they progress through the project. Our commitment lies not only in facilitating the selection process but also in providing continuous support for informed and confident decision-making throughout the project\'s advancement.', '../project/content/480 7th ave/1.jpg'),
    new ChangeStep('Construction Phase', 'During the Construction Administration stage, the AAPC team provides vigilant oversight of the construction process. Our role encompasses ensuring strict compliance with our vision and meeting our client\'s expectations as outlined in the agreed-upon design and documentation. This meticulous supervision is geared towards guaranteeing that the final result not only aligns with our high-quality standards but also reflects the essence of the envisioned project.', '../project/content/525 7th ave/3.jpg'),
    new ChangeStep('Close-out', 'In the final stage, our team meticulously generates a Punch List and conducts Final Inspections. This involves a thorough assessment to ensure that all aspects of the project are completed to the satisfaction of both our standards and the client\'s expectations. This comprehensive approach aims to address any remaining details and guarantee that the final result meets the highest standards of quality and excellence.', '../project/content/44-28 55th ave/Render Edited.jpg'),
];

// Cacheing HTML elements
var project = document.querySelector('#stepContainer');
var projName   = document.querySelector('#stepTitle');
var projDescr  = document.querySelector('#stepBody');
var projImg    = document.querySelector('#stepImg');
var projButton = document.querySelector('#stepButton');
var projButton2 = document.querySelector('#stepButton2');

// Index of the current project being displayed
var projIndex = 0;

projButton.addEventListener('click', function() {
    // Fade out
    project.style.opacity = 0;

    // Fade in 
    setTimeout(function(){
        projIndex = (projIndex + 1) % projects.length;
        projImg.src = projects[projIndex].img;
        setTimeout(function() {
            projName.innerHTML = projects[projIndex].name;
            projDescr.innerHTML = projects[projIndex].description;
            project.style.opacity = 1;
        }, 500);
    },950);

});

projButton2.addEventListener('click', function() {
    // Fade out
    project.style.opacity = 0;
        
    // Fade in 
    setTimeout(function(){
        if(projIndex === 0){
            projIndex = 5;
        }
        else{
            projIndex = (projIndex - 1) % projects.length;
        }
        projImg.src = projects[projIndex].img;
        setTimeout(function() {
            projName.innerHTML = projects[projIndex].name;
            projDescr.innerHTML = projects[projIndex].description;
            project.style.opacity = 1;
        }, 100);
    },950);

});

