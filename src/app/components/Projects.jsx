
export default function ProjectsSection() {
  return (
    <section className="projects">
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card pink">
          <div className="project-text">
            <h3>Minimal Lightening</h3>
            <p>
              "This project made by me as a final project for ReDI school and
              also it is my final project for UI/UX course.",
            </p>
            <a href="#" className="project-link">
              View project →
            </a>
          </div>
          <div className="project-images">
            <img
              src="/assets/images/projects/minimallightening.png"
              alt="project"
            />
            <img
              src="/assets/images/projects/minimallightening.png"
              alt="project"
            />
            <img
              src="/assets/images/projects/minimallightening.png"
              alt="project"
            />
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card blue">
          <div className="project-text">
            <h3>Meal Sharing</h3>
            <p>
              "A full-stack project for booking and sharing meals with others.",
            </p>
            <a href="#" className="project-link">
              View project →
            </a>
          </div>
          <div className="project-images">
            <img src="/assets/images/projects/mealsharing.png" alt="project" />
            <img
              src="/assets/images/projects/mealsharing.png"
              alt="project"
            />
          </div>
        </div>

        <div className="projects-browse">
          <button>Browse all projects</button>
        </div>
      </div>
    </section>
  );
}
