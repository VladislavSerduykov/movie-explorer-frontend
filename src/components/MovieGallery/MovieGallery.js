import "./MovieGallery.css";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

function MovieGallery({ cards }) {
  const [displayCount, setDisplayCount] = React.useState(6);

  const handleShowMoreClick = () => {
    setDisplayCount(displayCount + 6);
  };

  return (
    <>
      <section className="gallery">
        {cards.slice(0, displayCount).map((card) => (
          <MovieCard key={card.id} card={card} />
        ))}
      </section>
      {displayCount < cards.length && (
        <button className="gallery__button" onClick={handleShowMoreClick}>
          Еще
        </button>
      )}
    </>
  );
}

export default MovieGallery;
