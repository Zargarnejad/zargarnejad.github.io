export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-links">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
          <p>&copy; 2025 Monireh Zargarnejad. All rights reserved.</p>
        </div>
        <div className="footer-form">
          <h2 className="footer-title">Say hello and let's work together!</h2>
          <form>
            <input type="email" placeholder="Your email address" />
            <textarea placeholder="Describe your project" rows="4"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
