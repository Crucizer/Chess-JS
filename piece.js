class Piece {

    constructor (y, x, taken, letter, isWhite, pic) {
        this.x = x;
        this.y = y;
        this.taken = taken;
        this.isWhite = isWhite;
        this.pic = pic;
    }

    show() {
        if (!this.taken) {
            let cell = document.querySelector(`[x="${this.x}"][y="${this.y}"]`);
            // cell.textContent = this.letter;

            var img = document.createElement("img");
            img.setAttribute("class", "piece");
            img.setAttribute("src", this.pic);
            cell.appendChild(img);
        }
    }

    unshow() {
        let cell = document.querySelector(`[x="${this.x}"][y="${this.y}"]`);
        cell.textContent = "";
    }
};


// How do I manage move generation for different colors?
// Maybe some sort of mathematical trick should do it instead of rewritting function

class Pawn extends Piece {
    constructor(y,x, taken,letter, isWhite, pic) {
        super(y,x, taken, letter, isWhite,pic);
        this.pic = pic;
        this.letter = "P";
    }

    // All legal moves
    canMove(y,x) {
        let possibleMoves = [];
        possibleMoves.push(y+1, x);

        return possibleMoves;
    }

    // for actually moving the piece
    update(y,x) {
        this.unshow();

        this.y = y;
        this.x = x;

        this.show();
    }
};

class Rook extends Piece {

    constructor(y,x, taken,letter, isWhite, pic) {
        super(y,x, taken, letter, isWhite,pic);
        this.pic = pic;
        this.letter = letter;
    }

    //All legal moves
    canMove(y,x) {
        // needs to return an array of all legal moves

        let possibleMoves = [];
        let vertCount = 1;
        let horiCount = 1;

        while (vertCount+x < 9) {
            vertCount += 1;
            possibleMoves.push((x+vertCount, y));
        }

        while (horiCount+y < 9) {
            horiCount +=1;
            possibleMoves.push((x,horiCount+y));
        }
        
        return vertCount;
    }

};

class Knight extends Piece {
    constructor(y,x, taken,letter, isWhite, pic) {
        super(y,x, taken, letter, isWhite,pic);
        this.pic = pic;
        this.letter = letter;
    }
    
};

class Bishop extends Piece {
    constructor(y,x, taken,letter, isWhite, pic) {
        super(y,x, taken, letter, isWhite,pic);
        this.pic = pic;
        this.letter = letter;
    }

};

class Queen extends Piece {
    constructor(y,x, taken,letter, isWhite, pic) {
        super(y,x, taken, letter, isWhite,pic);
        this.pic = pic;
        this.letter = letter;
    }

};

class King extends Piece {
    constructor(y,x, taken,letter, isWhite, pic) {
        super(y,x, taken, letter, isWhite,pic);
        this.pic = pic;
        this.letter = letter;
    }
};

export {Piece, Pawn, Rook, Knight, Bishop, Queen, King};