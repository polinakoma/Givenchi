  import "./index.scss"; 
  
  import { sidebar, stickOne, stickTwo, stickThree, headerMenue, body, 
  aboutLink, looksLink, subscribeLink, aboutSection, looksSection, subscribeSection }
  from "../components/constans.js";

  import { openSidebar, closeSidebar } from "../components/modal.js";

  import lookOne from '../images/look_1.svg';
  import lookTwo from '../images/look_2.svg';
  import lookThree from '../images/look_3.svg';
  import lookFour from '../images/look_4.svg';
  import lookFive from '../images/look_5.svg';
  import lookSix from '../images/look_6.svg';
  import lookSeven from '../images/look_7.svg';
  import lookEight from '../images/look_8.svg';
  import lookNine from '../images/look_9.svg';
  import lookTen from '../images/look_10.svg';
  
 

  //  Смена цвета логотипа меню при клике  
  function handleChangeMenueColor() {
    stickOne.classList.toggle('header__stick_white');
    stickTwo.classList.toggle('header__stick_white');
    stickThree.classList.toggle('header__stick_white');
  }

  
  // Анимация изменения логотипа меню при клике 
  function handleChangeMenuLogo() {
    stickOne.classList.toggle('header__stick_change-one');
    stickTwo.classList.toggle('header__stick_change-two');
    stickThree.classList.toggle('header__stick_change-three');
  }


  // Плавный скролл для якорных ссылок
  function scrollSmooth(id) {
    id.scrollIntoView({behavior: "smooth"});
  }


  // Блокировка скролла при открытии меню
  function bodyOverflow() {
    body.classList.toggle('body_overflow');
  }


  // Открытие сайдбара
  headerMenue.addEventListener('click', () => {
    openSidebar();
    handleChangeMenueColor();
    handleChangeMenuLogo();
  }); 

  
  // Плавный скролл для якорных ссылок
  aboutLink.addEventListener('click', () => {
    scrollSmooth(aboutSection);
    closeSidebar();
    handleChangeMenuLogo();
    handleChangeMenueColor();
    bodyOverflow();
  });
    

  looksLink.addEventListener('click', () => {
    scrollSmooth(looksSection);
    closeSidebar();
    handleChangeMenuLogo();
    handleChangeMenueColor();
    bodyOverflow();
  });

  subscribeLink.addEventListener('click', () => {
    scrollSmooth(subscribeSection);
    closeSidebar();
    handleChangeMenuLogo();
    handleChangeMenueColor();
    bodyOverflow();
  });


  // Блокировка скролла при открытии меню
   headerMenue.addEventListener('click', () => {
     bodyOverflow();
   });

  // Появление контента в блоке About

  const animItems = document.querySelectorAll('.about__quote');
  

  if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 3; 

        let animItempoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItempoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItempoint) &&
            pageYOffset < (animItemOffset + animItemHeight)) {
              animItem.classList.add('about__quote_active');
            } else {
              animItem.classList.remove('about__quote_active');
            }

      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }    
}

  // Скрытие карточек
  const mediaQuery = window.matchMedia('(max-width: 1400px)');
  const mediaQuery2 = window.matchMedia('(min-width: 730px)');
  
  const cardOne = document.querySelector('#photo_4');
  const cardTwo = document.querySelector('#photo_8');

  window.addEventListener('resize', function (event) {
    event.preventDefault();
    if (mediaQuery.matches && mediaQuery2.matches) {
      cardOne.setAttribute('hidden', 'hidden');
      cardTwo.setAttribute('hidden', 'hidden');
    } else {
      cardOne.removeAttribute('hidden', 'hidden');
      cardTwo.removeAttribute('hidden', 'hidden');
    }
  }, true);


  // Смена карточек
const imageOnPage = document.querySelectorAll('.photo-grid__card');


const imageArray = [

  {src: lookOne,
  alt: 'Givanchi look'},

  {src: lookTwo,
  alt: 'Givanchi look'},

  {src: lookThree,
  alt: 'Givanchi look'},

  {src: lookFour,
  alt: 'Givanchi look'},

  {src: lookFive,
  alt: 'Givanchi look'},

  {src: lookSix,
  alt: 'Givanchi look'},

  {src: lookSeven,
  alt: 'Givanchi look'},

  {src: lookEight,
  alt: 'Givanchi look'},

  {src: lookNine,
  alt: 'Givanchi look'},

  {src: lookTen,
  alt: 'Givanchi look'}

]

function randomizeArray(array) {
  for (let i = array.length - 1; i > 0; i -- ) {

      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function cardAnimation() {
      setInterval(function () {
          for (let i = 0; i <= 1; i++) {
            randomizeArray(imageArray)
              let random = Math.floor(Math.random() * imageArray.length);
              if (imageOnPage[i].src !== imageArray[i].src) {
                 imageOnPage[random].src = imageArray[i].src;
              }
          }
      }, 2000);
}

 window.addEventListener('load',function() {
  cardAnimation();
 });
