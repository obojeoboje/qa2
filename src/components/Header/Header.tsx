import { useEffect, useState } from 'react';
import { Drawer } from '@mui/material';

import styles from './index.module.css';

import ribbons from '../../assets/images/ribbons.svg';
import main from '../../assets/images/main.webp';
import burger from '../../assets/images/burger.svg';
import drawerBurger from '../../assets/images/drawer-burger.svg';
import tg from '../../assets/images/white-tg.svg';
import star from '../../assets/images/drawer-star.svg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 645);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 645);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <h2>Polynskih</h2>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#whosGoodFor">Кому подойдет</a>
            </li>
            <li className={styles.navItem}>
              <a href="#tarifs">Тарифы</a>
            </li>
            <li className={styles.navItem}>
              <a href="#reviews">Отзывы</a>
            </li>
            <li className={styles.navItem}>
              <a href="#footer">Контакты</a>
            </li>
          </ul>
        </div>
        <div className={styles.navButton}>
          <button>
            <a href="https://t.me/Polynskih" target="_blank">
              Бесплатная консультация
            </a>
          </button>
          <img src={burger} alt="Menu" onClick={toggleDrawer(true)} />
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
        <button>
          <a href="#tarifs">Выбрать тариф</a>
        </button>
      </div>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            borderTopLeftRadius: '50px',
            borderBottomLeftRadius: '50px',
            overflow: 'hidden',
            width: mobile ? '95%' : '50%',
          },
        }}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <div className={styles.drawer}>
          <img src={star} alt="Star" className={styles.drawerStar} />
          <img
            onClick={toggleDrawer(false)}
            src={drawerBurger}
            alt="Drawer Menu"
            className={styles.drawerBurger}
          />
          <div className={styles.drawerFirstBlock}>
            <button className={styles.drawerBtn}>
              <a href="#whosGoodFor">Кому подойдет</a>
            </button>
            <button className={styles.drawerBtn}>
              <a href="#tarifs">Тарифы</a>
            </button>
            <button className={styles.drawerBtn}>
              <a href="#reviews">Отзывы</a>
            </button>
            <button className={styles.drawerBtn}>
              <a href="#footer">Контакты</a>
            </button>
          </div>
          <div className={styles.drawerSecondBlock}>
            <button className={styles.drawerBtn}>
              <a href="https://t.me/Polynskih_bot" target="_blank">
                Перейти в бота
              </a>
            </button>
            <button className={`${styles.drawerBtn} ${styles.drawerFreeBtn}`}>
              <a href="https://t.me/Polynskih" target="_blank">
                Бесплатная консультация
              </a>
            </button>
            <button
              className={`${styles.drawerBtn} ${styles.drawerBtnWithIcon}`}
            >
              <a href="https://t.me/Polynskih" target="_blank">
                Связаться со мной <img src={tg} alt="Telegram" />
              </a>
            </button>
            <button
              className={`${styles.drawerBtn} ${styles.drawerBtnWithIcon}`}
            >
              <a href="https://t.me/Polynskih_channel" target="_blank">
                Мой канал в телеграм <img src={tg} alt="Telegram" />
              </a>
            </button>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
