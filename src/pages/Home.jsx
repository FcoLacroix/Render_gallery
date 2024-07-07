import React, { useEffect, useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Home = () => {
  const { photos, setPhotos, favorites, setFavorites } = useContext(PhotoContext);

  useEffect(() => {
    fetch('https://api.pexels.com/v1/search?query=3d+renders', {
      headers: {
        Authorization: 'QPX91rF986GilbExWBxPgd6z49u3d5oI5cVIuS348NeZbWtClyToOEZE'
      }
    })
    .then(response => response.json())
    .then(data => setPhotos(data.photos))
    .catch(error => console.error('Error fetching photos:', error));
  }, [setPhotos]);

  const handleLike = (photo) => {
    if (!favorites.some(fav => fav.id === photo.id)) {
      setFavorites([...favorites, photo]);
    } else {
      setFavorites(favorites.filter(fav => fav.id !== photo.id));
    }
  };

  return (
    <div>
      <h1>Crea tu lista de Renders Favoritos con un ❤</h1>
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className={`photo-card ${favorites.some(fav => fav.id === photo.id) ? 'favorited' : ''}`}>
            <img src={photo.src.medium} alt={photo.alt} />
            <div className="author">{photo.photographer}</div>
            <button onClick={() => handleLike(photo)}></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
