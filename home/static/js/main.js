// new WOW.init();
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    speed: 700,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//////////////////////
$('.vehicles__list').mCustomScrollbar({
    theme: "dark"
});
function move(value) {
    $('.vehicles__list').mCustomScrollbar("scrollTo", value, {
        scrollEasing: 'easeOut',
    });
}
$('.vehicles__nav ul li a').click(function () {

    if ($(this).attr('id') === "car-nav") {
        move("#car-vehicles");
    }
    else if ($(this).attr('id') === 'suv-nav') {
        move("#suv-vehicles");
    }
    else if ($(this).attr('id') === 'truck-nav') {
        move("#truck-vehicles");
    }
    else if ($(this).attr('id') === 'enviroment-nav') {
        move("#environment-vehicles");
    }
    else if ($(this).attr('id') === 'future-nav') {
        move("#future-vehicles");
    }
});
var count = "";
$(".header-product-show").click(function () {
    if (count === "") {
        count = $(this).attr('id');
        $(this).addClass('active-header');
        if (count === "head-vehicles") {
            $(".vehicles").removeClass("hide-vehicles");
            $('.vehicles__nav').addClass("animate__fadeInDown");
            $(".vehicles__list").addClass("animate__fadeInUp");
            $(".vehicles__close").addClass("animate__fadeInUp");
        }
    } else {
        if (count === $(this).attr('id')) {
            $(this).removeClass('active-header');
            count = "";
            $('.vehicles__nav').addClass("animate__fadeOutUp");
            $(".vehicles__list").addClass("animate__fadeOutDown");
            $(".vehicles__close").addClass("animate__fadeOutDown");
            // do thời gian thực hiện hiệu ứng của fadeOutUp có khoảng delay nên phải có hàm setTimeout là hàm delay 300(ms) sau mới thực hiện hàm ở bên trong
            setTimeout(function () {
                $(".vehicles").addClass("hide-vehicles");
                $('.vehicles__nav').removeClass("animate__fadeOutUp");
                $(".vehicles__list").removeClass("animate__fadeOutDown");
                $(".vehicles__close").removeClass("animate__fadeOutDown");
            }, 300);


        } else {
            $(".header-product-show").removeClass("active-header");
            count = $(this).attr("id");
            $(this).addClass("active-header");
            if (count != "head-vehicles") {
                $('.vehicles__nav').addClass("animate__fadeOutUp");
                $(".vehicles__list").addClass("animate__fadeOutDown");
                $(".vehicles__close").addClass("animate__fadeOutDown");
                setTimeout(function () {
                    $(".vehicles").addClass("hide-vehicles");
                    // sau khi thêm hiệu ứng biến mất đi thì khi thực hiện xong cũng đồng thời phải xóa bỏ nó ra khỏi để khi nhấn lại để xuất hiện thì ko bị báo lỗi
                    $('.vehicles__nav').removeClass("animate__fadeOutUp");
                    $(".vehicles__list").removeClass("animate__fadeOutDown");
                    $(".vehicles__close").removeClass("animate__fadeOutDown");
                }, 300);

            } else {
                $(".vehicles").removeClass("hide-vehicles");
                $('.vehicles__nav').addClass("animate__fadeInDown");
                $(".vehicles__list").addClass("animate__fadeInUp");
                $(".vehicles__close").addClass("animate__fadeInUp");
            }
        }
    }
});
//////////////////////////////////
$(".vehicles__close").click(function () {
    $('.vehicles__nav').addClass("animate__fadeOutUp");
    $(".vehicles__list").addClass("animate__fadeOutDown");
    setTimeout(function () {
        $(".vehicles").addClass("hide-vehicles");
        // sau khi thêm hiệu ứng biến mất đi thì khi thực hiện xong cũng đồng thời phải xóa bỏ nó ra khỏi để khi nhấn lại để xuất hiện thì ko bị báo lỗi
        $('.vehicles__nav').removeClass("animate__fadeOutUp");
        $(".vehicles__list").removeClass("animate__fadeOutDown");
    }, 300);
    $(".navbar a").removeClass("active-header");
    count = "";
});
$(".vehicles__item").addClass("animate__animated animate__fadeInUp");
////////
$(".carousel-indicators__config li").click(function () {
    $(".carousel-indicators__config li").removeClass("active");
    $(this).addClass("active");
});
///////
$(".carousel__indicator--xsheader").click(function () {
    $(".carousel__indicator--xs ol").slideToggle();
    if ($(".carousel__indicator--xsheader i").hasClass("tranform--rotate")) {
        $(".carousel__indicator--xsheader i").removeClass("tranform--rotate");
    }
    else {
        $(".carousel__indicator--xsheader i").addClass("tranform--rotate");
    }

});
$(".carousel__indicator--xs ol li").click(function () {
    $(".carousel__indicator--xsheader h1 span").html($(this).html());
    // $(".carousel__indicator--xs ol").slideUp();
    $(".carousel__indicator--xsheader").click();
});
///////
var count = 0;
$(".carousel-control-prev").click(function () {
    $(".carousel-indicators__config li").removeClass("active");
    if (count == 0) {
        count = 4;
    } else {
        count--;
    }
    $(".carousel-indicators__config li").each(function (i) {
        if (i == count) {
            $(this).addClass("active");
            $(".carousel__indicator--xsheader h1 span").html($(this).html());
        }
    })
});
$(".carousel-control-next").click(function () {
    $(".carousel-indicators__config li").removeClass("active");
    if (count == 4) {
        count = 0;
    } else {
        count++;
    }
    $(".carousel-indicators__config li").each(function (i) {
        if (i == count) {
            $(this).addClass("active");
            $(".carousel__indicator--xsheader h1 span").html($(this).html());
        }
    })
});
//////
$(".back-to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1000);
})
////////
let colaspe = function () {
    var w = ($(window).width());
    if (w >= 768) {
        $(".ul__collapse").removeClass("collapse");
    }
    else {
        $(".ul__collapse").addClass("collapse");
    }
};

// khi man hinh thay doi kich thuoc 
$(window).resize(function () {
    colaspe();
});
// khi mot trang web da dc load xong r 
$(document).ready(function () {
    colaspe()
});
new WOW().init();