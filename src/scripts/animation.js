import { sidebar, stickOne, stickTwo, stickThree, headerMenue, body, 
    aboutLink, looksLink, subscribeLink, aboutSection, looksSection, subscribeSection, 
    animItems, cardOne, cardTwo, imageOnPage, mediaQuery, mediaQuery2, imageArray }
    from './constans.js';


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
    id.scrollIntoView({behavior: 'smooth'});
  }

// Блокировка скролла при открытии меню
function bodyOverflow() {
    body.classList.toggle('body_overflow');
  }

// Cмена карточек
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
        }, 300);
  }


export { handleChangeMenueColor, handleChangeMenuLogo, scrollSmooth, bodyOverflow,
    cardAnimation }