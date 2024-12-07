import styles from "./Home.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Lorem Ipsum Platform</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className={styles.ctaButton}>Lorem Ipsum</button>
      </header>

      <section className={styles.featureSection}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Feature 1</h2>
          <p className={styles.featureDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <i className={"bi bi-people "+ styles['icon']}></i>
          </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Feature 2</h2>
          <p className={styles.featureDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <i className={"bi bi-rocket "+ styles['icon']}></i>
          </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Feature 3</h2>
          <p className={styles.featureDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <i className={"bi bi-globe "+ styles['icon']}></i>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
