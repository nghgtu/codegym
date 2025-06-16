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

function checkWinner() {
    for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
        }
    }
}

function changeValue() {
    if (turn === 0) {
        let positionX = +prompt("Player 1 move X: ");
        let positionY = +prompt("Player 1 move Y: ");
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
        checkWinner();
        } else {
            let positionX = +prompt("Player 2 move X: ");
            let positionY = +prompt("Player 2 move Y: ");
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
            checkWinner();
    }
}