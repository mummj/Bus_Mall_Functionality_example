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

let img1 = null;
let img2 = null;
let img3 = null;

//Constructor function
function Images(name, imgPath){
    this.name = name;
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



//Image Prototype that takes in the imgage and the name. 
Images.prototype.renderImages = function(image, title){
    image.src = this.imgPath;
    title.textContent = this.img;
    this.views ++;
}

//Randomizes all of the items in the array using the .sort function.
function randomizeArray(){
let myArray = Images.allImages;
let randomArray = myArray.sort(function(){return (Math.random()-0.5)});
console.log(randomArray)
}

//Get 3 images on reset
function getThreeImages(){
    randomizeArray();
  let img1 = Images.allImages[0];
  let img2 = Images.allImages[1];
  let img3 = Images.allImages[2];
    img1.renderImages(imgContainer1, imgTitle1);
    img2.renderImages(imgContainer2, imgTitle2);
    img3.renderImages(imgContainer3, imgTitle3);
};



getThreeImages();
