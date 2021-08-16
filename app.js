
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
    
















