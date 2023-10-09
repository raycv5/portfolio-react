import "../assets/styles/style.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Social from "../components/Social";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Form />
      <Footer />
      <Social />
    </div>
  );
}

export default HomePage;
