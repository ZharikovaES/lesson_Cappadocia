$(function(){
    $('.fairy-tail__slider').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false,
            }
        }]    
    });
    $('.our-trip__slider').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false,
            }
        }]    
    });
	$(".menu, .our-trip__body").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		let id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});