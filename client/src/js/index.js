$(document).ready(() => {
    
    /* Fit to window width */

    function resize(event) {
        let width = $(this).width();
        let widthInRem16 = width / 16;
        
        $("body").css("transform", `scale(1)`);
        $("body").css("transform", `scale(${widthInRem16 / 75})`);
    }
    $(window).on("resize", resize);
    resize(window);


    /* About us section handler */

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top + $(this).outerHeight();
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    let alreadyViewedAboutUs = false;
    $(window).on("scroll", function() {
        if (!alreadyViewedAboutUs && $("#about-us").isInViewport()) {
            alreadyViewedAboutUs = true;

            let emblemePart1 = $(".emblem-part1").first();
            let emblemePart2 = $(".emblem-part2").first();
            let emblemePart3 = $(".emblem-part3").first();


            emblemePart1.addClass("emblem-part1-pos2");
            emblemePart2.addClass("emblem-part2-pos2");
            emblemePart3.addClass("emblem-part3-pos2");

            setTimeout(function() {
                $(".colorful-emblem").first().removeClass("hidden");

                emblemePart1.addClass("hidden");
                emblemePart2.addClass("hidden");
                emblemePart3.addClass("hidden");
            }, 1000);

            setTimeout(function() {
                $(".info").first().removeClass("hidden");
            }, 2000);
        }
    });


    /* Services section handler  */

    let serviceIconsCorrespondingText = {
        "design-service-icon": {
            "service-title": "Design",
            "service-text": "Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        "development-service-icon": {
            "service-title": "Development",
            "service-title-size": 3.5,
            "service-text": "Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        "marketing-service-icon": {
            "service-title": "Marketing",
            "service-title-size": 4,
            "service-text": "Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    }

    let serviceIconsWait = false;
    let serviceIcons = $(".service-icons-wrapper > img");
    serviceIcons.on("click", function(event) {
        if(serviceIconsWait)
            return;

        serviceIconsWait = true;

        event.preventDefault();

        let dis = $(this);
        var clazz = "active-service-icon";

        serviceIcons.each(function() {
            let dis = $(this);

            if(dis.hasClass(clazz))
                dis.removeClass(clazz);
        });

        dis.addClass(clazz);

        // fade out -> szöveg csere -> fade in
        for(let s in serviceIconsCorrespondingText) {
            if(!dis.hasClass(s))
                continue;

            let node = serviceIconsCorrespondingText[s];
            let title = node["service-title"];
            let titleSize = node["service-title-size"];
            let text = node["service-text"];

            let titleElement = $(".service-title").first();
            let textElement = $(".service-text").first();

            titleElement.addClass("hidden");
            textElement.addClass("hidden");

            if(titleSize != undefined) {
                titleElement.css("font-size", titleSize + "rem");
                titleElement.css("padding-top", (5 / titleSize) + "rem");
            } else {
                titleElement.css("font-size", "");
                titleElement.css("padding-top", "");
            }

            setTimeout(() => {
                titleElement.html(title);
                textElement.html(text);

                titleElement.removeClass("hidden");
                textElement.removeClass("hidden");
            }, 700);

            break;
        }

        serviceIconsWait = false;
    });


    /* Works section handler */

    let anchors = $(".works-anchors > *");
    anchors.on("click", function(event) {
        event.preventDefault();

        let dis = $(this);
        var clazz = "active-work-anchor";

        anchors.each(function() {
            let dis = $(this);

            if(dis.hasClass(clazz))
                dis.removeClass(clazz);
        });

        dis.addClass(clazz);
    });

});
