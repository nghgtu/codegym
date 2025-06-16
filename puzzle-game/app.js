const img1 = "images/random_img_1.jpg";
const img2 = "images/random_img_2.jpg";
const img3 = "images/random_img_3.jpg";
const img4 = "images/random_img_4.jpg";  
const img5 = "images/random_img_5.jpg";

document.getElementById("_container").addEventListener("click", check = () => {
    // const images = ["", img1, img2, img3, img4, img5];
    let correct = false;
    let swapSrc1 = document.getElementById("imgswap1").src;
    for(let i = 2; i <= 5; i++) {
        const imgsrc = document.getElementById(`imgswap${i}`).src;
        if (imgsrc === swapSrc1 && i === 5) {
            correct = true;
            break;
        }
    }

    if (correct) {
        // document.getElementById("result").innerHTML = "Correct!";
        // document.getElementById("result").style.color = "green";
        alert("Congratulations! You solved the puzzle!");
    } 
    // else {
    //     document.getElementById("result").innerHTML = "Try again!";
    //     document.getElementById("result").style.color = "red";
    // }
});
