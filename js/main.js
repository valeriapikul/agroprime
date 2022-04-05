$(function () {


    $('.banner-section__inner').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/slide-left.png"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/slide-right.png"></button>',
        responsive: [{
            breakpoint: 810,
            settings: {
                arrows: false,
            }
        }
    ]
    });

    $('.partners__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/slide-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slide-right.png" alt=""></button>',
        responsive: [{
                breakpoint: 1368,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 810,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".rate-yo").rateYo({
        ratedFill: "#ffd800",
        spacing: "10px",
        normalFill: "#e7e5e5",
        starWidth: "14px",
    });

    $('.about-us__slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [{
            breakpoint: 360,
            settings: {
                arrows: false,
            }
        }
    ]
    });

    $('.our-employees__inner').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/slide-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slide-right.png" alt=""></button>',
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 810,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        }
    ]
    });

    $('.our-certificates__inner').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/slide-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slide-right.png" alt=""></button>',
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 810,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        }
    ]
    });

    $('.header__menu-btn').on('click', function () {
        $('.menu ul').slideToggle();
    });

});