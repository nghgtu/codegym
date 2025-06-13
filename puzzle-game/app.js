    const WIDTH = 640;
    const HEIGHT = 480;

// let w = document.getElementById("img2").width;
// let h = document.getElementById("img2").height;
// document.getElementById("img2").height = '480px'
// alert(w);
// alert(h);
// // document.getElementById("img1").style.clip = `rect(0px,${w}px,${h/2}px,0px)`;
// // document.getElementById("img1").style.clip = "rect(0px,640px,240px,0px)";
// // document.getElementById("img1").style.clipPath = "inset(0%,100%,50%,0%)";
let IMG2 =  document.getElementById("img2");
alert(IMG2);
document.getElementById("img1").style.cursor = "pointer";
document.getElementById("img1").onclick = () => {
    document.getElementById("img1").innerHTML = IMG2;
}