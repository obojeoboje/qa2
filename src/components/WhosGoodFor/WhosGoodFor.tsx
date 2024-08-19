import { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import tired from '../../assets/images/tired.webp';
import smile from '../../assets/images/smile.webp';
import sad from '../../assets/images/sad.webp';

import styles from './index.module.css';

const data = [
  {
    id: 1,
    title: 'Выпускникам курсов',
    description:
      'Курсы дают базовые знания, но не учат тому, как пробиться сквозь сотни таких же учеников и устроиться на работу. Я нахожу зоны роста учеников, мы их прокачиваем, готовим к реальным задачам и собеседованиям.',
    image: smile,
  },
  {
    id: 2,
    title: 'С полного нуля',
    description:
      'Для трудоустройства с нуля у меня есть отдельная программа, там собраны самые важные навыки для успешного прохождения собеседования и дальнейшей самостоятельной работы.',
    image: tired,
  },
  {
    id: 3,
    title: 'Действующим инженерам',
    description:
      'Тем, кто уже работает на должности QA Engineer я помогаю расти в навыках и зарплате. Я делюсь своими знаниями и наработками по прохождению собеседований и построению карьеры.',
    image: sad,
  },
];

const WhosGoodFor = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setIsOpen(id === isOpen ? null : id);
  };

  return (
    <div className={styles.whosGood}>
      <h3>Кому подойдет курс</h3>
      <div className={styles.cardsContainer}>
        {data.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.title} className={styles.image} />
            </div>
            <h3>{item.title}</h3>
            <div
              className={`${styles.descriptionContainer} ${
                isOpen ? styles.open : ''
              }`}
            >
              <p className={styles.description}>
                {isOpen
                  ? item.description
                  : `${item.description.slice(0, 150)}...`}
              </p>
            </div>
            <div
              className={styles.expandIcon}
              onClick={() => handleClick(item.id)}
            >
              {isOpen ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhosGoodFor;
