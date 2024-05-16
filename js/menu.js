'use strict'

const hamburger = document.getElementById('hamburgerMenu');
const menu = document.getElementsByClassName('.menu-navigation');
// console.info(hamburger)
// console.info(menu)

hamburger.addEventListener('click', ()=> {
    // alert('menu clicked');
    menu.classList.toggle('spread');
})

