import tg from '../../assets/images/telegram.png';
import footerBoy from '../../assets/images/footer-boy.webp';

import styles from './index.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.firstBlock}>
        <h3>
          Бесплатно попробовать обучение можно уже <br /> сейчас
        </h3>
        <p>
          Ты освоишь базовые навыки работы в тестировании и почувствуешь себя
          тестировщиком через моего бота в Телеграм
        </p>
        <button>Перейти в бота</button>
      </div>
      <div className={styles.secondBlock}>
        <h4>Polynskih</h4>
        <div className={styles.btns}>
          <button>
            Связаться со мной
            <img src={tg} alt="telegram" width="30px" height="30px" />
          </button>
          <button>
            Мой канал в телеграм
            <img src={tg} alt="telegram" width="30px" height="30px" />
          </button>
        </div>
        <p>
          Развернутые отзывы с контактами авторов можно найти здесь - IT Mentors
          (по тэгу @Polynskih или #Polynskih)
        </p>
      </div>
      <div className={styles.imageBlock}>
        <img src={footerBoy} alt="Footer Boy" />
      </div>
    </footer>
  );
};

export default Footer;
