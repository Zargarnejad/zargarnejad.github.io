import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Monireh</div>
      <ul className="nav-links">
        <li>
          <a href="#about">Projects</a>
        </li>
        <li>
          <a href="#projects">About me</a>
        </li>
        <li>
          <a href="#contact">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
