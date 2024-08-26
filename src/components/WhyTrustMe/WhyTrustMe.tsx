import styles from './index.module.css';

import happy from '../../assets/images/happy.svg';
import star from '../../assets/images/star-1.svg';

const WhyTrustMe = () => {
  return (
    <div className={styles.whyTrustMe}>
      <div className={styles.title}>
        <img src={star} alt="Star" className={styles.star} />
        <h2>
          Почему стоит
          <br /> мне доверять
        </h2>
        <img src={happy} alt="Happy" className={styles.happy} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <h3>Действующий специалист</h3>
          <p>
            Я руковожу командой тестирования в самом известном IT-гиганте в
            России. Знаю как устроено современное тестирование и какие
            специалисты требуются на рынке.
          </p>
        </div>
        <div className={styles.contentItem}>
          <h3>Прошел точно такой же путь</h3>
          <p>
            У меня нет высшего образования, я не ходил на олимпиады по
            программированию. Всего пару лет назад я работал продавцом в
            магазине одежды.
          </p>
        </div>
        <div className={styles.contentItem}>
          <h3>Трудоустроил больше 50 человек</h3>
          <p>
            Эти люди получили реальную работу по ТК РФ со всеми ее привилегиями.
            У нас собралось целое сообщество с регулярными активностями и
            взаимопомощью.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyTrustMe;
