// Selecting the required elements from the DOM
let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg");
let line = document.getElementById("line");

// Setting the initial width of the original image to match the image box
originalImg.style.width = imgBox.offsetWidth + 'px';

// Storing the left offset of the image box
let leftSpace = imgBox.offsetLeft;

// Adding an event listener for mousemove on the image box
imgBox.onmousemove = function(e){
    // Getting the current X coordinate of the mouse pointer
    e.pageX;
    // Calculating the width of the image wrap based on mouse movement
    let boxWidth = (e.pageX - leftSpace)+'px';
    // Setting the width of the image wrap to adjust the visible portion of the image
    imgWrap.style.width = boxWidth;
    // Moving the line indicator along with the image wrap
    line.style.left = boxWidth;
}
