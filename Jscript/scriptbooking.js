$('#btn2').click (function(){
  $('#about').hide();
  $('#doubleb').show(1000);
  $('#service').hide();
  this.css("background-color", "yellow");


})
$('#btn1').click (function(){
  $('#doubleb').hide();
  $('#about').show(1000);
  $('#service').hide();

})
$('#btn3').click (function(){
  $('#doubleb').hide();
  $('#service').show(1000);
  this.hide();

})
/



 $('#dot1').click(function(){
  $('.row__slideshow').css("margin-left","0");
  })
$('#dot2').click(function(){
  $('.row__slideshow').css("margin-left","-50%");
})
$('#dot3').click(function(){
  $('.row__slideshow').css("margin-left","-100%");
})


// 
  $('.slider-caterogi-3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
   prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-charging-station"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fas fa-charging-station"></i></button>',
 
});
  // menu bar
  $('#home_menu-mobile').click(function (){
    $('#menu_mobile').css({"transform": "translateX(0)"});
  })
   $('#closemobile').click(function (){
    $('#menu_mobile').css({"transform": "translateX(100%)"});
  })
// cong tru

var number =document.getElementById("input_value");
number.value=1;
$('#plus').click(function(){
  if (number.value<16) {
      number.value++;
  }
   
})
$('#minus').click(function(){
  if (number.value>1) {
    number.value--
  }
})
// checked coach
$('#coachmale').click(function(){
  $('#checkedmale').show();
    $('#checkedfemale').hide();
})
$('#coachfemale').click(function(){
   $('#checkedmale').hide();
  $('#checkedfemale').show();
})
// employee1 sl
$('.slider_employee1').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
// see more
$('#see-more').click (function(){
  $('#see-more').hide();
  $('#hide-more').show();
  $('#andi').show(1000);
 

})
$('#hide-more').click (function(){
$('#andi').hide(1000);
 $('#see-more').show();
  $('#hide-more').hide();
  
 

})