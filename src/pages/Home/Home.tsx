import styles from "./Home.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Our Platform</h1>
        <p className={styles.subtitle}>
          Discover amazing content and explore new opportunities.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </header>

      <section className={styles.featureSection}>
        <div className={styles.feature}>
          <h2>Feature 1</h2>
          <p>Learn about our first amazing feature.</p>
        </div>
        <div className={styles.feature}>
          <h2>Feature 2</h2>
          <p>Explore the benefits of using our platform.</p>
        </div>
        <div className={styles.feature}>
          <h2>Feature 3</h2>
          <p>Start your journey with our advanced tools.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
