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

})(jQuery);

$(document).on("click", function(e) {
    var target = $(e.target).closest(".btn-select");
    target.length || $(".btn-select").removeClass("active").find("ul").hide()
}), $(document).ready(function() {
    function toggleIcon(e) { $(e.target).prev(".panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus") }
    $(".carousel").bcSwipe({ threshold: 50 }), $("#loginLink").click(function(event) { event.preventDefault(), $("#login-modal").modal("show"), $('.nav-tabs a[href="#tab_login_1"]').tab("show"), $("#forgetpass-modal").modal("hide"), $("#success-modal").modal("hide") }), $("#loginLinkMobile").click(function(event) { event.preventDefault(), $("#login-modal").modal("show") }), $("#active-modal .close").click(function() { $("#active-modal").fadeToggle("fast"), $("#active-modal").modal("hide") }), $("#login-buyticket-modal .close").click(function() { $("#login-buyticket-modal").fadeToggle("fast") }), $("#locationLink").click(function(event) { event.preventDefault(), $("#location-modal").fadeToggle("fast") }), $("#locationLinkMobile").click(function(event) { event.preventDefault(), $("#location-modal").fadeToggle("fast") }), $("#location-modal .close").click(function() { $("#location-modal").fadeToggle("fast") }), $(".panel-group").on("hidden.bs.collapse", toggleIcon), $(".panel-group").on("shown.bs.collapse", toggleIcon), $('a[href="#tab_images"]').one("shown.bs.tab", function(e) { $(".slider-images").length && $(".slider-images").bxSlider({ minSlides: 2, maxSlides: 4, slideMargin: 10, slideWidth: 180, controls: !0, infiniteLoop: !1, pager: !1, hideControlOnEnd: !0 }) }), navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? $(".slider-images-actors").length && $(".slider-images-actors").bxSlider({ minSlides: 2, maxSlides: 4, slideMargin: 10, slideWidth: 180, controls: !0, infiniteLoop: !1, pager: !1, hideControlOnEnd: !0 }) : $(".slider-images-actors").length && $(".slider-images-actors").bxSlider({ minSlides: 2, maxSlides: 4, slideMargin: 10, slideWidth: 180, controls: !0, infiniteLoop: !1, pager: !1, hideControlOnEnd: !0, touchEnabled: !1 }), $("#changepass").change(function() { $(this).is(":checked") ? $("#box-changepass").fadeIn("slow") : $("#box-changepass").fadeOut("slow") }), $('[data-toggle="tooltip"]').tooltip(), $("#list").click(function(event) { event.preventDefault(), $("#products .item").addClass("list-group-item") }), $("#grid").click(function(event) { event.preventDefault(), $("#products .item").removeClass("list-group-item"), $("#products .item").addClass("grid-group-item") }), $(".nav-toggle").click(function(event) { event.preventDefault(), $(this).toggleClass("active"), $(".navicon").toggleClass("fixed-mobile"), $(".galaxy-nav").toggleClass("open") })
});