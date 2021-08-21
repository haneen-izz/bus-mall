
 'use strict';
 
 let attemptEl = document.getElementById('attempts');
 let container = document.getElementById('image-container');
 let leftImg = document.getElementById('leftImg');
 let rightImg = document.getElementById('rightImg');
 let middleImg = document.getElementById('middleImg');
 let result = document.getElementById('results');
 
  let productsImg = ['bag.jpg', 'banana.jpg', 'breakfast.jpg', 'bathroom.jpg', 'boots.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg ', 'unicorn.jpg', 'water-can.jpg ', 'wine-glass.jpg'];
 
 
 
 let attempt = 1
 let maxAttempts = 25;
 let products = [];
 let productsArray = [];
 let view = [];
 let vote = [];
 
 let ulEl = document.getElementById('products');
 function saveToLocalStorage() {
   
     let data = JSON.stringify(products);
     localStorage.setItem('busMall', data);
 
 }
 function readFromLocalStorage() {
     let stringObject = localStorage.getItem('busMall');
     let normalObject = JSON.parse(stringObject);
     if (normalObject) {
         products = normalObject;
         renderImg();
     }
 }
 function ProductImages(busName) {
     this.bName = busName.split('.')[0];
     this.bImg = `images/${busName}`;
     this.votes = 0;
     this.views = 0;
     products.push(this);
     productsArray.push(this.bName);
 }
 for (let i = 0; i < productsImg.length; i++) {
     new ProductImages(productsImg[i]);
     console.log(productsImg[i]);
 }
 function randomImage() {
     return Math.floor(Math.random() * products.length);
 }
 let leftIndex;
 let rightIndex;
 let middleIndex;
 let random = [];
 
 function renderImg() {
     while (leftIndex === middleIndex || middleIndex === rightIndex ||leftIndex === rightIndex || random.includes(leftIndex) || random.includes(middleIndex) || random.includes(rightIndex)) {
 
         leftIndex = randomImage();
         rightIndex = randomImage();
         middleIndex = randomImage();
     }
     random[0] = (leftIndex);
     random[1] = (rightIndex);
     random[2] = (middleIndex);
     
     leftImg.setAttribute('src', products[leftIndex].bImg);
     rightImg.setAttribute('src', products[rightIndex].bImg);
     middleImg.setAttribute('src', products[middleIndex].bImg);
 
     products[leftIndex].views++;
     products[rightIndex].views++;
     products[middleIndex].views++;
 }
 
 renderImg();
 leftImg.addEventListener('click', clickHandler);
 middleImg.addEventListener('click', clickHandler);
 rightImg.addEventListener('click', clickHandler);
 
 let button = document.getElementById('button');
 function clickHandler(event) {
     if (attempt <= maxAttempts) {
         button.addEventListener('click', getResult);
         let clickedImage = event.target.id;
         if (clickedImage === 'leftImg') {
             products[leftIndex].votes++;
         } else if (clickedImage === 'rightImg') {
             products[rightIndex].votes++;
         } else if (clickedImage === 'middleImg') {
             products[middleIndex].votes++;
         }
         renderImg();
         attempt++;
 
     } else {
         leftImg.removeEventListener('click', clickHandler);
         rightImg.removeEventListener('click', clickHandler);
         middleImg.removeEventListener('click', clickHandler);
     }
 }
 
 
 
 function getResult() {
     for (let i = 0; i < products.length; i++) {
         let liEl = document.createElement('li');
         result.appendChild(liEl);
         liEl.textContent = `${products[i].bName} has ${products[i].votes} votes and ${products[i].views} views.`;
         vote.push(products[i].votes);
         view.push(products[i].views);
     }
     button.removeEventListener('click', getResult);
     saveToLocalStorage();
     chartRender();
 }
 function chartRender() {
     let ctx = document.getElementById('myChart').getContext('2d');
     let myChart = new Chart(ctx, {
         type: 'bar',
         data: {
             labels: productsArray,
             datasets: [{
                 label: '# of Votes',
                 data: vote,
                 backgroundColor: [
                     'rgba(255, 99, 132, 0.2)'
                 ],
                 borderColor: [
                     'rgba(255, 99, 132, 1)'
                 ],
                 borderWidth: 1
             }, {
                 label: '# of views',
                 data: view,
                 backgroundColor: [
                     'rgba(54, 162, 235, 0.2)'
                 ],
                 borderColor: [
                     'rgba(54, 162, 235, 1)'
                 ],
                 borderWidth: 1
             }]
         },
         options: {
             scales: {
                 y: {
                     beginAtZero: true
                 }
             }
         }
     });
 }
 readFromLocalStorage();