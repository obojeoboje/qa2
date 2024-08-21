import { useState } from 'react';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';

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

  const renderDescription = (description: string) => {
    const maxChars = 50;
    if (isOpen) {
      return description;
    }
    return description.length > maxChars
      ? description.slice(0, maxChars) + '...'
      : description;
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
                {renderDescription(item.description)}
              </p>
            </div>
            <div
              className={styles.expandIcon}
              onClick={() => handleClick(item.id)}
            >
              {isOpen ? <NorthIcon /> : <SouthIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhosGoodFor;
