import { useState } from "react";
import { useFormState } from "react-dom";

export default function MyForm() {
  const [game, setGame] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [state, formAction] = useFormState(submit, { message: "" });

  const handleGameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGame(event.target.value);
    setShowFields(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="game">Choose a game:</label>
      <select id="game" value={game} onChange={handleGameChange}>
        <option value="">--Please choose a game--</option>
        <option value="game1">Game 1</option>
        <option value="game2">Game 2</option>
        <option value="game3">Game 3</option>
      </select>
      {game && (
        <>
          <p>Selected game: {game}</p>
          <button onClick={() => setShowFields(false)}>Change game</button>
        </>
      )}
      {showFields && (
        <>
          <label htmlFor="field1">Field 1:</label>
          <input type="text" id="field1" name="field1" />
          <label htmlFor="field2">Field 2:</label>
          <input type="text" id="field2" name="field2" />
          <button type="submit" formAction={formAction}>
            Submit
          </button>
        </>
      )}
    </form>
  );
}
