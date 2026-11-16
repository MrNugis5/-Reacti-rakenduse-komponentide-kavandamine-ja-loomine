export default function CourseCard({ category, title, description, duration }) {
  return (
    <article className="course-card">
      <span className="course-category">{category.toUpperCase()}</span>
      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>
      <p className="course-duration">Maht: {duration}</p>
    </article>
  );
}