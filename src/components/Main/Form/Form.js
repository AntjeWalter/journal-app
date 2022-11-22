import "./Form.css";
import Entries from "../Entries/Entries";
import useLocalStorageState from "use-local-storage-state";

export default function Form() {
  const [localEntry, setEntries] = useLocalStorageState("localEntry", {
    defaultValue: [{ motto: "", notes: "" }],
  });

  function handleSubmit(event) {
    setEntries({
      motto: event.target.elements.motto.value,
      notes: event.target.elements.notes.value,
    });
  }

  return (
    <>
      <p className="entry__headline">NEW ENTRY</p>
      <form className="entry__form" onSubmit={handleSubmit}>
        <label htmlFor="motto">Motto</label>
        <textarea type="text" id="motto" className="entry__input"></textarea>
        <label htmlFor="notes">Notes</label>
        <textarea type="text" id="notes" className="entry__input"></textarea>
        <div className="entry__button-center">
          <button type="submit" className="entry__button">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
