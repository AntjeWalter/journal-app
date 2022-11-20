import "./Form.css";

export default function Form() {
  return (
    <>
      <p className="entry__headline">NEW ENTRY</p>
      <form className="entry__form">
        <label htmlFor="motto">Motto</label>
        <textarea type="text" id="motto" className="entry__input"></textarea>
        <label htmlFor="notes">Notes</label>
        <textarea type="text" id="notes" className="entry__input"></textarea>
        <button type="submit" className="entry__button">
          Create
        </button>
      </form>
    </>
  );
}
