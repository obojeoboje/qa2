import styles from './index.module.css';

import happy from '../../assets/images/happy.webp';

const WhyTrustMe = () => {
  return (
    <div className={styles.whyTrustMe}>
      <div className={styles.title}>
        <h2>
          Почему стоит
          <br /> мне доверять
        </h2>
        <img src={happy} alt="Happy" />
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <h3>Действующий специалист</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad
            eum, et excepturi illum consequuntur cum distinctio doloremque atque
            quidem maiores minima consectetur odio rerum! Eaque nam obcaecati
            mollitia quos.
          </p>
        </div>
        <div className={styles.contentItem}>
          <h3>Прошел точно такой же путь</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad
            eum, et excepturi illum consequuntur cum distinctio doloremque atque
            quidem maiores minima consectetur odio rerum! Eaque nam obcaecati
            mollitia quos.
          </p>
        </div>
        <div className={styles.contentItem}>
          <h3>Трудоустроил больше 50 человек</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad
            eum, et excepturi illum consequuntur cum distinctio doloremque atque
            quidem maiores minima consectetur odio rerum! Eaque nam obcaecati
            mollitia quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyTrustMe;
