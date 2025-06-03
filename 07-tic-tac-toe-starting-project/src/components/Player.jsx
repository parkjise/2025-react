import { useState } from "react";

export default function player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	function handleEventClick() {
		setIsEditing((ediging) => !ediging);
		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	}
	function handleChange(e) {
		setPlayerName(e.target.value);
	}
	let editPlayerName = <span className="player-name">{playerName}</span>;

	if (isEditing) {
		editPlayerName = (
			<input
				type="text"
				required
				value={playerName}
				onChange={handleChange}
			></input>
		);
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{editPlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEventClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
