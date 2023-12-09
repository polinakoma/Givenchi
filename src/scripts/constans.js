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
  
  
  const body = document.querySelector('.body'); 

  const headerMenue = document.querySelector('.header__menue-logo');
  const sidebar = document.querySelector('.side-bar');
  
  const stickOne = document.querySelector('#stick_one');
  const stickTwo = document.querySelector('#stick_two');
  const stickThree = document.querySelector('#stick_three');
  
  const aboutLink = document.querySelector('#about');
  const looksLink = document.querySelector('#looks');
  const subscribeLink = document.querySelector('#subscribe');

  const aboutSection = document.querySelector('#about_section');
  const looksSection = document.querySelector('#looks_section');
  const subscribeSection = document.querySelector('#subscribe_section');

  const animItems = document.querySelectorAll('.about__quote');

  const cardOne = document.querySelector('#photo_4');
  const cardTwo = document.querySelector('#photo_8');

  const imageOnPage = document.querySelectorAll('.photo-grid__card');

  const mediaQuery = window.matchMedia('(max-width: 1400px)');
  const mediaQuery2 = window.matchMedia('(min-width: 730px)');
  
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


export { sidebar, stickOne, stickTwo, stickThree, headerMenue, body, 
aboutLink, looksLink, subscribeLink, aboutSection, looksSection, subscribeSection,
animItems, cardOne, cardTwo, imageOnPage, mediaQuery, mediaQuery2, imageArray };