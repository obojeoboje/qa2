import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

import styles from './index.module.css';

const data = [
  {
    id: 1,
    name: 'Андрей',
    age: 26,
    pointA:
      'Прошел курс Яндекс Практикум про тестирование, не мог устроиться, не знал что делать дальше. Таргетолог.',
    pointB:
      'Спустя 1.5 месяца менторства получил оффер на 174 тыс. ₽ на руки в мобильный оператор. Устроился и прошёл испыталку.',
    bgColor: '#010101',
    color: '#fff',
    rotate: '-5deg',
    bgCardNumber: '#343434',
  },
  {
    id: 2,
    name: 'Дмитрий',
    age: 32,
    pointA:
      'Изучал тестирование 1.5 года самостоятельно на бесплатных ресурсах - безрезультатно. Работал на заводе.',
    pointB:
      '5 недель обучения, 11 собеседований и 3 оффера, зарплата — 175 тыс. ₽ на руки в телекоммуникации.',
    bgColor: '#6462F1',
    color: '#fff',
    rotate: '5deg',
    bgCardNumber: '#8381F4',
  },
  {
    id: 3,
    name: 'Максим',
    age: 25,
    pointA: '3 месяца самообучения. Продавец на островке в ТЦ.',
    pointB:
      'Через 3 недели после начала менторства получает оффер на первом же собеседовании — 184 тыс. ₽ на руки в видеоплатформу.',
    bgColor: '#fff',
    color: '#000',
    rotate: '-5deg',
    bgCardNumber: '#E6E6E6',
  },
  {
    id: 3,
    name: 'Максим',
    age: 25,
    pointA: '3 месяца самообучения. Продавец на островке в ТЦ.',
    pointB:
      'Через 3 недели после начала менторства получает оффер на первом же собеседовании — 184 тыс. ₽ на руки в видеоплатформу.',
    bgColor: '#fff',
    color: '#000',
    rotate: '5deg',
    bgCardNumber: '#E6E6E6',
  },
  {
    id: 3,
    name: 'Максим',
    age: 25,
    pointA: '3 месяца самообучения. Продавец на островке в ТЦ.',
    pointB:
      'Через 3 недели после начала менторства получает оффер на первом же собеседовании — 184 тыс. ₽ на руки в видеоплатформу.',
    bgColor: '#fff',
    color: '#000',
    rotate: '-5deg',
    bgCardNumber: '#E6E6E6',
  },
];

const Results = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTitle}>
        <h3>Результаты учеников</h3>
        <div className={styles.navigationButtons}>
          <button className={styles.prevButton}>
            <WestIcon />
          </button>
          <button className={styles.nextButton}>
            <EastIcon />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        navigation={{
          nextEl: `.${styles.nextButton}`,
          prevEl: `.${styles.prevButton}`,
        }}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        {data.map((item) => (
          <SwiperSlide key={item.name}>
            <div
              className={styles.card}
              style={{
                color: item.color,
                backgroundColor: item.bgColor,
                transform: `rotate(${item.rotate})`,
              }}
            >
              <div className={styles.cardHeader}>
                <div
                  className={styles.cardNumber}
                  style={{ backgroundColor: item.bgCardNumber }}
                >
                  {item.id}
                </div>
                <h3 style={{ border: `1px solid ${item.bgCardNumber}` }}>
                  {item.name}, {item.age}
                </h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.point}>
                  <h4>Точка А</h4>
                  <p>{item.pointA}</p>
                </div>
                <div className={styles.point}>
                  <h4>Точка Б</h4>
                  <p>{item.pointB}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Results;
