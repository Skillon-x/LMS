import Navbar from "../home/Navbar";
import QuranConnectHeroSection from "./QuranConnectHeroSection";
import CoursesPage from "./CoursesPage";
import LearningPathSuggestions from "./LearningPathSuggestions";
import Footer from "../home/footer";
import NewsletterSignup from "./NewsletterSignup";



const Courses = () => {
    return (
      <div>
        <Navbar />
        <QuranConnectHeroSection />
        <CoursesPage />
        <LearningPathSuggestions />
        <NewsletterSignup />
        <Footer />
      </div>
    );
  };
  
  export default Courses;