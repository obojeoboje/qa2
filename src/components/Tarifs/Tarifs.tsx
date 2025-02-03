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
            <p style={{ marginBottom: '20px' }}>Основная оплата после обучения</p>
            <h3>
              40 000 ₽* + 100%
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
              <a href="https://payform.ru/9p6j97I/" target="_blank">
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
            <h3>120 000 ₽</h3>
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
              <a href="https://payform.ru/m26j9eg/" target="_blank">
                Купить тариф
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.tarifsQuestion}>
        <h3>Уверенность</h3>
          <ul className={styles.tarifsQuestionList}>
            <p>Платить ничего не нужно, а предоплата возвращается, если:</p>
            <li>Не получится устроиться на работу</li>
            <li>Найдешь работу с зарплатой ниже 100 000 ₽</li>
            <li>Поймешь, что обучение не нравится, передумал, или это не твое в течение первых двух недель</li>
          </ul>
      </div>
    </div>
  );
};

export default Tarifs;
