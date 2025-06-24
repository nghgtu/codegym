var turn = 0;
let b = document.getElementById("tic-tac-toe");
let cells = [];
let data = "";

function reset() {
    b.innerHTML = "";
    data = "";
    for (let i = 0; i < 20; i++) {
    data += `<tr>`;
    cells[i] = [];
    for (let j = 0; j < 20; j++) {
        data += `
            <td
                /* id="${i}-${j}" */
                onclick="
                mark(this);
                play(${i},${j});
                "
            ></td>
            `;
        cells[i][j] = null;
        }
        data += '</tr>';
    }

b.innerHTML += data;

}

function mark(e) {
    if (e.innerHTML !== "") {
        alert("Cell is not empty!")
        return;
    }  
    if (turn === 0) {
        e.innerHTML = '<span style="color: blue">X</span>';
    } else {
        e.innerHTML = '<span style="color: red">O</span>';
    }
}


function checkWinner(x, y) {
    const player = cells[x][y];
    if (player === null) return;

    let count = 1;
    
    // horizontal
    // leftwards
    for (let j = y - 1; j >= 0 && cells[x][j] === player; j--) count++;
    // rightwards
    for (let j = y + 1; j < 20 && cells[x][j] === player; j++) count++;
    if (count == 5){
        turn == 1 ? alert('Player 2 won!') : alert('Player 1 won!');
        setTimeout(reset, 500);
    }
    count = 1;

    // vertical
    // upwards
    for (let i = x - 1; i >= 0 && cells[i][y] === player; i--) count++;
    // downrwards
    for (let i = x + 1; x < 20 && cells[i][y] === player; i++) count++;
    if (count == 5){
        turn == 1 ? alert('Player 2 won!') : alert('Player 1 won!');
        setTimeout(reset, 500);
    }
    count = 1;

    // diagonal
    // top-left to bottom-right
    for(let i = x-1, j = y-1; i >= 0 && j >= 0 && cells[i][j] === player; i--, j--) count++;
    for(let i = x+1, j = y+1; i < 20 && j < 20 && cells[i][j] === player; i++, j++) count++;
    if (count == 5){
        turn == 1 ? alert('Player 2 won!') : alert('Player 1 won!');
        setTimeout(reset, 500);
    }
    count = 1;

    // top-right to bottom-left
    for(let i = x-1, j = y+1; i >= 0 && j < 20 && cells[i][j] === player; i--, j++) count++;
    for(let i = x+1, j = y-1; i < 20 && j >= 0 && cells[i][j] === player; i++, j--) count++;
    if (count == 5){
        turn == 1 ? alert('Player 2 won!') : alert('Player 1 won!');
        setTimeout(reset, 500);
    }
}

function play(i, j) {
    if (cells[i][j] !== null) return;

    cells[i][j] = turn;
    checkWinner(i, j);
    turn = 1 - turn;
}

window.onload = reset();