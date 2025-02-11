import { useState, useRef } from "react";

export default function Player() {
  const refName = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(refName.current.value);
    //refName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={refName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
