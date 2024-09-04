import styles from './index.module.css';

import star from '../../assets/images/star-2.svg';

const Tarifs = () => {
  return (
    <div className={styles.tarifs} id="tarifs">
      <div className={styles.tarifsTitle}>
        <div className={styles.tarifsTitleInfo}>
          <h3>Тарифы</h3>
          <p>Найди идеальный тариф, который точно подойдет тебе</p>
        </div>
        <div className={styles.tarifsTitleBtn}>
          <button>
            <a href="https://t.me/Polynskih" target="_blank">
              Бесплатная консультация
            </a>
          </button>
        </div>
      </div>
      <div className={styles.tarifsInfo}>
        <div
          className={styles.tarifsCard}
          style={{ backgroundColor: '#010101', color: '#fff' }}
        >
          <img src={star} alt="Star" className={styles.star} />
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
            <button>
              <a href="https://payform.ru/qf4T5QJ/" target="_blank">
                Купить тариф
              </a>
            </button>
          </div>
        </div>
        <div
          className={styles.tarifsCard}
          style={{ backgroundColor: '#E1EAFF' }}
        >
          <div className={styles.tarifsCardTitle}>
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
            <button>
              <a href="https://payform.ru/l84VPWl/" target="_blank">
                Купить тариф
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
