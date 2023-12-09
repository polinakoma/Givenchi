import { sidebar, headerMenu, stickOne, stickTwo, stickThree, headerMenue, body, 
    aboutLink, looksLink, subscribeLink, aboutSection, looksSection, subscribeSection }
    from './constans.js';

// Открытие сайд-бара 
const openSidebar = function() {
    sidebar.classList.toggle('side-bar_opened');
  }


  // Закрытие сайдбара 
const closeSidebar = function() {
    sidebar.classList.remove('side-bar_opened');
  }

  export { openSidebar, closeSidebar };
