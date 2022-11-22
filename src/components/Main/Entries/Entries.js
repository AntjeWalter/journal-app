import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./Entries.css";

export default function Entries({ date, headline, notes }) {
  return (
    <article className="entry">
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__headline-container">
          <h3>{headline}</h3>
          <FavoriteButton />
        </div>
        <p className="entry__notes">{notes}</p>
      </div>
    </article>
  );
}
