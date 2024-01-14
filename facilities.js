//Header

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const repeat = false;
const noArrows = false;
const noBullets = false;

//everything about the slider is here TT

const container = document.querySelector('.slider-container');
var slide = document.querySelectorAll('.slider-single');
var slideTotal = slide.length - 1;
var slideCurrent = -1;

function initBullets() {
    if (noBullets) {
        return;
    }
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container')
    slide.forEach((elem, i) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet')
        bullet.id = `bullet-index-${i}`
        bullet.addEventListener('click', () => {
            goToIndexSlide(i);
        })
        bulletContainer.appendChild(bullet);
        elem.classList.add('proactivede');
    })
    container.appendChild(bulletContainer);
}

function initArrows() {
    if (noArrows) {
        return;
    }
    const leftArrow = document.createElement('a')
    const iLeft = document.createElement('i');
    iLeft.classList.add('fa')
    iLeft.classList.add('fa-arrow-left')
    leftArrow.classList.add('slider-left')
    leftArrow.appendChild(iLeft)
    leftArrow.addEventListener('click', () => {
        slideLeft();
    })
    const rightArrow = document.createElement('a')
    const iRight = document.createElement('i');
    iRight.classList.add('fa')
    iRight.classList.add('fa-arrow-right')
    rightArrow.classList.add('slider-right')
    rightArrow.appendChild(iRight)
    rightArrow.addEventListener('click', () => {
        slideRight();
    })
    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
}

function slideInitial() {
    initBullets();
    initArrows();
    setTimeout(function () {
        slideRight();
    }, 500);
}

function updateBullet() {
    if (!noBullets) {
        document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent) {
                elem.classList.add('active');
            }
        })
    }
    checkRepeat();
}

function checkRepeat() {
    if (!repeat) {
        if (slideCurrent === slide.length - 1) {
            slide[0].classList.add('not-visible');
            slide[slide.length - 1].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-right').classList.add('not-visible')
                document.querySelector('.slider-left').classList.remove('not-visible')
            }
        }
        else if (slideCurrent === 0) {
            slide[slide.length - 1].classList.add('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.add('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        } else {
            slide[slide.length - 1].classList.remove('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.remove('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        }
    }
}

function slideRight() {
    if (slideCurrent < slideTotal) {
        slideCurrent++;
    } else {
        slideCurrent = 0;
    }

    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];

    }

    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('preactivede')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('preactive')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });
    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function slideLeft() {
    if (slideCurrent > 0) {
        slideCurrent--;
    } else {
        slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('proactive')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('proactivede')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });

    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function goToIndexSlide(index) {
    const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
    while (slideCurrent !== index) {
        sliding();
    }
}

slideInitial();

//Start popup see more

const kotak1 = document.querySelector(".kotak1");
const kotak2 = document.querySelector(".kotak2");
const kotak3 = document.querySelector(".kotak3");
const kotak4 = document.querySelector(".kotak4");
const kotak5 = document.querySelector(".kotak5");
const kotak6 = document.querySelector(".kotak6");

const popup1 = document.querySelector(".popup-box1");
const popup2 = document.querySelector(".popup-box2");
const popup3 = document.querySelector(".popup-box3");
const popup4 = document.querySelector(".popup-box4");
const popup5 = document.querySelector(".popup-box5");
const popup6 = document.querySelector(".popup-box6");

const popupCloseButton1 = popup1.querySelector(".popup-close-button");
const popupCloseButton2 = popup2.querySelector(".popup-close-button");
const popupCloseButton3 = popup3.querySelector(".popup-close-button");
const popupCloseButton4 = popup4.querySelector(".popup-close-button");
const popupCloseButton5 = popup5.querySelector(".popup-close-button");
const popupCloseButton6 = popup6.querySelector(".popup-close-button");

const popupCloseIcon1 = popup1.querySelector(".popup-close-icon");
const popupCloseIcon2 = popup2.querySelector(".popup-close-icon");
const popupCloseIcon3 = popup3.querySelector(".popup-close-icon");
const popupCloseIcon4 = popup4.querySelector(".popup-close-icon");
const popupCloseIcon5 = popup5.querySelector(".popup-close-icon");
const popupCloseIcon6 = popup6.querySelector(".popup-close-icon");

kotak1.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        popupBox1();
    }
})
kotak2.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        popupBox2();
    }
})
kotak3.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        popupBox3();
    }
})
kotak4.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        popupBox4();
    }
})
kotak5.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        popupBox5();
    }
})
kotak6.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        popupBox6();
    }
})

popupCloseButton1.addEventListener("click", popupBox1);
popupCloseIcon1.addEventListener("click", popupBox1);

popupCloseButton2.addEventListener("click", popupBox2);
popupCloseIcon2.addEventListener("click", popupBox2);

popupCloseButton3.addEventListener("click", popupBox3);
popupCloseIcon3.addEventListener("click", popupBox3);

popupCloseButton4.addEventListener("click", popupBox4);
popupCloseIcon4.addEventListener("click", popupBox4);

popupCloseButton5.addEventListener("click", popupBox5);
popupCloseIcon5.addEventListener("click", popupBox5);

popupCloseButton6.addEventListener("click", popupBox6);
popupCloseIcon6.addEventListener("click", popupBox6);

function popupBox1(){
    popup1.classList.toggle("open");
}
function popupBox2(){
    popup2.classList.toggle("open");
}
function popupBox3(){
    popup3.classList.toggle("open");
}
function popupBox4(){
    popup4.classList.toggle("open");
}
function popupBox5(){
    popup5.classList.toggle("open");
}
function popupBox6(){
    popup6.classList.toggle("open");
}
