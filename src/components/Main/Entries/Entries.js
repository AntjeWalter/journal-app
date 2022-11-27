import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./Entries.css";

export default function Entries({
  date,
  headline,
  notes,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <article className="entry">
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__headline-container">
          <h3>{headline}</h3>
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
            id={id}
          />
        </div>
        <p className="entry__notes">{notes}</p>
      </div>
    </article>
  );
}
