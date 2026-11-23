import { useState } from "react";
import Header from "./components/Header";
import PageHeading from "./components/PageHeading";
import CategoryFilter from "./components/CategoryFilter";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import { courses, categories } from "./data/coursesData";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Kõik");
  const [showFavorites, setShowFavorites] = useState(false);
  const popularCourses = courses.filter(course => course.popular);

  return (
    <FavoritesProvider>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <PageHeading 
            title="Populaarsed koolitused" 
          />
          <CourseList courses={popularCourses} />

          <div className="divider"></div>

          <PageHeading 
            title="Koolitused" 
            description="Leia endale sobiv koolitus ja arenda oma teadmisi." 
          />

          <div className="course-controls">
            <label className="search-field">
              <span>Otsi kursust</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Otsi kursuse nime järgi"
                aria-label="Otsi kursusi"
              />
            </label>
            <button
              type="button"
              className={`btn-favorites-view${showFavorites ? " active" : ""}`}
              aria-pressed={showFavorites}
              onClick={() => setShowFavorites((current) => !current)}
            >
              {showFavorites ? "Näita kõiki kursusi" : "Näita ainult lemmikuid"}
            </button>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <CourseList
            courses={courses}
            search={search}
            selectedCategory={selectedCategory}
            showFavorites={showFavorites}
          />
        </main>

        <Footer />
      </div>
    </FavoritesProvider>
  );
}

export default App;