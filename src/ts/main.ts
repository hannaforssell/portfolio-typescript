import '../scss/style.scss'

import Splide from '@splidejs/splide';

var splide = new Splide( '.splide', {
    type   : 'loop',
    padding: '5rem',
});
  
splide.mount();

console.log('gör någonting i main');