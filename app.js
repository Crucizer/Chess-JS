board = document.querySelector(".board")

function makeBoard(board) {
    for (let i = 0; i<81; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("y", String(Math.floor(i/9)));
        cell.setAttribute("x", String(i%9))
        board.appendChild(cell);
    }    
}

makeBoard(board)