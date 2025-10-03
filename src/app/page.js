import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";


const skills = [
  "React",
  "Node.js",
  "HTML and CSS",
  "UX / UI ",
  "CRM",
  "Problem Solving",
  "Team Working",
  "Trobel Shooting",
  
];


export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Hero />
      {/* <About /> */}
      <Projects />

    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
      <Blogs />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
