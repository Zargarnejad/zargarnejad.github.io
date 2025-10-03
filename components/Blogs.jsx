import BlogCard from "./BlogCard";
const blog = [
  {
    // title: "Title of first blog",
    image: "/assets/images/blogs/blogCardImg.jpg",
    description:
      "This project made by me as a final project for ReDI school and also it is my final project for UI/UX course.",
    createddate: "1 OCT 2025",
  },
  {
    title: "Title of first blog",
    image: "/assets/images/blogs/blogCardImg.jpg",
    description:
      "This project made by me as a final project for ReDI school and also it is my final project for UI/UX course.",
    createddate: "1 OCT 2025",
  },
  {
    // title: "Title of first blog",
    image: "/assets/images/blogs/blogCardImg.jpg",
    description:
      "This project made by me as a final project for ReDI school and also it is my final project for UI/UX course.",
    createddate: "1 OCT 2025",
  },
];

export default function Blogs() {
  return (
    <section id="projects">
      <h2>Blogs</h2>
      <div className="blog-list ">
        {blog.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            description={blog.description}
            createddate={blog.createddate}
          />
        ))}
      </div>
    </section>
  );
}
