const socket = io();
const chess = new Chess();
const boardElement = document.getElementById('chessboard');

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => {
    const board = chess.board();
    boardElement.innerHTML = '';
    board.forEach((row, rowIndex) => {
        row.forEach((square, squareIndex) => {
            const squareElement = document.createElement('div');
            squareElement.classList.add('square', (rowIndex + squareIndex) % 2 === 0 ? 'light' : 'dark');
            
            squareElement.dataset.row = rowIndex;
            squareElement.dataset.col = squareIndex;

            if(square){
                const pieceElemnt = document.createElement('div');
                pieceElemnt.classList.add('piece', square.color === 'w' ? 'white' : 'black');

                pieceElemnt.innerHTML = "";
                pieceElemnt.draggable = playerRole === square.color;

                pieceElemnt.addEventListener('dragstart', (e) => {
                    if(pieceElemnt.draggable){
                        draggedPiece = pieceElemnt;
                        sourceSquare = {row: rowIndex, col: squareIndex};
                        e.dataTransfer.setData('text/plain', '');
                    }}
                );

                pieceElemnt.addEventListener('dragend', () => {
                    draggedPiece = null;
                    sourceSquare = null;
                });

                squareElement.appendChild(pieceElemnt);
            }

            squareElement.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            squareElement.addEventListener('drop', (e) => {
                e.preventDefault();
                if(draggedPiece){
                    const targetSquare = {
                        row: parseInt(squareElement.dataset.row),
                        col: parseInt(squareElement.dataset.col),
                    };

                    handleMove(sourceSquare, targetSquare);
                }
            });
            boardElement.appendChild(squareElement);
        });
    });
};
const handleMove = () => {};
const getPieceUnicode = () => {};