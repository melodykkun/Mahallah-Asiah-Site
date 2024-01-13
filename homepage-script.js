function myFunction() {
  document.getElementById("button1").innerHTML =
    "https://docs.google.com/document/d/1JfOQje5Dv_iGOaQvwVBwE2Ck-4w_8kSg/edit?usp=sharing&ouid=110033509996032158751&rtpof=true&sd=true";
}
function shiftLeft() {
  const boxes = document.querySelectorAll(".box");
  const tmpNode = boxes[0];
  boxes[0].className = "box move-out-from-left";
  setTimeout(function () {
    if (boxes.length > 5) {
      tmpNode.classList.add("box--hide");
      boxes[5].className = "box move-to-position5-from-left";
    }
    boxes[1].className = "box move-to-position1-from-left";
    boxes[2].className = "box move-to-position2-from-left";
    boxes[3].className = "box move-to-position3-from-left";
    boxes[4].className = "box move-to-position4-from-left";
    boxes[0].remove();
    document.querySelector(".cards__container").appendChild(tmpNode);
  }, 500);
}
function shiftRight() {
  const boxes = document.querySelectorAll(".box");
  boxes[4].className = "box move-out-from-right";
  setTimeout(function () {
    const noOfCards = boxes.length;
    if (noOfCards > 4) {
      boxes[4].className = "box box--hide";
    }
    const tmpNode = boxes[noOfCards - 1];
    tmpNode.classList.remove("box--hide");
    boxes[noOfCards - 1].remove();
    let parentObj = document.querySelector(".cards__container");
    parentObj.insertBefore(tmpNode, parentObj.firstChild);
    tmpNode.className = "box move-to-position1-from-right";
    boxes[0].className = "box move-to-position2-from-right";
    boxes[1].className = "box move-to-position3-from-right";
    boxes[2].className = "box move-to-position4-from-right";
    boxes[3].className = "box move-to-position5-from-right";
  }, 500);
}
const carousel = document.querySelector(".carousel");
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;

carousel.addEventListener("mousedown", startDragging);
carousel.addEventListener("touchstart", startDragging);
carousel.addEventListener("mouseup", endDragging);
carousel.addEventListener("touchend", endDragging);
carousel.addEventListener("mousemove", drag);
carousel.addEventListener("touchmove", drag);

function startDragging(e) {
  e.preventDefault();
  isDragging = true;
  startPosition = getPositionX(e);
}

function endDragging() {
  isDragging = false;
  const movedBy = currentTranslate - previousTranslate;

  if (movedBy < -100) {
    navigate(1); // Move to the next item
  }

  if (movedBy > 100) {
    navigate(-1); // Move to the previous item
  }

  setTransform();
}

function drag(e) {
  if (isDragging) {
    const currentPosition = getPositionX(e);
    currentTranslate = previousTranslate + currentPosition - startPosition;
    setTransform();
  }
}

function getPositionX(e) {
  return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

function setTransform() {
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

function navigate(direction) {
  if (direction === 1) {
    currentTranslate -= carousel.offsetWidth;
  } else if (direction === -1) {
    currentTranslate += carousel.offsetWidth;
  }
}
