var turn = 0;

let b = document.getElementById("tic-tac-toe");

let board = [];
let data = "";
// for (let i = 0; i < 5; i++) {
//     board[i] = new Array(0, 0, 0, 0, 0);
// }

// for (let i = 0; i < 5; i++) {
//     data += "<br/>";
//     for (let j = 0; j < 5; j++) {
//         board[i][j] = "(.)";
//         data += board[i][j] + "&nbsp;&nbsp;";
//     }
// }

// b.innerHTML = data;

// function checkAdjacent(i, j) {  
//     if (i < 0 || i >= 5 || j < 0 || j >= 5) {
//         return false;
//     }
//     return board[i][j] !== "(.)";
// }

// function checkWinner(player, x, y) {
//     // horizontal
//     if (board[x][y-2] === player && board[x][y-1] === player) {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
//     if (board[x][y-1] === player && board[x][y+1] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
//     if (board[x][y+1] === player && board[x][y+2] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
    
//     // vertical
//     if (board[x-2][y] === player && board[x-1][y] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
//     if (board[x-1][y] === player && board[x+1][y] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
//     if (board[x+1][y] === player && board[x+2][y] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }

//     // diagonal 
//     if (board[x-2][y-2] === player && board[x-1][y-1] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
//     if (board[x-1][y+1] === player && board[x+1][y-1] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
//     if (board[x-2][y+2] === player && board[x-1][y+1] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
//     if (board[x+2][y-2] === player && board[x+1][y-1] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
//     if (board[x-1][y-1] === player && board[x+1][y+1] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
//     if (board[x+1][y+1] === player && board[x+2][y+2] === player)  {
//         alert(`Nguoi choi ${player} da thang!!!`);
//             return;
//     }
// }

// function changeValue() {
//     if (turn === 0) {
//         let positionX, positionY;
//         do {
//             positionX = +prompt("Player 1 move X: ");
//             positionY = +prompt("Player 1 move Y: ");
//             if (board[positionX][positionY] !== "(.)") {
//                 alert("Vi tri ${positionX} , ${positionY} ko hop le. Vui long nhap lai.");
//                 continue;
//             }
//             break;
//         }
//         while (true);

//         data = "";
//         board[positionX][positionY] = "o";
//         for (let i = 0; i < 5; i++) {
//             data += "<br/>";
//             for (let j = 0; j < 5; j++) {
//                 data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
//             }
//         }
//         b.innerHTML = "<hr/>" + data;
//         turn = 1;
//         checkWinner("o", positionX, positionY);
//         } else {
//             let positionX, positionY;
//             do {
//                 positionX = +prompt("Player 1 move X: ");
//                 positionY = +prompt("Player 1 move Y: ");
//                 if (board[positionX][positionY] !== "(.)") {
//                     alert("Vi tri ${positionX} , ${positionY} ko hop le. Vui long nhap lai.");
//                     continue;
//                 }
//                 break;
//             }
//             while (true);
//                 data = "";
//                 board[positionX][positionY] = "x";
//             for (let i = 0; i < 5; i++) {
//                 data += "<br/>";
//                 for (let j = 0; j < 5; j++) {
//                     data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
//                 }
//             }
//             b.innerHTML = "<hr/>" + data;
//             turn = 0;
//             checkWinner("x", positionX, positionY);
//     }
// }

class Cell{
    constructor(x=0, y=0, value="") {
        this.x = x;
        this.y = y;
        this.value = value;
    }

    checkWinner() {
        let i = this.x;
        let j = this.y;
        let count = 1;
        // horizontal
        
    }
}

// function checkWinner(i, j) {
    
// }

function mark(e) {
    if (e.innerHTML !== "") {
        alert("Cell is not empty!")
        return;
    }  
    if (turn === 0) {
        e.innerHTML = '<span style="color: blue">X</span>';
        turn = 1;
    } else {
        e.innerHTML = '<span style="color: red">O</span>';
        turn = 0;
    }
    
}

for (let i = 1; i <= 20; i++) {
    data += `<tr>`;
    for (let j = 1; j <= 20; j++) {
        data += `
            <td
                id="${i}-${j}"
                onclick="
                mark(this);

                "
            ></td>
            `;
    }
    data += '</tr>';
}

b.innerHTML += data;