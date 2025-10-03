import Hero from "@components/Hero";
import Projects from "@components/Projects";
import Blogs from "@components/Blogs";

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

export default function Homepage() {
  return (
    <>
      <Hero />
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
    </>
  );
}
