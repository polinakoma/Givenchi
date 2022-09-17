  import './index.scss'; 
  
  import { sidebar, stickOne, stickTwo, stickThree, headerMenue, body, 
  aboutLink, looksLink, subscribeLink, aboutSection, looksSection, subscribeSection, 
  animItems, cardOne, cardTwo, imageOnPage, mediaQuery, mediaQuery2, imageArray }
  from '../scripts/constans.js';

  import { openSidebar, closeSidebar } from '../scripts/modal.js';

  import { handleChangeMenueColor, handleChangeMenuLogo, scrollSmooth, bodyOverflow,
    cardAnimation } from '../scripts/animation.js';
  

  // Появление контента в блоке About
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


  // Скрытие карточек
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
 window.addEventListener('load',function() {
  cardAnimation();
 });
