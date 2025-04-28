import styles from './index.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      
      {/* Контейнер для текста */}
      <div className={styles.aboutContent}>
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
              Занимаюсь менторством два года, у меня за спиной десятки
              трудоустроенных учеников. Мои выпускники работают в крупнейших компаниях РФ, продуктами которых ты наверняка пользуешься.
            </p>
            <p>
              Регулярно хожу на собеседования, а также провожу их сам, поэтому
              знаю актуальные требования к кандидату на рынке сейчас и не лью
              воду, а даю ученикам только то, что им необходимо.
            </p>
          </div>
        </div>
      </div>

      {/* Новый отдельный блок для видео */}
      <div className={styles.videoWrapper}>
        <iframe
          src="https://kinescope.io/embed/7yywKX7cPKnLkJ681hg4ui"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        ></iframe>
      </div>
      
    </div>
  );
};

export default About;
