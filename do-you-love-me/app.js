Yes = () => {
    document.body.innerHTML = "Yes, you are right!";
    document.body.style.backgroundColor = "purple";
}
No = () => {
    let h = window.innerHeight;
    let w = window.innerWidth;
    document.getElementById("no").style.left = Math.floor(Math.random() * (w))  + "px";
    document.getElementById("no").style.top = Math.floor(Math.random() * (h)) + "px";
}