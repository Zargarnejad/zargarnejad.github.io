
export default function Hero() {
  return (
    <section className="hero">
      <div className="heroTxtContainer">
        <h1>Hello, I'm Monireh Zargarnejad</h1>
        <p>
          Curious and committed Junior Web Developer with over a decade of
          experience as a senior support supervisor. Known for being adaptable,
          detail-oriented, and a fast learner with a drive for continuous
          growth.
    
          Passionate about building user-centered digital products and
          contributing to development teams with both technical and
          interpersonal skills.
        </p>
        {/* <a href="#projects" className="btn">
          See My Work
        </a> */}
        <a href="#About me" className="link">
          More about me
        </a>
      </div>

      <div className="heroImgContainer">
        <img src="/assets/images/myPic.jpg" alt="Developer Photo" />
      </div>
    </section>
  );
}
