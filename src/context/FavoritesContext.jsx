import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  toggleFavorite: () => {}
});

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(courseId) {
    setFavorites((current) =>
      current.includes(courseId)
        ? current.filter((id) => id !== courseId)
        : [...current, courseId]
    );
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
