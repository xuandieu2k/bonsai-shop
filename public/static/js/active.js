(function ($) {
    'use strict';

    function initJQueryPlugins() {
        var $window = $(window);

        // :: 1.0 Masonary Gallery Active Code
        var proCata = $('.amado-pro-catagory');
        var singleProCata = ".single-products-catagory";

        if ($.fn.imagesLoaded) {
            proCata.imagesLoaded(function () {
                proCata.isotope({
                    itemSelector: singleProCata,
                    percentPosition: true,
                    masonry: {
                        columnWidth: singleProCata
                    }
                });
            });
        }

        // :: 2.1 Search Active Code
        var amadoSearch = $('.search-nav');
        var searchClose = $('.search-close');

        amadoSearch.off('click').on('click', function () {
            $('body').toggleClass('search-wrapper-on');
        });

        searchClose.off('click').on('click', function () {
            $('body').removeClass('search-wrapper-on');
        });

        // :: 2.2 Mobile Nav Active Code
        var amadoMobNav = $('div.amado-navbar-toggler');
        var navClose = $('.nav-close');
        amadoMobNav.off('click').on('click', function () {
            $('.header-area').toggleClass('bp-xs-on');
        });

        navClose.off('click').on('click', function () {
            $('.header-area').removeClass('bp-xs-on');
        });

        // :: 3.0 ScrollUp Active Code
        if ($.fn.scrollUp) {
            $.scrollUp({
                scrollSpeed: 1000,
                easingType: 'easeInOutQuart',
                scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
            });
        }

        // :: 4.0 Sticky Active Code
        $window.off('scroll').on('scroll', function () {
            if ($window.scrollTop() > 0) {
                $('.header_area').addClass('sticky');
            } else {
                $('.header_area').removeClass('sticky');
            }
        });

        // :: 5.0 Nice Select Active Code
        if ($.fn.niceSelect) {
            $('select').niceSelect();
        }

        // :: 6.0 Magnific Active Code
        if ($.fn.magnificPopup) {
            $('.gallery_img').magnificPopup({
                type: 'image'
            });
        }

        // :: 7.0 Nicescroll Active Code
        if ($.fn.niceScroll) {
            $(".cart-table table").niceScroll();
        }

        // :: 8.0 wow Active Code
        if ($window.width() > 767) {
            new WOW().init();
        }

        // :: 9.0 Tooltip Active Code
        if ($.fn.tooltip) {
            $('[data-toggle="tooltip"]').tooltip();
        }

        // :: 10.0 PreventDefault a Click
        $("a[href='#']").off('click').on('click', function (event) {
            event.preventDefault();
        });

        // :: 11.0 Slider Range Price Active Code
        $('.slider-range-price').each(function () {
            var min = $(this).data('min');
            var max = $(this).data('max');
            var unit = $(this).data('unit');
            var value_min = $(this).data('value-min');
            var value_max = $(this).data('value-max');
            var label_result = $(this).data('label-result');
            var t = $(this);
            $(this).slider({
                range: true,
                min: min,
                max: max,
                values: [value_min, value_max],
                slide: function (event, ui) {
                    var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                    t.closest('.slider-range').find('.range-price').html(result);
                }
            });
        });
    }

    // Đảm bảo mã chạy khi tài liệu sẵn sàng
    $(document).ready(initJQueryPlugins);

    // Theo dõi các thay đổi trong DOM để khởi tạo lại jQuery plugins
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                initJQueryPlugins();
            }
        });
    });

    // Theo dõi toàn bộ body
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})(jQuery);