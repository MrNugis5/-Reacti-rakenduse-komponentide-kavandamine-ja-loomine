import Header from "./components/Header";
import PageHeading from "./components/PageHeading";
import CategoryFilter from "./components/CategoryFilter";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import { courses, categories } from "./data/coursesData";
import "./App.css";

function App() {
  const popularCourses = courses.filter(course => course.popular);

  return (
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
        <CategoryFilter categories={categories} />
        <CourseList courses={courses} />
      </main>

      <Footer />
    </div>
  );
}

export default App;