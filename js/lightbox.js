'use strict'
//getElementsByClassName returns HTML Collection, with that we cant use forEach()
const collectionImages = document.querySelectorAll('.img-gallery');
const imageLight = document.querySelector('.load-image');
const containerLight = document.querySelector('.image-light');

// console.log(collectionImages.length, collectionImages);
// console.log(imageLight);
// console.log(containerLight);

collectionImages.forEach(image => {
    image.addEventListener('click', ()=> {
        //get image source, passed it to showImage function
        let imageSource = image.getAttribute('src');
        // console.log(image.getAttribute('src'));
        showImage(imageSource);
    })
});

//CLOSE THE OPEN IMAGE, by clicking anywhere but image
containerLight.addEventListener('click', e => {
    if(e.target !== imageLight){
        containerLight.classList.toggle('showContainer');
        imageLight.classList.toggle('showImage');
        // hamburger.style.opacity = '1';
        hamburger.style.display = 'block';
    }

})

//SHOW IMAGE
//const showImage = (image) => {imageLight.src = image;}
function showImage(image){
    containerLight.classList.toggle('showContainer');
    imageLight.src = image;
    imageLight.classList.toggle('showImage');
    // hamburger.style.opacity = '0';
    hamburger.style.display = 'none';
}