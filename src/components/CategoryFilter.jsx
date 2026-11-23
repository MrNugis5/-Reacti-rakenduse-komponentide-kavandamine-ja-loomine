export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`btn-category${selectedCategory === category ? " active" : ""}`}
          aria-pressed={selectedCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}