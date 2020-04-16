// declare valuables
const slides = document.getElementsByClassName("slides");
const searchValue = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const navbar = document.getElementById("nav-content-collasp");
const up = document.getElementsByClassName('up')[0];
const down = document.getElementsByClassName('down')[0];
const collaspBtn = document.getElementById('collaspe-btn');
const dropdownList = document.querySelectorAll('#ver-nav .dropdown-menu');
const dropdownBtn = document.querySelectorAll('#ver-nav .dropdown');
const listStatus = {}; // sub dropdown menu

//Dynamic banner
const bannerImg = document.getElementById('banner-img');
const bannerImgNum = 3;
let bannerindex = 1;
setInterval(() => {
  changeBanner();
}, 3000);

function changeBanner() {
  
  bannerImg.setAttribute('src', `Image/banner${bannerindex}.jpg`);
  bannerindex++;
  if(bannerindex > bannerImgNum) bannerindex = 1;
}



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
  slides[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusSlides(1);
}, 4000);

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
$('.menu-item a').click(function () {
  $(this).parent('.menu-item').children('ul').slideToggle('100');
  $(this).find('.right').toggleClass('fa-caret-up fa-caret-down');
});

//responsive up down button
window.addEventListener("scroll", () => {
  let dheight = $(document).height();
  window.pageYOffset < 200 ? up.style.display = "none" : up.style.display = "";
  (dheight - window.pageYOffset) < 800 ? down.style.display = "none": down.style.display = "";
});

// responsive ver-nav 
const verNav = document.getElementById('ver-nav');
const navElem = document.querySelectorAll('#ver-nav .nav-content'); 

collaspBtn.addEventListener('click', () => {
  if (verNav.style.width == '300px') {
    verNav.style.width = '0px';
    for (let i = 0; i < navElem.length; i++) {
      navElem[i].classList.remove('appear');
    }
  }
  else {
    verNav.style.width = '300px';
    for (let i = 0; i < navElem.length; i++) {
      navElem[i].classList.add('appear');
    }
  }
});

// hide 
let dWidth;
window.addEventListener('resize', () => {
  dWidth = window.innerWidth;
  if (dWidth > 1024) {
    verNav.style.width = '0px';
  }
});

// drop down ver-nav
function hideSubItem (element, bool) {
	if(bool) element.style.display = 'none';
	else element.style.removeProperty('display');
}

for (let i = 0; i < dropdownList.length; i++) {
	listStatus[i] = true;
	hideSubItem(dropdownList[i], listStatus[i]);
}

for (let i = 0; i < dropdownBtn.length; i++) {
  dropdownBtn[i].addEventListener('click', (e) => {
    e.preventDefault(); 
    listStatus[i] = !listStatus[i];
    hideSubItem(dropdownList[i], listStatus[i]);
  });
}

// sub-page 
const subPage = {};
const abc = document.querySelectorAll('a[sub-page]');
for (let index = 0; index < abc.length; index++) {
  // console.log(abc[index]);
  
}