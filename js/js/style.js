/*导航效果*/
$(function(){
   $('.nav__trigger').on('click touchstart', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('nav--active');
    $('.nav_content').slideToggle(400);
    $('header').toggleClass('whitebg');
  });
  $('.nav_content a').on('touchstart mousedown',function(e){   
    var _this=$(this);
    _this.addClass('cur').parent().siblings().find('a').removeClass('cur');
   });
})
/*首页banner图轮播*/
$(function(){
    var swiper1 = new Swiper('.swiper-container1', {
        pagination: '.banner-pagination',
        autoplay:4000,
        autoplayDisableOnInteraction:false,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        paginationBulletRender: function (index, className) {
           return '<span class="' + className + '">' + '</span>';
        }
    });
})






