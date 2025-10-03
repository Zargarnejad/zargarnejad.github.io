export default function BlogCard({
  image,
  title,
  description,
  createddate,
  
}) {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      {/* <h3>{title}</h3> */}
      <p>{description}</p>
      <p>{createddate}</p>
    </div>
  );
}
