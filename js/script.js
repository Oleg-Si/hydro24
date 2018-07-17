$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.accordion-menu'), false);
});

$('.partner__wrapper').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.main-slider__wrapper').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true
});
$('.popup__inner').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000
});

/* ---------------------Scroll------------------------------ */

$('.servicesButton').click(function(){
  $('html, body').animate({scrollTop:$('#services').position().top}, 1000);
});

/* ---------------------fix-slider-arrow------------------- */

var arrowNext = document.querySelectorAll('.slick-arrow.slick-next');
for (var i = 0; i < arrowNext.length; i++) {
  arrowNext[i].innerHTML = '<i class="fas fa-chevron-right"></i>';
}

var arrowPrev = document.querySelectorAll('.slick-arrow.slick-prev');
for (var i = 0; i < arrowPrev.length; i++) {
  arrowPrev[i].innerHTML = '<i class="fas fa-chevron-left"></i>';
}

/* ---------------------Popup------------------------------ */

var popup = document.querySelector('.popup');
var popupReview = document.querySelector('.popup__review');
var popupCertificate = document.querySelector('.popup__certificate');
var openPopup = document.querySelectorAll('.openPopup');
var openPopupReview = document.querySelector('.openPopupReview');
var openPopupCertificate = document.querySelector('.openPopupCertificate');
var overlay = document.querySelector('.overlay');
var closePopup = document.querySelector('.closePopup');
var closePopupReview = document.querySelector('.closePopupReview');
var closePopupCertificate = document.querySelector('.closePopupCertificate');

for (var i = 0; i < openPopup.length; i++) {
  openPopup[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    overlay.classList.add('overlay--open');
    popup.classList.add('popup--open');
  });
}
openPopupReview.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.classList.add('overlay--open');
  popupReview.classList.add('popup__review--open');
});
openPopupCertificate.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.classList.add('overlay--open');
  popupCertificate.classList.add('popup__certificate--open');
});
closePopup.addEventListener('click', function () {
  overlay.classList.remove('overlay--open');
  popup.classList.remove('popup--open');
});
closePopupReview.addEventListener('click', function () {
  overlay.classList.remove('overlay--open');
  popupReview.classList.remove('popup__review--open');
});
closePopupCertificate.addEventListener('click', function () {
  overlay.classList.remove('overlay--open');
  popupCertificate.classList.remove('popup__certificate--open');
});
overlay.addEventListener('click', function () {
  overlay.classList.remove('overlay--open');
  popup.classList.remove('popup--open');
  popupReview.classList.remove('popup__review--open');
  popupCertificate.classList.remove('popup__certificate--open');
});

/* ---------------------phone-mask------------------------------ */

jQuery(function($){
  $("#phone").mask("+375 (99) 999-99-99");
  $("#phone2").mask("+375 (99) 999-99-99");
});
