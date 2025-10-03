
import styles from "../../components/my-projects/myProjects.module.css";

export default function ProjectsPage() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>My projects</h2>
        <p className={styles.subtitle}>
          Lorem occaecat proident excepteur commodo et nulla eiusmod. Elit esse
          aute officia dolor elit aute.
        </p>

        {/* Project 1 - Pink (3 images) */}
        <div className={`${styles.projectCard} ${styles.pink}`}>
          <div className={styles.text}>
            <span className={styles.category}>Product Photography</span>
            <h3>Paris secrets</h3>
            <p>
              Sint occaecat deserunt aliquip do occaecat ut quis. Cupidatat
              magna fugiat quis sit duis est in volup.
            </p>
            <a href="#" className={styles.link}>
              View project →
            </a>
          </div>
          <div className={`${styles.images} ${styles.imagesThree}`}>
            <img src="/assets/images/projects/paris1.png" alt="Paris 1" />
            <img src="/assets/images/projects/paris2.png" alt="Paris 2" />
            <img src="/assets/images/projects/paris3.png" alt="Paris 3" />
          </div>
        </div>

        {/* Project 2 - Blue (2 images, not aligned) */}
        <div className={`${styles.projectCard} ${styles.blue}`}>
          <div className={styles.text}>
            <span className={styles.category}>Portrait</span>
            <h3>Oceanic feeling</h3>
            <p>
              Sint occaecat deserunt aliquip do occaecat ut quis. Cupidatat
              magna fugiat quis sit duis est in volup.
            </p>
            <a href="#" className={styles.link}>
              View project →
            </a>
          </div>
          <div className={`${styles.images} ${styles.imagesTwo}`}>
            <img src="/assets/images/projects/ocean1.png" alt="Ocean 1" />
            <img src="/assets/images/projects/ocean2.png" alt="Ocean 2" />
          </div>
        </div>

        {/* Project 3 - Pink (3 images) */}
        <div className={`${styles.projectCard} ${styles.pink}`}>
          <div className={styles.text}>
            <span className={styles.category}>Food Photography</span>
            <h3>Pure summer garden</h3>
            <p>
              Sint occaecat deserunt aliquip do occaecat ut quis. Cupidatat
              magna fugiat quis sit duis est in volup.
            </p>
            <a href="#" className={styles.link}>
              View project →
            </a>
          </div>
          <div className={`${styles.images} ${styles.imagesThree}`}>
            <img src="/assets/images/projects/food1.png" alt="Food 1" />
            <img src="/assets/images/projects/food2.png" alt="Food 2" />
            <img src="/assets/images/projects/food3.png" alt="Food 3" />
          </div>
        </div>

        {/* Project 4 - Blue (2 images, not aligned) */}
        <div className={`${styles.projectCard} ${styles.blue}`}>
          <div className={styles.text}>
            <span className={styles.category}>Landscape</span>
            <h3>Fairy tales</h3>
            <p>
              Sint occaecat deserunt aliquip do occaecat ut quis. Cupidatat
              magna fugiat quis sit duis est in volup.
            </p>
            <a href="#" className={styles.link}>
              View project →
            </a>
          </div>
          <div className={`${styles.images} ${styles.imagesTwo}`}>
            <img src="/assets/images/projects/land1.png" alt="Landscape 1" />
            <img src="/assets/images/projects/land2.png" alt="Landscape 2" />
          </div>
        </div>

        {/* View More Button */}
        <div className={styles.more}>
          <button>View more</button>
        </div>
      </div>
    </section>
  );
}
