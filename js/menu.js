'use strict'

const hamburger = document.getElementById('hamburgerMenu');
const menu = document.querySelector('.menu-navigation');
// console.info(hamburger)
// console.info(menu)

hamburger.addEventListener('click', ()=> {
    // alert('menu clicked');
    menu.classList.toggle('spread');
})

// window.addEventListener('click', (e) => {
//     console.log(e.target)
// });
window.addEventListener('click', (e) => {
    if(menu.classList.contains('spread') 
    && e.target != menu 
    && e.target != hamburger){
        menu.classList.toggle('spread');
    }
})