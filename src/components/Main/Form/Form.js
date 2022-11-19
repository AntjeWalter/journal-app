export default function Form() {
  return (
    <>
      <p>New Entry</p>
      <label htmlFor="motto">Motto</label>
      <input type="text" id="motto"></input>
      <label htmlFor="notes">Notes</label>
      <input type="text" id="notes"></input>
      <button type="submit">Create</button>
    </>
  );
}
