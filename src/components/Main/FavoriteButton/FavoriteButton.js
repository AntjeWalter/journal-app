import { ReactComponent as Star } from "../../../images/star.svg";
import { ReactComponent as StarFilled } from "../../../images/star-filled.svg";
import { useState } from "react";
import "./FavoriteButton.css";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={() => toggleFavorite()}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
