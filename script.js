'use strict'
//Proof of life
console.log('hello world');

//Variables pulled from HTML
const mainContainer = document.getElementById('imgDiv')
const imgContainer1 = document.getElementById('img1');
const imgContainer2 = document.getElementById('img2');
const imgContainer3 = document.getElementById('img3');
const imgTitle1 = document.getElementById('img1title');
const imgTitle2 = document.getElementById('img2title');
const imgTitle3 = document.getElementById('img3title');


//Constructor function
function Images(img, imgPath){
    this.img = img;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.votes = 0;
}

//empty array for created constructor images to be placed into
Images.allImages = [];

//List of new images created using the constructor function and pushed into the images array above
Images.allImages.push(new Images('CC Logo', './img/CC logo.png'));
Images.allImages.push(new Images('Cowboy Logo', './img/cowboy mascot.png'));
Images.allImages.push(new Images('Cowboy Ball Logo', 'CowboyHead_BXB_2016_.jpg'));
Images.allImages.push(new Images('Gym Pic', './img/Gym Picture.jpg'));
Images.allImages.push(new Images('VBC Logo', './img/vbc logo.png'));
Images.allImages.push(new Images('Vision Logo', './img/vision logo.jpg'));

