import { ReactComponent as Star } from "../../../images/star.svg";
import { ReactComponent as StarFilled } from "../../../images/star-filled.svg";
import "./FavoriteButton.css";

export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  return (
    <button
      className="favorite-button"
      onClick={() => {
        onToggleFavorite(id);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
