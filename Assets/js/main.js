/**
 * Template Name: Restaurantly - v1.1.0
 * Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
// $('#datepicker').datepicker({
//   uiLibrary: 'bootstrap4'
// });

$(document).on("click", function(e) {
    var target = $(e.target).closest(".btn-select");
    target.length || $(".btn-select").removeClass("active").find("ul").hide()

}), $(document).ready(function() {
    $(this).scrollTop(0);

    function toggleIcon(e) { $(e.target).prev(".panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus") }
    $(".carousel").bcSwipe({ threshold: 50 }), $("#loginLink").click(function(event) { event.preventDefault(), $("#login-modal").modal("show"), $('.nav-tabs a[href="#tab_login_1"]').tab("show"), $("#forgetpass-modal").modal("hide"), $("#success-modal").modal("hide") }), $("#loginLinkMobile").click(function(event) { event.preventDefault(), $("#login-modal").modal("show") }), $("#active-modal .close").click(function() { $("#active-modal").fadeToggle("fast"), $("#active-modal").modal("hide") }), $("#login-buyticket-modal .close").click(function() { $("#login-buyticket-modal").fadeToggle("fast") }), $("#locationLink").click(function(event) { event.preventDefault(), $("#location-modal").fadeToggle("fast") }), $("#locationLinkMobile").click(function(event) { event.preventDefault(), $("#location-modal").fadeToggle("fast") }), $("#location-modal .close").click(function() { $("#location-modal").fadeToggle("fast") }), $(".panel-group").on("hidden.bs.collapse", toggleIcon), $(".panel-group").on("shown.bs.collapse", toggleIcon), $('a[href="#tab_images"]').one("shown.bs.tab", function(e) { $(".slider-images").length && $(".slider-images").bxSlider({ minSlides: 2, maxSlides: 4, slideMargin: 10, slideWidth: 180, controls: !0, infiniteLoop: !1, pager: !1, hideControlOnEnd: !0 }) }), navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? $(".slider-images-actors").length && $(".slider-images-actors").bxSlider({ minSlides: 2, maxSlides: 4, slideMargin: 10, slideWidth: 180, controls: !0, infiniteLoop: !1, pager: !1, hideControlOnEnd: !0 }) : $(".slider-images-actors").length && $(".slider-images-actors").bxSlider({ minSlides: 2, maxSlides: 4, slideMargin: 10, slideWidth: 180, controls: !0, infiniteLoop: !1, pager: !1, hideControlOnEnd: !0, touchEnabled: !1 }), $("#changepass").change(function() { $(this).is(":checked") ? $("#box-changepass").fadeIn("slow") : $("#box-changepass").fadeOut("slow") }), $('[data-toggle="tooltip"]').tooltip(), $("#list").click(function(event) { event.preventDefault(), $("#products .item").addClass("list-group-item") }), $("#grid").click(function(event) { event.preventDefault(), $("#products .item").removeClass("list-group-item"), $("#products .item").addClass("grid-group-item") }), $(".nav-toggle").click(function(event) { event.preventDefault(), $(this).toggleClass("active"), $(".navicon").toggleClass("fixed-mobile"), $(".galaxy-nav").toggleClass("open") })
});

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);

$(function() {
    $('.btnNext').click(function() {
        $('.nav-tabs > .active').next('li').find('a').trigger('click');
    });

    $('.btnPrevious').click(function() {
        $('.nav-tabs > .active').prev('li').find('a').trigger('click');
    });
})


!(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });


    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 1;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });




    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('.mobile-nav').prepend('<button type="button" class="mobile-nav-close"><i class="icofont-close"></i></button>');
        $('#header').append('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav-close', function(e) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-overly').fadeOut();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function(e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            $('#topbar').addClass('topbar-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
            $('#topbar').removeClass('topbar-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('topbar-scrolled');
    }

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function() {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Menu list isotope and filter
    $(window).on('load', function() {
        var menuIsotope = $('.menu-container').isotope({
            itemSelector: '.menu-item',
            layoutMode: 'fitRows'
        });

        $('#menu-flters li').on('click', function() {
            $("#menu-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            menuIsotope.isotope({
                filter: $(this).data('filter')
            });
            aos_init();
        });
    });

    // Events carousel (uses the Owl Carousel library)
    $(".events-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });

    // Initiate venobox lightbox
    $(document).ready(function() {
        $('.venobox').venobox();
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

})(jQuery);

$(document).on("click", function(e) {
    var target = $(e.target).closest(".btn-select");
    target.length || $(".btn-select").removeClass("active").find("ul").hide()
}), $(document).ready(function() {
    function toggleIcon(e) { $(e.target).prev(".panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus") }
    $(".carousel").bcSwipe({ threshold: 50 }), $("#loginLink").click(function(event) { event.preventDefault(), $("#login-modal").modal("show"), $('.nav-tabs a[href="#tab_login_1"]').tab("show"), $("#forgetpass-modal").modal("hide"), $("#success-modal").modal("hide") }), $("#loginLinkMobile").click(function(event) { event.preventDefault(), $("#login-modal").modal("show") }), $("#active-modal .close").click(function() { $("#active-modal").fadeToggle("fast"), $("#active-modal").modal("hide") }), $("#login-buyticket-modal .close").click(function() { $("#login-buyticket-modal").fadeToggle("fast") }), $("#locationLink").click(function(event) { event.preventDefault(), $("#location-modal").fadeToggle("fast") }), $("#locationLinkMobile").click(function(event) { event.preventDefault(), $("#location-modal").fadeToggle("fast") }), $("#location-modal .close").click(function() { $("#location-modal").fadeToggle("fast") }), $(".panel-group").on("hidden.bs.collapse", toggleIcon), $(".panel-group").on("shown.bs.collapse", toggleIcon), $('a[href="#tab_images"]').one("shown.bs.tab", function(e) { $(".slider-images").length && $(".slider-images").bxSlider({ minSlides: 2, maxSlides: 4, slideMargin: 10, slideWidth: 180, controls: !0, infiniteLoop: !1, pager: !1, hideControlOnEnd: !0 }) }), navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? $(".slider-images-actors").length && $(".slider-images-actors").bxSlider({ minSlides: 2, maxSlides: 4, slideMargin: 10, slideWidth: 180, controls: !0, infiniteLoop: !1, pager: !1, hideControlOnEnd: !0 }) : $(".slider-images-actors").length && $(".slider-images-actors").bxSlider({ minSlides: 2, maxSlides: 4, slideMargin: 10, slideWidth: 180, controls: !0, infiniteLoop: !1, pager: !1, hideControlOnEnd: !0, touchEnabled: !1 }), $("#changepass").change(function() { $(this).is(":checked") ? $("#box-changepass").fadeIn("slow") : $("#box-changepass").fadeOut("slow") }), $('[data-toggle="tooltip"]').tooltip(), $("#list").click(function(event) { event.preventDefault(), $("#products .item").addClass("list-group-item") }), $("#grid").click(function(event) { event.preventDefault(), $("#products .item").removeClass("list-group-item"), $("#products .item").addClass("grid-group-item") }), $(".nav-toggle").click(function(event) { event.preventDefault(), $(this).toggleClass("active"), $(".navicon").toggleClass("fixed-mobile"), $(".galaxy-nav").toggleClass("open") })
});