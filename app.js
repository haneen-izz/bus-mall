'use strict';
let attemptEl = document.getElementById('attempts');
let container = document.getElementById('image-container');
let leftImg = document.getElementById('leftImg');
let middleImg = document.getElementById('middleImg');
let rightImg = document.getElementById('rightImg');
let result = document.getElementById('results');

let productsImg = ['bag.jpg','banana.jpg', 'bathroom.jpg','boots.jpg', 'breakfast.jpg','bubblegum.jpg', 'chair.jpg' ,'cthulhu.jpg' ,'dog-duck.jpg', 'dragon.jpg' ,'pen.jpg', 'pet-sweep.jpg','scissors.jpg', 'shark.jpg','sweep.png','tauntaun.jpg ', 'unicorn.jpg',
'water-can.jpg ','wine-glass.jpg'  ];
let products= [];
let attempt = 1;
let maxAttempt = 25;


function ProductImg(productName){
this.productName = productName.split('')[0];
this.productImg = `images/${productName}`;
this.votes = 0 ;
this.views = 0;
products.push(this);
}
for(let i = 0 ; i < productsImg.length; i++){
new ProductImg(productsImg[i]);

}
function randomProduct(){
return Math.floor(Math.random()*products.length);
}

let leftIndex;
let middleIndex;
let rightIndex;
function renderProduct(){
leftImg =  randomProduct();
middleImg = randomProduct();
rightImg = randomProduct();

while(leftIndex === rightIndex){
leftIndex = randomProduct();
}
while(leftIndex === middleIndex) {
leftIndex = randomProduct();

}
while(middleIndex === rightIndex) {
    leftIndex = randomProduct();
    
}
leftImg.setAttribute("src" , products[leftIndex].leftImg);
middleImg.setAttribute("src", products[middleIndex].middleImg );
rightImg.setAttribute("src" , products[rightIndex].rightImg);

products[leftIndex].views++;
products[middleIndex].views++;
products[rightIndex].views++;
}
renderProduct();
leftImg.addEventListener('click', clickHandler );
middleImg.addEventListener('click', clickHandler);
rightImg.addEventListener('click', clickHandler);

function clickHandler(event){
if(attempt <= maxAttempt){
let clickedImg = event.target.middleImg;
if(clickedImg === 'leftImg'){
products[leftIndex].votes++;
}
else if(clickedImg === 'middleImg'){
products[middleIndex].votes++
}
else if(clickedImg === 'rightImg'){
products[rightIndex].votes++
}
renderImg();
attempt++;

}else {
leftImg.removeEventListener('click', clickHandler );
middleImg.removeEventListener('click', clickHandler);
rightImg.removeEventListener('click', clickHandler);
}
}
function getResult(){
for(let i = 0 ; i< products.length ;i++){
let liEl = document.createElement('li');
result.appendChild(liEl);
liEl.textContent = `${products[i].productName} has ${products[i].votes} votes and  ${products[i].views} views.`;
}
}
















