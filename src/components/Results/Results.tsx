import { useEffect, useState } from 'react';

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
    name: 'Илья',
    age: 32,
    pointA: 'С полного нуля. Работал в банке с клиентами.',
    pointB:
      'Ровно 2 месяца до оффера в 170 тыс. руб., после торга согласовали 182 тыс. руб. на руки в банк - принял и вышел на работу.',
    bgColor: '#6462F1',
    color: '#fff',
    rotate: '5deg',
    bgCardNumber: '#8381F4',
  },
  {
    id: 3,
    name: 'Катя',
    age: 26,
    pointA: 'Пройден бесплатный курс по тестированию.',
    pointB: '5 недель менторства и оффер на 100 тыс. руб. руки в банк.',
    bgColor: '#fff',
    color: '#000',
    rotate: '-5deg',
    bgCardNumber: '#E6E6E6',
  },
  {
    id: 4,
    name: 'Дмитрий',
    age: 32,
    pointA:
      'Интересовался и изучал тестирование 1.5 года самостоятельно на бесплатных ресурсах - безрезультатно. Работал на заводе.',
    pointB:
      '5 недель обучения, 11 собеседований и 3 оффера, зарплата - 175 тыс. руб. на руки в телекоммуникации. Прошел испыталку и теперь помогает новым ребятам в чате и на созвонах.',
    bgColor: '#010101',
    color: '#fff',
    rotate: '5deg',
    bgCardNumber: '#343434',
  },
  {
    id: 5,
    name: 'Данил',
    age: 23,
    pointA:
      'С полного нуля. Официант. Запрос на неофициальное трудоустройство.',
    pointB:
      'Спустя 3 месяца менторства получил оффер на 1350$ на руки на маркетинговую платформу, получает ЗП в крипте.',
    bgColor: '#6462F1',
    color: '#fff',
    rotate: '-5deg',
    bgCardNumber: '#8381F4',
  },
  {
    id: 6,
    name: 'Максим',
    age: 25,
    pointA: '3 месяца самообучения. Продавец на островке в ТЦ.',
    pointB:
      'Через 3 недели после начала менторства получает оффер на первом же собеседовании - 184 тыс. руб. на руки в видеоплатформу.',
    bgColor: '#fff',
    color: '#000',
    rotate: '5deg',
    bgCardNumber: '#E6E6E6',
  },
  {
    id: 7,
    name: 'Сергей',
    age: 28,
    pointA: 'С полного нуля. Стройка.',
    pointB: '2 месяца менторства и оффер на 186 тыс. руб. на руки в банк.',
    bgColor: '#010101',
    color: '#fff',
    rotate: '-5deg',
    bgCardNumber: '#343434',
  },
  {
    id: 8,
    name: 'Данил',
    age: 26,
    pointA: 'С полного нуля. ИП на подряд по стройматериалам.',
    pointB:
      '2.5 месяца менторства, оффер на 161 тыс. руб. на руки в страховую компанию.',
    bgColor: '#6462F1',
    color: '#fff',
    rotate: '5deg',
    bgCardNumber: '#8381F4',
  },
];

const Results = () => {
  const [table, setTable] = useState(window.innerWidth <= 960);
  const [mobile, setMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setTable(window.innerWidth <= 960);
      setMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        slidesPerView={mobile ? 1 : table ? 2 : 3}
        spaceBetween={30}
        navigation={{
          nextEl: `.${styles.nextButton}`,
          prevEl: `.${styles.prevButton}`,
        }}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
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
