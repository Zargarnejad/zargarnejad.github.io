
export default function ProjectCard({
  title,
  image,
  description,
  sourceLink,
  demoLink,
}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      {sourceLink && (
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          View Source
        </a>
      )}
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Watch Demo
        </a>
      )}
    </div>
  );
}
