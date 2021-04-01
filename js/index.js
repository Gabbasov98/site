$(document).ready(function(){
  $(".header__btn").click(function(){
    $(".header__hidden").css("display","block");
    $(".header__hidden").animate({
      "right":0
    }, 500);
  });
  $(".header__hidden-btn").click(function(){
    $(".header__hidden").css("display","none");
    $(".header__hidden").animate({
      "right":"-2000px"
    }, 500);
  });
  $(".videos__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow:'<button class="videos__slider-arrow videos__slider-next"><img src="images/next.svg" alt=""></button>',
    prevArrow:'<button class="videos__slider-arrow videos__slider-prev"><img src="images/prev.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".js-open-modal").click(function(){
    $(".modalform").addClass("show_modal");
    $(".modalbg").addClass("show_modal");
  });
  $(".modalform__close").click(function(){
    $(".modalform").removeClass("show_modal");
    $(".modalbg").removeClass("show_modal");
  });
  $(".modalbg").click(function(){
    $(".modalform").removeClass("show_modal");
    $(".modalbg").removeClass("show_modal");
  });

  // Mask for phone input
  $("#phone").mask("+7 (999) 999-99-99");

  $(".form").submit(function(e){
    e.preventDefault();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var emailPattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,6}$/i;

    if (name.length< 1) {
      if ($('.error__msg').is('#name_msg')){

      }else{
        $('#name').after('<p class="error__msg" id="name_msg">Введите имя</p>');
        $('#name').addClass("form__error");
      }
    }else{
      $('#name').removeClass("form__error");
      $('#name').addClass("form__success");
      $('#name_msg').detach();
    }

    if (phone.length< 1) {
      if ($('.error__msg').is('#phone_msg')){

      }else{
        $('#phone').after('<p class="error__msg" id="phone_msg">Введите номер телефона</p>');
        $('#phone').addClass("form__error");
      }
    }else{
      $('#phone').removeClass("form__error");
      $('#phone').addClass("form__success");
      $('#phone_msg').detach();
    }
    if (email.length< 1) {
      if ($('.error__msg').is('#email_msg')){

      }else{
        $('#email').after('<p class="error__msg" id="email_msg">Введите email</p>');
        $('#email').addClass("form__error");
      }
    }else{
      $('#email').removeClass("form__error");
      $('#email').addClass("form__success");
      $('#email_msg').detach();
    }
  })


});
