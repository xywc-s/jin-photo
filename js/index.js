$(window).load(function() {
    /*$(".mobile-inner-header-icon").click(function() {
        $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
        $(".mobile-inner-nav").slideToggle(250);
		$('body').addClass('out');
    });*/
	$(".mobile-inner-header-icon").click(function(){
	if($(this).parent().parent().parent().find("div.mobile-inner-nav").is(":hidden")){
		$(this).parent().parent().parent().find("div.mobile-inner-nav").slideDown();
		$(this).addClass('mobile-inner-header-icon-click');
		$(this).removeClass('mobile-inner-header-icon-out');
		$('body').addClass('out');
		$('html').addClass('out');
		$('body').removeClass('on');
		$('html').removeClass('on');
	}else{
		$(this).parent().parent().parent().find("div.mobile-inner-nav").slideUp();
		$(this).addClass('mobile-inner-header-icon-out');
		$(this).removeClass('mobile-inner-header-icon-click');
		$('body').removeClass('out');
		$('html').removeClass('out');
		$('body').addClass('on');
		$('html').addClass('on');
		}
	});
    var style = '';
    $(".mobile-inner-nav a").each(function(index) {
        style += '.mobile-inner-nav a:nth-child(' + (index + 1) + '):after {animation-delay:' + ((index + 1) / 10) + 's} ';
    });
    $("head").append($('<style>' + style + '</style>'));
	$('.mobile-inner-nav').click(function(){
		$(this).hide();
		$('.mobile-inner-header .mobile-inner-header-icon').removeClass('mobile-inner-header-icon-click');
		$('.mobile-inner-header .mobile-inner-header-icon').addClass('mobile-inner-header-icon-out');
		$('body').removeClass('out');
		$('html').removeClass('out');
		$('body').addClass('on');
		$('html').addClass('on');
		})
});
/*top start*/
jQuery(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 200,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

});
/*top end*/





$(function() {
	$('.cebian a.ewm').on('click', function(){
		layer.open({
			type: 1,
			title:false,
			anim:5,
			isOutAnim: true,
			area: ['90%'],
			shadeClose: true, //点击遮罩关闭
			content: $(".tanr"),
			
		} );
	});

var swiper = new Swiper('.naver .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
    });

//风格
var swiper1 = new Swiper('.fgtop .swiper-container', {
	slidesPerView: 6,
	spaceBetween: 0,
	breakpoints: {
		936: {
			slidesPerView: 6,
			spaceBetween: 0
		},
		640: {
			slidesPerView: 5,
			spaceBetween: 0
		},
		320: {
			slidesPerView: 3.5,
			spaceBetween: 0
		}
	}
});	
$('.fgtop .swiper-slide1:last').css('border','none');





var swiper = new Swiper('.naver .swiper-container1', {
        slidesPerView: 5,
        spaceBetween: 0,
    });

//风格
var swiper1 = new Swiper('.fgtop1 .swiper-container1', {
	slidesPerView: 5,
	spaceBetween: 0,
	breakpoints: {
		780: {
			slidesPerView: 5,
			spaceBetween: 0
		},
		640: {
			slidesPerView: 5,
			spaceBetween: 0
		},
		320: {
			slidesPerView: 3.5,
			spaceBetween: 0
		}
	}
});	
$('.fgtop1 .swiper-slide1:last').css('border','none');






});



	





