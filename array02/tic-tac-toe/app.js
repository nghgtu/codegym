let b = document.getElementById("tic-tac-toe");

let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = new Array(0, 0, 0, 0, 0);
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        board[i][j] = "(.)";
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

b.innerHTML = data;

// function checkAdjacent(i, j) {  
//     if (i < 0 || i >= 5 || j < 0 || j >= 5) {
//         return false;
//     }
//     return board[i][j] !== "(.)";
// }

function checkWinner(player, x, y) {
    // horizontal
    if (board[x][y-2] === player && board[x][y-1] === player) {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    if (board[x][y-1] === player && board[x][y+1] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    if (board[x][y+1] === player && board[x][y+2] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    
    // vertical
    if (board[x-2][y] === player && board[x-1][y] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    if (board[x-1][y] === player && board[x+1][y] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    if (board[x+1][y] === player && board[x+2][y] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }

    // diagonal 
    if (board[x-2][y-2] === player && board[x-1][y-1] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    if (board[x-1][y+1] === player && board[x+1][y-1] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    if (board[x-2][y+2] === player && board[x-1][y+1] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    if (board[x+2][y-2] === player && board[x+1][y-1] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    if (board[x-1][y-1] === player && board[x+1][y+1] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
    if (board[x+1][y+1] === player && board[x+2][y+2] === player)  {
        alert(`Nguoi choi ${player} da thang!!!`);
            return;
    }
}

function changeValue() {
    if (turn === 0) {
        let positionX, positionY;
        do {
            positionX = +prompt("Player 1 move X: ");
            positionY = +prompt("Player 1 move Y: ");
            if (board[positionX][positionY] !== "(.)") {
                alert("Vi tri ${positionX} , ${positionY} ko hop le. Vui long nhap lai.");
                continue;
            }
            break;
        }
        while (true);

        data = "";
        board[positionX][positionY] = "o";
        for (let i = 0; i < 5; i++) {
            data += "<br/>";
            for (let j = 0; j < 5; j++) {
                data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
        b.innerHTML = "<hr/>" + data;
        turn = 1;
        checkWinner("o", positionX, positionY);
        } else {
            let positionX, positionY;
            do {
                positionX = +prompt("Player 1 move X: ");
                positionY = +prompt("Player 1 move Y: ");
                if (board[positionX][positionY] !== "(.)") {
                    alert("Vi tri ${positionX} , ${positionY} ko hop le. Vui long nhap lai.");
                    continue;
                }
                break;
            }
            while (true);
                data = "";
                board[positionX][positionY] = "x";
            for (let i = 0; i < 5; i++) {
                data += "<br/>";
                for (let j = 0; j < 5; j++) {
                    data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
                }
            }
            b.innerHTML = "<hr/>" + data;
            turn = 0;
            checkWinner("x", positionX, positionY);
    }
}