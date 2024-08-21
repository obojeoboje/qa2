import styles from './index.module.css';

import ribbons from '../../assets/images/ribbons.webp';
import main from '../../assets/images/main.webp';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <h2>Polynskih</h2>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Кому подойдет</li>
            <li className={styles.navItem}>Тарифы</li>
            <li className={styles.navItem}>Отзывы</li>
            <li className={styles.navItem}>Контакты</li>
          </ul>
        </div>
        <div className={styles.navButton}>
          <button>Бесплатная консультация</button>
        </div>
      </nav>
      <div className={styles.mainContent}>
        <h1>
          Стань профи
          <br /> в тестировании
        </h1>
      </div>
      <div className={styles.ribbons}>
        <div className={styles.main}>
          <img src={main} alt="" />
        </div>
        <img src={ribbons} alt="Ribbons" width="100%" />
      </div>
      <div className={styles.info}>
        <div className={styles.leftInfo}>
          Овладей ключевыми навыками и методиками под руководством опытного
          наставника для успешной карьеры QA, обеспечив глубокое понимание
          процессов тестирования.
        </div>
        <div className={styles.rightInfo}>
          Начни свой путь к профессиональному росту уже сегодня и стань
          востребованным специалистом в области тестирования программного
          обеспечения.
        </div>
      </div>
      <div className={styles.tarifBtn}>
        <button>Выбрать тариф</button>
      </div>
    </header>
  );
};

export default Header;
