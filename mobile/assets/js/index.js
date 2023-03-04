(function(){
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    var swiper1 = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        stopOnLastSlide: true,
        disableOnInteraction: false,
      }
    });
  }
})();


function clickGXinRong(obj){
  $('#nb_icon_wrap').click();
}
