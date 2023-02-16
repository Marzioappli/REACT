import "./Minigame.css"

import React, { useState } from "react";
function Square(props) {
return (
<button className="Rechteck" onClick={props.onClick}>
    {props.value}</button>
);
}
function Board() {
const [squares, setSquares] = useState(Array(9).fill(null));
const [xIsNext, setXIsNext] = useState(true);
function handleClick(i) {
    const squaresCopy = squares.slice();
    if (calculateWinner(squares) || squaresCopy[i]) {
    return;
    }
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
}
function renderSquare(i) {
    return (<Square
        value={squares[i]}
        onClick={() => handleClick(i)}
    />
    );
}
<div className="text"></div>
const winner = calculateWinner(squares);
let status;
if (winner) {
    status = "Winner: " + winner;
} else {
    status = "Next player: " + (xIsNext ? "X" : "O");
}


return (
<div><div className="status">{status}</div><div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}</div>
        <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}</div>
        <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
        <div className="restart-container"></div>
        {(winner || squares.every(square=> square)) && (
            <button className ="restart-button" onClick={() =>
            setSquares(Array(0).fill(null))}>Next Round</button>
        )}
        </div>

);
}
function calculateWinner(squares) {
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
    }
}
return null;
}
export default function Game() {
return (
  <div className="game"><div className="game-board"><Board /></div><div className="game-info"><div></div><ol>{/* TODO */}</ol></div></div>
);
}