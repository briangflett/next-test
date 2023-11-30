import { useFormState } from "react-dom";

const games = ["Game 1", "Game 2", "Game 3"]; // Replace with your actual games

export default function GameForm() {
  const initialState = {
    game: "",
    step: 1,
    field1: "", // Replace with your actual field
    field2: "", // Replace with your actual field
  };

  const [state, setFormState] = useFormState(initialState);

  const handleContinue = () => {
    setFormState((prevState) => ({ ...prevState, step: 2 }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {state.step === 1 ? (
        <>
          <select
            value={state.game}
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                game: e.target.value,
              }))
            }
          >
            <option value="">Select a game</option>
            {games.map((game) => (
              <option key={game} value={game}>
                {game}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleContinue} disabled={!state.game}>
            Continue
          </button>
        </>
      ) : (
        <>
          <p>Selected game: {state.game}</p>
          <select
            value={state.field1}
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                field1: e.target.value,
              }))
            }
          >
            {/* Replace with your actual options */}
          </select>
          <select
            value={state.field2}
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                field2: e.target.value,
              }))
            }
          >
            {/* Replace with your actual options */}
          </select>
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
}
