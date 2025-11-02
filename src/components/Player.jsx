import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNamePlaceHolder = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNamePlaceHolder = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {playerNamePlaceHolder}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
