import React, { createContext, useState } from "react";

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <PhotoContext.Provider value={{ photos, setPhotos, favorites, setFavorites }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
