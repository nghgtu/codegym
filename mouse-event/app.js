// let imgObj = null;
let imgObj = document.getElementById('myImage');
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.width = '10%';
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

window.onload = init;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        event.preventDefault();
        moveRight();
    }
})