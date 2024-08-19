import styles from './index.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTitle}>
        <h2>Обо мне</h2>
      </div>
      <div className={styles.aboutRight}>
        <h3>
          Александр Полынских
          <br /> Lead QA Engineer/Mentor
        </h3>
        <div className={styles.aboutText}>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum vLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum vLorem ipsum
          </p>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum vLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum vLorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
