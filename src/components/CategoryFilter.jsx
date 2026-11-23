export default function CategoryFilter({ categories }) {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category} className="btn-category">
          {category}
        </button>
      ))}
    </div>
  );
}