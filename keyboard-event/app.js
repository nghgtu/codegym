

// let imgObj = null;
let imgObj = document.getElementById('nobita');
function init() {
    imgObj = document.getElementById('nobita');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
    // imgObj.style.width = '10%';
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

function moveLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
}

function moveUp() {
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
}

function moveDown() {
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
}

window.onload = init;

window.addEventListener("keydown", (event) => {
    switch (event.key) {

    case "ArrowRight": 
        event.preventDefault();
        moveRight();
        break;

    case "ArrowLeft":
        event.preventDefault();
        moveLeft();
        break;

    case "ArrowUp":
        event.preventDefault();
        moveUp();
        break;

    case "ArrowDown": 
        event.preventDefault();
        moveDown();
        break;
    }
})

// alert(window.KeyboardEvent);