'use strict'
//Proof of life
// console.log('hello world');

//Variables pulled from HTML
const mainContainer = document.getElementById('imgDiv')
const imgContainer1 = document.getElementById('img1');
const imgContainer2 = document.getElementById('img2');
const imgContainer3 = document.getElementById('img3');
const imgTitle1 = document.getElementById('img1title');
const imgTitle2 = document.getElementById('img2title');
const imgTitle3 = document.getElementById('img3title');
let count = 0;

//Constructor function
function Images(name, imgPath){
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.views = 0;
}

//empty array for created constructor images to be placed into
Images.allImages = [];

//List of new images created using the constructor function and pushed into the images array above
Images.allImages.push(new Images('CC Logo', './img/CC logo.png'));
Images.allImages.push(new Images('Cowboy Logo', './img/cowboy mascot.png'));
Images.allImages.push(new Images('Gym Pic', './img/Gym Picture.jpg'));
Images.allImages.push(new Images('VBC Logo', './img/vbc logo.png'));
Images.allImages.push(new Images('Vision Logo', './img/vision logo.jpg'));



//Image Prototype that takes in the imgage and the name. 
Images.prototype.renderImages = function(image, title){
    image.src = this.imgPath;
    title.textContent = this.name;
    this.views ++;
}

//Randomizes all of the items in the array using the .sort function.
function randomizeArray(){
let myArray = Images.allImages;
let randomArray = myArray.sort(function(){return (Math.random()-0.5)});
// console.log(randomArray)
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

// Put array into local storage
function putArrayInStorage(){
    let stringArray = JSON.stringify(Images.allImages);
    if (stringArray = []){
        localStorage.setItem('images', stringArray);
    }
    else(localStorage.setItem('images', stringArray));
}

//Get images from storage
function getArrayFromStorage(){
    let storedImage = localStorage.getItem('images');
    if(storedImage){
        let newImage = JSON.parse(storedImage);
        for(let images of newImage){
            let myNewImage = new Images(images.name, images.imgPath, images.views, images.clicks);
            Images.allImages.push(myNewImage)
        }
    }
}

//Function to remove images from the applicaiton
function removeImages(){
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
}

// Function to change images on click. 
function handleClick(e){
    let imageClicked = e.target.id;
    if(imageClicked === 'img1' || imageClicked === 'img2' || imageClicked === 'img3'){
        mainContainer.views++;
        count++;
    }
    if(imageClicked === 'img1'){
        imgContainer1.clicks++;
    }    
    if(imageClicked === 'img2'){
        imgContainer2.clicks++;
    }
    if(imageClicked === 'img3'){
        imgContainer3.clicks++;
    } 
    getThreeImages(); 
    putArrayInStorage();
    if (count === 5){
        removeImages();
        document.write('<h1>The test is over now</h1>');
        console.log(localStorage);
    }
    
}



mainContainer.addEventListener('click', handleClick);
// console.log(Images.allImages);  
getArrayFromStorage();
getThreeImages();
