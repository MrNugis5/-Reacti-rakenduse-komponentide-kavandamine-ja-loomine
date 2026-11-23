import Navigation from "./Navigation";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Header() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="header">
      <div className="logo">Õpikeskus</div>
      <span className="favorites-count" aria-label="Lemmikkursuste arv">
        Lemmikuid: {favorites.length}
      </span>
      <Navigation />
    </header>
  );
}