
import ProjectCard from "./ProjectsCard";
const projects = [
  {
    title: "Minimal Lightening",
    image: "/assets/images/projects/minimal-lightening-home-page.png",
    description:
      "This project made by me as a final project for ReDI school and also it is my final project for UI/UX course.",
    sourceLink: "https://github.com/Zargarnejad/minimal-lightening",
    demoLink: "/assets/demos/minimal-lightening.webm",
  },
  {
    title: "Meal Sharing",
    image: "/assets/images/projects/mealsharing.png",
    description:
      "A full-stack project for booking and sharing meals with others.",
    sourceLink:
      "https://github.com/Zargarnejad/meal-sharing/tree/reat2-week3-zargarnejad",
    demoLink: "https://www.loom.com/share/eea2ad941ce3478f870a4ae581df06f4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            sourceLink={project.sourceLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
}
