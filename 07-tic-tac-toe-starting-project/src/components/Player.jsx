import { useState } from "react";

export default function player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);

	function handleEventClick() {
		setIsEditing((ediging) => !ediging);
	}
	let playerName = <span className="player-name">{name}</span>;
	// let btnCaption = "Edit";
	if (isEditing) {
		playerName = <input type="text" required value={name}></input>;
		// btnCaption = "Save";
	}

	return (
		<li>
			<span className="player">
				{playerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEventClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
