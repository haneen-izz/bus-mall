
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































// let attemptEl = document.getElementById('attempts');
// let container = document.getElementById('container');
// let leftImg = document.getElementById('leftImg');
// let middleImg = document.getElementById('middleImg');
// let rightImg = document.getElementById('rightImg');
// let result = document.getElementById('results');



// let pImage = ['bag.jpg', 'banana.jpg', 'breakfast.jpg', 'bathroom.jpg', 'boots.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg ', 'unicorn.jpg', 'water-can.jpg ', 'wine-glass.jpg'];

// let maxAttempt = 25;
// let productArray = [];
// let attempt = 1;
// let votes = [];
// let views = [];
// let images = [];

// function ProductImag(productName) {

//     this.productName = productName.split('.')[0];
//     this.productImage = `images/${productName}`;
//     this.votes = 0;
//     this.views = 0;
//     images.push(this.productName);
//     productArray.push(this);

// }
//     for (let i = 0; i < pImage.length; i++) {
//         new ProductImag(pImage[i]);
//     }
    
    
//     function randomProduct() {
//         return Math.floor(Math.random() * productArray.length);
    
//     }
    

//     let leftIndex;
//     let middleIndex;
//     let rightIndex;
    
    
//     let round = [];
//     function renderProduct() {
//         rightIndex = randomProduct();
//         middleIndex = randomProduct();
//         leftIndex = randomProduct();


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
let votes = [];
let views = [];
let images = [];

function ProductImag(productName) {

    this.productName = productName.split('.')[0];
    this.productImage = `images/${productName}`;
    this.votes = 0;
    this.views = 0;
    images.push(this.productName);
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
    
    
    let round = [];
    function renderProduct() {
        rightIndex = randomProduct();
        middleIndex = randomProduct();
        leftIndex = randomProduct();
      
    
    

//         while (leftIndex === middleIndex || middleIndex === rightIndex || rightIndex === leftIndex || round.includes(rightIndex) || round.includes(leftIndex)|| round.includes(middleIndex)) {
    
//             leftIndex = randomProduct();
//             rightIndex = randomProduct();
//             middleIndex = randomProduct();
//         }
//       round = [];
//       round[0]= leftIndex;
//       round[1]= rightIndex;
//       round[2]= middleIndex;

//         rightImg.setAttribute('src', productArray[rightIndex].productImage);
//         middleImg.setAttribute('src', productArray[middleIndex].productImage);
        
//         leftImg.setAttribute('src', productArray[leftIndex].productImage);

    
//         productArray[leftIndex].views++;
//         productArray[middleIndex].views++;
//         productArray[rightIndex].views++;
    
//     }
//     renderProduct (); 
    
    
//     leftImg.addEventListener('click', clickHandler);
//     middleImg.addEventListener('click', clickHandler);
//     rightImg.addEventListener('click', clickHandler);
    
    
    
//     function clickHandler(event) {
//         if()
    
//         if (attempt <= maxAttempt) {
    
//             let clickedImg = event.target.id;
//             if (clickedImg === 'rightImg') {
//                 productArray[leftIndex].votes++;
    
//             }
    
//             else if (clickedImg === 'middleImg') {
//                 productArray[middleIndex].votes++
    
//             }
    
    
    
//             else if (clickedImg === 'leftImg' ) {
//                 productArray[rightIndex].votes++
    
//             }
    
    
    
//             renderProduct();
//             attempt++;
    
    
    
//         }
    
//     }
    
    
    
//     let button1 = document.getElementById('button');
//     button1.addEventListener('click', showResult);
    
    
//     let array= [];  
//       function showResult() {
//         for (let i = 0; i < productArray.length; i++) {
//             let liEl = document.createElement('li');
//             result.appendChild(liEl)
//             liEl.textContent = `${productArray[i].productName} has ${productArray[i].votes} votes and  ${productArray[i].views} views.`;

//             votes.push(productArray[i].votes);
//             views.push(productArray[i].views);
//             array.push(productArray[i].productImage);
//          document.getElementById('button').style.display ='none';
       
             

//         }
//         }
//         chartRender();


//     function chartRender() {
//         let ctx = document.getElementById('myChart').getContext('2d');
//         let myChart = new Chart(ctx, {
//             type : 'bar',
//             data: {
//                 labels: images,
//                 datasets: [{
//                     label: '# of Votes',
//                     data: votes,
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)'
//                     ],
//                     borderWidth: 1
//                 }, {
//                     label: '# of views',
//                     data: views,
//                     backgroundColor: [
//                         'rgba(54, 162, 235, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(54, 162, 235, 1)'
//                     ],
//                     borderWidth: 1
     
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
//     }
//     chartRender();
    


        while (leftIndex === middleIndex || middleIndex === rightIndex || rightIndex === leftIndex || round.includes(rightIndex) || round.includes(leftIndex)|| round.includes(middleIndex)) {
    
            leftIndex = randomProduct();
            rightIndex = randomProduct();
            middleIndex = randomProduct();
        }
      round = [];
      round[0]= leftIndex;
      round[1]= rightIndex;
      round[2]= middleIndex;

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
    
    
    let array= [];  
      function showResult() {
        for (let i = 0; i < productArray.length; i++) {
            let liEl = document.createElement('li');
            result.appendChild(liEl)
            liEl.textContent = `${productArray[i].productName} has ${productArray[i].votes} votes and  ${productArray[i].views} views.`;

            votes.push(productArray[i].votes);
            views.push(productArray[i].views);
            array.push(productArray[i].productImage);
    
    
        }
        }
    

    function chartRender() {
        let ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type : 'bar',
            data: {
                labels: pImage,
                datasets: [{
                    label: '# of Votes',
                    data: votes,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: '# of views',
                    data: views,
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
    chartRender();
    


//     let attemptEl = document.getElementById('attempts');
//     let container = document.getElementById('container');
//     let middleImg = document.getElementById('middleImg');
//     let leftImg = document.getElementById('leftImg');
//     let rightImg = document.getElementById('rightImg');
//     let result = document.getElementById('results');
    
     
//     let pImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg',
//      'water-can.jpg', 'wine-glass.jpg'];
    
     
//     let attempt = 1;
//     let maxAttempts = 25;
//     let productsArray = [];
//     let products = [];
//     let votes = [];
//     let views = []; 
   
     
//     let ulEl = document.getElementById('products');
    
     
//     function saveToLocalStorage(){
//     let data = JSON.stringify(products);
//     localStorage.setItem('busMall', data);
    
     
//     }
    
//     function readFromLocalStorage(){ 
//     let stringObject = localStorage.getItem('busMall');
//     let normalObject = JSON.parse(stringObject);
    

//     if(normalObject){
//     products = normalObject;
//     renderImg();
    
     
//     }
//     }
    
//     function productImg(productNames) {
//     this.productNames = productNames.split('.')[0];
//     this.pImg = `images/${productNames}`;
//     this.votes = 0;
//     this.views = 0;
//     products.push(this);
//     productsArray.push(this.productNames);
    

//     }
    
//     for (let i = 0; i < pImg.length; i++) {
//     new productImg(pImg[i]);
//     console.log(pImg[i]);
    
     
//     }
     
//     function randomImage() {
//     return Math.floor(Math.random() * products.length);
    
     
//     }
    

     
//     let leftIndex;
//     let middleIndex;
//     let rightIndex;
//     let random =[];
    
     
//  function renderImg() {
    
//      while (leftIndex === middleIndex ||middleIndex === rightIndex ||leftIndex === rightIndex ||random.includes(leftIndex) || random.includes(middleIndex) || random.includes(rightIndex)) {
    
//     leftIndex = randomImage();
//     middleIndex = randomImage();
//     rightIndex = randomImage();
   
    
     
//     }
    
     
//     random[0]=(leftIndex);
//     random[1]=(rightIndex);
//     random[2]=(middleIndex);
    
     
//     leftImg.setAttribute('src', products[leftIndex].pImg);
//     rightImg.setAttribute('src', products[rightIndex].pImg);
//     middleImg.setAttribute('src', products[middleIndex].pImg);
    
     
    
//     products[leftIndex].views++;
//     products[rightIndex].views++;
//     products[middleIndex].views++;
    
     
//     }
    
//     renderImg();
    
     
     
//     leftImg.addEventListener('click', clickHandler);
//     rightImg.addEventListener('click', clickHandler);
//     middleImg.addEventListener('click', clickHandler);
    
    
     
//     function clickHandler(event) {
     
//     if (attempt <= maxAttempts) {
//     let clickedImg = event.target.id;

//     if (clickedImg  === 'leftImg') {

//     products[leftIndex].votes++;
//     } 
//     else if (clickedImg  === 'rightImg') {
//    products[rightIndex].votes++;
//     }
//      else if (clickedImg === 'middleImg') {
//     products[middleIndex].votes++;
    
     
//     }
    
     
//     renderImg();
//     attempt++;  
//     saveToLocalStorage();

//     } else {
//     leftImg.removeEventListener('click', clickHandler);     
//     middleImg.removeEventListener('click', clickHandler);
//     rightImg.removeEventListener('click', clickHandler);
    

     
//     } 
//     }
    
     
//     function getResult() {
     
//     for (let i = 0; i < products.length; i++) {
//     let liEl = document.createElement('li');
     
//     result.appendChild(liEl);
//     liEl.textContent = `${products[i].productNames} has ${products[i].votes} votes and ${products[i].views} views.`;
//     votes.push(products[i].votes);
//     views.push(products[i].views);
    
//     }
//     chartRender();

//     }
    
     
    
//     function chartRender() {
//     let ctx = document.getElementById('myChart').getContext('2d');
//     let myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//     labels: productsArray,
//     datasets: [{
//     label: '# of Votes',
//     data: vote,
//     backgroundColor: [
//     'rgba(255, 99, 132, 0.2)'
//     ],
//     borderColor: [
//   'rgba(255, 99, 132, 1)'
    
     
//     ],
//     borderWidth: 1
//     }, {
//     label: '# of views',
//     data: view,
//     backgroundColor: [
//     'rgba(54, 162, 235, 0.2)'
//     ],
//     borderColor: [
//     'rgba(54, 162, 235, 1)' 
//     ],

//     borderWidth: 1 }]
    
//     },
    
     
//     options: {
//     scales: {
//     y: {
//     beginAtZero: true
    
     
//     }
    
     
//       }
//     }
//     });
//     }
//     readFromLocalStorage();









