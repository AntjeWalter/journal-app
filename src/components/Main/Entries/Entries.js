import "./Entries.css";

export default function Entries({ date, headline, notes }) {
  return (
    <>
      <p className="entry__date">{date}</p>
      <h3>{headline}</h3>
      <p>{notes}</p>
    </>
  );
}
