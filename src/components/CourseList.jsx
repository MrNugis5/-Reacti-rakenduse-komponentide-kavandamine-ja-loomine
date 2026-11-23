import CourseCard from "./CourseCard";

export default function CourseList({ courses }) {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard 
          key={course.id}
          category={course.category}
          title={course.title}
          description={course.description}
          duration={course.duration}
        />
      ))}
    </div>
  );
}