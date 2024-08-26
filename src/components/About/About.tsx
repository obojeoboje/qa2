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
            Я занимаюсь менторством больше года, у меня за спиной десятки
            учеников с офферами в крупные и маленькие компании РФ. Так же я
            занимаю позицию Lead QA Engineerв самой большой IT-компании в
            России.
          </p>
          <p>
            Я регулярно хожу на собеседования, а также провожу их сам, поэтому
            знаю актуальные требования к кандидату на рынке сейчас и не лью
            воду, а даю ученикам только то, что им необходимо.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
