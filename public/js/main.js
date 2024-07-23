const socket = io();
const chess = new Chess();
const boardElement = document.getElementById('.chessboard');

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => {
    const board = chess.board();
    boardElement.innerHTML = '';
    board.forEach((row, rowIndex) => {
        row.forEach((square, squareIndex) => {
            const squareElement = document.createElement('div');
            squareElement.classList.add('square'
                (rowIndex + squareIndex) % 2 === 0 ? 'light' : 'dark');
            
            squareElement.dataset.row = rowIndex;
            squareElement.dataset.col = squareIndex;

            if(square){
                const pieceElemnt = document.createElement('div');
                pieceElemnt.classList.add('piece', square.color === 'w' ? 'white' : 'black');
            }
        });
    });
};
const handleMove = () => {};
const getPieceUnicode = () => {};