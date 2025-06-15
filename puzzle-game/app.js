    // const WIDTH = 640;
    // const HEIGHT = 480;
// let w = document.getElementById("img2").width;
// let h = document.getElementById("img2").height;
// document.getElementById("img2").height = '480px'
// alert(w);
// alert(h);
// // document.getElementById("img1").style.clip = `rect(0px,${w}px,${h/2}px,0px)`;
// // document.getElementById("img1").style.clip = "rect(0px,640px,240px,0px)";
// // document.getElementById("img1").style.clipPath = "inset(0%,100%,50%,0%)";
// using css position and z-index
// switchImg = () => {
//     document.getElementById("img1").innerHTML = IMG2;
// }

function switchImg() {
    let rSeed = Math.floor(Math.random() * 5) + 1;
    
}

let IMG1 = document.getElementById("img1").src;
let IMG2 =  document.getElementById("img2").src;
let IMG3 = document.getElementById("img3").src;
let IMG4 = document.getElementById("img4").src;
let IMG5 = document.getElementById("img5").src;

document.getElementById("img1").style.cursor = "pointer";
document.getElementById("img1").onclick = () => {
    document.getElementById("img1").src = IMG2;
    console.log(document.getElementById("img1"));
};

