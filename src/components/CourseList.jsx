import CourseCard from "./CourseCard";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function CourseList({
  courses,
  search = "",
  selectedCategory = "Kõik",
  showFavorites = false
}) {
  const { favorites } = useContext(FavoritesContext);
  const normalizedSearch = search.trim().toLowerCase();

  const visibleCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(normalizedSearch);
    const matchesCategory =
      selectedCategory === "Kõik" || course.category === selectedCategory;
    const matchesFavorite = !showFavorites || favorites.includes(course.id);

    return matchesSearch && matchesCategory && matchesFavorite;
  });

  if (visibleCourses.length === 0) {
    return <p className="no-results">Sobivaid kursusi ei leitud.</p>;
  }

  return (
    <div className="course-list">
      {visibleCourses.map((course) => (
        <CourseCard 
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}