// Get Slider Items | 
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));


// Get Number of Slides

let slidesCount = sliderImages.length;

// set Current Slide 

let currentSlide = 1;

// Slide Number String Element

let slideNumberElement = document.getElementById('slider-number');

// Previous and Next Buttom

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');


// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Creat The Main Ul Element

let paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based on Slides Count

for (let i = 1; i <= slidesCount; i++) {

    // CReate The Li
    let paginationItems = document.createElement('li');
    // set Custom Attribute
    paginationItems.setAttribute('data-index', i);

    // Set item content
    paginationItems.appendChild(document.createTextNode(i));


    // Append Items to The Main Ul
    paginationElement.appendChild(paginationItems);

}

// Add The Create Ul Element to the page
document.getElementById('indicators').appendChild(paginationElement);






// Get The New Created ul
let paginationCreUl = document.getElementById('pagination-ul');

// Get pagination Items | 
let paginationBullests = Array.from(document.querySelectorAll('#pagination-ul li'));

for (let i = 0; i < paginationBullests.length; i++) {
    
    paginationBullests[i].onclick = function () {
    
        currentSlide = parseInt(currentSlide = this.getAttribute('data-index'));
        theChecker();

    }
}



// Trigger The Checker Function
theChecker();


// function nextSlide
  
function nextSlide() {
if (nextButton.classList.contains('disabled')) {
    return false;
} else {
    currentSlide++;
    theChecker();
}
}

// function nextSlide
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
    return false;
} else {
    currentSlide--;
    theChecker();
}
}

// Create The Checker Function
function theChecker() {
    // Set The Slide Number 

    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

// Remove All Active
    removeAllActive()
    

    //  Set Active Class on Current Slide
    sliderImages[currentSlide - 1].classList.add('active');
    // set Active Class on Current Pagination Item
    paginationCreUl.children[currentSlide - 1].classList.add('active');

    // Check If Current slide is the frist
    if (currentSlide == 1) {
        prevButton.classList.add('disabled');
    } else {
                prevButton.classList.remove('disabled');
    }
    if (currentSlide == slidesCount) {

        nextButton.classList.add('disabled');

    } else {
                nextButton.classList.remove('disabled');
    }
}


//  Remove All Active Classes From Images and Pagination Bullets

function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });

// Loop Through Pagination Bullets

paginationBullests.forEach(function (bullet) {
    bullet.classList.remove('active');
});
}


