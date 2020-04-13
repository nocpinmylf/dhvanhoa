// declare valuables
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("demo");
const searchValue = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const navbar = document.getElementById("nav-content-collasp");
const dropdownNav = document.getElementById("header-nav-list");

// slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " slide-active";
}

// search box
searchBtn.addEventListener('click', () => {
  searchBtn.setAttribute('href', `https://www.google.nl/search?q=${searchValue.value}+huc.edu.vn`);
});

// get time 
document.getElementById('time').innerText = getTime();
function getTime() {
  let date = new Date();
  return "Ngày: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

// vertical nav dropdown
$('.sub-menu').hide();
$('.menu-item>a').click(function () {
  $(this).parent('.menu-item').children('ul').slideToggle('100');
  $(this).find('.right').toggleClass('fa-caret-up fa-caret-down');
});

// responsive header navbar
let dWidth;

function resizeSlideBtn(width) {
  $('.prev').css('top', width);
  $('.next').css('top', width);
}

$(window).resize(function () {
  dWidth = $(window).width();
  if (dWidth > 1024) {
    resizeSlideBtn('21em');
    $('#header-nav li').removeAttr('style');
  }
  if (dWidth < 1024) {
    resizeSlideBtn('22em');
  }
  if (dWidth < 768) {
    resizeSlideBtn('15em');
  }
});

$('#collaspe-btn').click(function () {
  $('#header-nav li').slideToggle('100');
  if ($('.prev').css('top') == '720px') {
    resizeSlideBtn('15em');
  }
  else {
    resizeSlideBtn('720px');
  }
});

// modal
$('#exampleModal').on('show.bs.modal', event => {
  let button = $(event.relatedTarget);
  let modal = $(this);
});