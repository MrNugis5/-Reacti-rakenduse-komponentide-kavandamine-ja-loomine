import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function CourseCard({ course, category, title, description, duration, id }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const courseId = course?.id ?? id;
  const courseCategory = course?.category ?? category;
  const courseTitle = course?.title ?? title;
  const courseDescription = course?.description ?? description;
  const courseDuration = course?.duration ?? duration;
  const isFavorite = favorites.includes(courseId);

  return (
    <article className="course-card">
      <span className="course-category">{courseCategory.toUpperCase()}</span>
      <h3 className="course-title">{courseTitle}</h3>
      <p className="course-description">{courseDescription}</p>
      <p className="course-duration">Maht: {courseDuration}</p>
      <button
        type="button"
        className={`btn-favorite${isFavorite ? " active" : ""}`}
        aria-pressed={isFavorite}
        onClick={() => toggleFavorite(courseId)}
      >
        {isFavorite ? "Eemalda lemmikute hulgast" : "Lisa lemmikuks"}
      </button>
    </article>
  );
}