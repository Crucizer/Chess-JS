import { Piece, Pawn, Rook, Knight, Bishop, Queen, King } from "./piece.js";

class Board {

    constructor() {
        this.whites = [];
        this.blacks = [];
    }

    board = document.querySelector(".board")
    makeBoard () {
        for (let i = 0; i<64; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("y", String(Math.floor(i/8)));
            square.setAttribute("x", String(i%8));
            this.board.appendChild(square);

            if (i % 2 == 1 && Math.floor(i/8) % 2 == 0) {
                square.style.backgroundColor = "#ba8c66";
            }
            if (i % 2 == 0 && Math.floor(i/8) % 2 == 1) {
                square.style.backgroundColor = "#ba8c66";
            }

        }
    }


    setupPieces () {
        // pushing for the white pieces
        this.whites.push(new Pawn(6,0, false, "P",false, "thing.jpg"));
        this.whites.push(new Pawn(6,1, false, "P",false, "thing.jpg"));
        this.whites.push(new Pawn(6,2, false, "P",false, "thing.jpg"));
        this.whites.push(new Pawn(6,3, false, "P",false, "thing.jpg"));
        this.whites.push(new Pawn(6,4, false, "P",false, "thing.jpg"));
        this.whites.push(new Pawn(6,5, false, "P",false, "thing.jpg"));
        this.whites.push(new Pawn(6,6, false, "P",false, "thing.jpg"));
        this.whites.push(new Pawn(6,7, false, "P",false, "thing.jpg"));


        this.whites.push(new Rook(7,0, false, "R",false, "thing.jpg"));
        this.whites.push(new Rook(7,7, false, "R",false, "thing.jpg"));
        this.whites.push(new Knight(7,1,false, "Kn", false, "thing.jpg"));
        this.whites.push(new Knight(7,6,false, "Kn", false, "thing.jpg"));
        this.whites.push(new Bishop(7,2,false, "B", false, "thing.jpg"));
        this.whites.push(new Bishop(7,5,false, "B", false, "thing.jpg"));
        this.whites.push(new Queen(7,3,false, "Q", false, "thing.jpg"));
        this.whites.push(new King(7,4,false, "K", false, "thing.jpg"));


        
    }

    showPieces () {
        for(let i=0; i<this.whites.length; i++) {
            this.whites[i].show();
        }
    }
}

const gameBoard = new Board();
gameBoard.makeBoard();
gameBoard.setupPieces();
gameBoard.showPieces();