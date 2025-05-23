import React, { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
export default function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);
	function handleSelectSquare(rowIndex, colIndex) {
		setGameBoard((prevGameBoard) => {
			const updateBoard = [
				...prevGameBoard.map((innerArray) => [...innerArray]),
			];
			updateBoard[rowIndex][colIndex] = "X";
			return updateBoard;
		});
	}
	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
