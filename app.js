
'use strict';

let attemptEl = document.getElementById('attempts');
let container = document.getElementById('container');
let leftImg = document.getElementById('leftImg');
let middleImg = document.getElementById('middleImg');
let rightImg = document.getElementById('rightImg');
let result = document.getElementById('results');



let pImage = ['bag.jpg', 'banana.jpg', 'breakfast.jpg', 'bathroom.jpg', 'boots.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg ', 'unicorn.jpg', 'water-can.jpg ', 'wine-glass.jpg'];


let maxAttempt = 25;
let productArray = [];
let attempt = 1;

function ProductImag(productName) {

    this.productName = productName.split('.')[0];
    this.productImage = `images/${productName}`;
    this.votes = 0;
    this.views = 0;

    productArray.push(this);

}
    for (let i = 0; i < pImage.length; i++) {
        new ProductImag(pImage[i]);
    }
    
    
    function randomProduct() {
        return Math.floor(Math.random() * productArray.length);
    
    }
    

    let leftIndex;
    let middleIndex;
    let rightIndex;
    
    
    
    function renderProduct() {
        rightIndex = randomProduct();
        middleIndex = randomProduct();
        leftIndex = randomProduct();
      
    
    
    
        while (leftIndex === middleIndex || middleIndex === rightIndex || rightIndex === leftIndex) {
    
            leftIndex = randomProduct();
            rightIndex = randomProduct();
    
        }
    
    
        rightImg.setAttribute('src', productArray[rightIndex].productImage);
        middleImg.setAttribute('src', productArray[middleIndex].productImage);
        leftImg.setAttribute('src', productArray[leftIndex].productImage);
    

    
        productArray[leftIndex].views++;
        productArray[middleIndex].views++;
        productArray[rightIndex].views++;
    
    }
    renderProduct (); 
    
    
    leftImg.addEventListener('click', clickHandler);
    middleImg.addEventListener('click', clickHandler);
    rightImg.addEventListener('click', clickHandler);
    
    
    
    function clickHandler(event) {
    
        if (attempt <= maxAttempt) {
    
            let clickedImg = event.target.id;
            if (clickedImg === 'rightImg') {
                productArray[leftIndex].votes++;
    
            }
    
            else if (clickedImg === 'middleImg') {
                productArray[middleIndex].votes++
    
            }
    
    
    
            else if (clickedImg === 'leftImg' ) {
                productArray[rightIndex].votes++
    
            }
    
    
    
            renderProduct();
            attempt++;
    
    
    
        }
    
    }
    
    
    
    let button1 = document.getElementById('button');
    button1.addEventListener('click', showResult);
    
    
    
    function showResult() {
        for (let i = 0; i < productArray.length; i++) {
            let liEl = document.createElement('li');
            result.appendChild(liEl)
            liEl.textContent = `${productArray[i].productName} has ${productArray[i].votes} votes and  ${productArray[i].views} views.`;
    
    
    
        }
    }
    
















