import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import tg from '../../assets/images/telegram.svg';
import footerBoy from '../../assets/images/footer-boy.webp';
import footerBoy2 from '../../assets/images/footer-boy-2.webp';

import styles from './index.module.css';

const Footer = () => {
  const [table, setTable] = useState(window.innerWidth <= 1300);

  useEffect(() => {
    const handleResize = () => {
      setTable(window.innerWidth <= 1300);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.firstBlock}>
        <h3>
          Бесплатно попробовать
          <br /> обучение можно уже
          <br /> сейчас
        </h3>
        <p>
          Ты освоишь базовые навыки работы в тестировании
          <br /> и почувствуешь себя тестировщиком через моего бота
          <br /> в Телеграм
        </p>
        <button>
          <a href="https://t.me/Polynskih_bot" target="_blank">
            Перейти в бота
          </a>
        </button>
      </div>
      <div className={styles.secondBlock}>
        <h4>Polynskih</h4>
        <div className={styles.secondBlockContent}>
          <div className={styles.btns}>
            <button>
              <a href=" https://t.me/Polynskih" target="_blank">
                Связаться со мной
                <img src={tg} alt="telegram" width="30px" height="30px" />
              </a>
            </button>
            <button>
              <a href="https://t.me/Polynskih_channel" target="_blank">
                Мой канал в телеграм
                <img src={tg} alt="telegram" width="30px" height="30px" />
              </a>
            </button>
          </div>
          <p>
            Развернутые отзывы с контактами авторов можно
            <br /> найти здесь - <a href="https://t.me/it_mentors" target="_blank">IT Mentors</a> (по тэгу #Polynskih или @Polynskih)
          </p>
          <p>
            <br /> ИП Привалов А. В. 
            <br /> ИНН 860330503901
            <br /> ОГРНИП 324784700269944
            <br /> <NavLink to="/offer" className={styles.offerLink}>Договор-оферта</NavLink>
            <br /> <NavLink to="/policy" className={styles.offerLink}>Политика обработки персональных данных</NavLink>
            <br />
            <br /> <a href="https://www.behance.net/the_dari_k" target="_blank">Дизайнер сайта</a>
          </p>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <img src={table ? footerBoy2 : footerBoy} alt="Footer Boy" />
      </div>
    </footer>
  );
};

export default Footer;
