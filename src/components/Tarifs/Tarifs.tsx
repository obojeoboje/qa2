import styles from './index.module.css';

const Tarifs = () => {
  return (
    <div className={styles.tarifs}>
      <div className={styles.tarifsTitle}>
        <div className={styles.tarifsTitleInfo}>
          <h3>Тарифы</h3>
          <p>Найди идеальный тариф, который точно подойдет тебе</p>
        </div>
        <div className={styles.tarifsTitleBtn}>
          <button>Бесплатная консультация</button>
        </div>
      </div>
      <div className={styles.tarifsInfo}>
        <div
          className={styles.tarifsCard}
          style={{ backgroundColor: '#010101', color: '#fff' }}
        >
          <div
            className={styles.tarifsCardTitle}
            style={{ marginBottom: '40px' }}
          >
            <p>Оплата после обучения</p>
            <h3>
              30 000 ₽ + 100%
              <br /> от оффера
            </h3>
          </div>
          <ul className={styles.tarifsCardList}>
            <li>Обучение согласно плану</li>
            <li>Материалы по темам</li>
            <li>Обратная связь по домашним заданиям</li>
            <li>Регулярные созвоны</li>
            <li>Обратная связь по собеседованиям</li>
            <li>Поддержка на испытательном сроке</li>
          </ul>
          <div className={styles.tarifsCardBtn}>
            <button>Купить тариф</button>
          </div>
        </div>
        <div
          className={styles.tarifsCard}
          style={{ backgroundColor: '#E1EAFF' }}
        >
          <div
            className={styles.tarifsCardTitle}
            style={{ marginBottom: '90px' }}
          >
            <p>Оплатить сразу</p>
            <h3>90 000 ₽</h3>
          </div>
          <ul className={styles.tarifsCardList}>
            <li>Обучение согласно плану</li>
            <li>Материалы по темам</li>
            <li>Обратная связь по домашним заданиям</li>
            <li>Регулярные созвоны</li>
            <li>Обратная связь по собеседованиям</li>
            <li>Поддержка на испытательном сроке</li>
          </ul>
          <div className={styles.tarifsCardBtn}>
            <button>Купить тариф</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
