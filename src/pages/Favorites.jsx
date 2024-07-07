import React, { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Favorites = () => {
  const { favorites, setFavorites } = useContext(PhotoContext);

  const handleUnlike = (photo) => {
    setFavorites(favorites.filter(fav => fav.id !== photo.id));
  };

  return (
    <div>
      <h1>Lista de Favoritos ❤</h1>
      <div className="photo-grid">
        {favorites.map(photo => (
          <div key={photo.id} className="photo-card favorited">
            <img src={photo.src.medium} alt={photo.alt} />
            <div className="author">{photo.photographer}</div>
            <button onClick={() => handleUnlike(photo)}></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
