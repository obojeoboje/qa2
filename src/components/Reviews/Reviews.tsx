import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import tg from '../../assets/images/telegram.png';

import styles from './index.module.css';

const data = [
  {
    id: 1,
    name: 'Дмитрий',
    userName: '@outrage_is_now',
    text: 'Надоела прошлая работа, надоела зп 80к, надоел потолок и отсутствие каких‑либо перспектив. Решаю уволиться. Изучаю менторов, пишу тем, кто приглянулся, общаюсь — выбираю Сашу Полынских. Начинаем сотрудничество — всё что нужно изучено, прочитано, отработано, по всем вопросам или сложностям всегда быстрый фидбэк и всегда по делу. Затем переходим к резюме и собеседования — снова все вопросы и моменты обозначены и решены, в общем, всё как в лучших домах Парижа и Лондона) Через 3 недели плотных походов на собеседования имею 3 хороших офера, выбираю лучший и кайфую на новой работе с прекрасным коллективом и понятной и интересной работой. p.s: терпение и труд всё перетрут) стремитесь, делайте и всё у вас получится.',
  },
  {
    id: 1,
    name: 'Дмитрий',
    userName: '@outrage_is_now',
    text: 'Надоела прошлая работа, надоела зп 80к, надоел потолок и отсутствие каких‑либо перспектив. Решаю уволиться. Изучаю менторов, пишу тем, кто приглянулся, общаюсь — выбираю Сашу Полынских. Начинаем сотрудничество — всё что нужно изучено, прочитано, отработано, по всем вопросам или сложностям всегда быстрый фидбэк и всегда по делу. Затем переходим к резюме и собеседования — снова все вопросы и моменты обозначены и решены, в общем, всё как в лучших домах Парижа и Лондона) Через 3 недели плотных походов на собеседования имею 3 хороших офера, выбираю лучший и кайфую на новой работе с прекрасным коллективом и понятной и интересной работой. p.s: терпение и труд всё перетрут) стремитесь, делайте и всё у вас получится.',
  },
  {
    id: 1,
    name: 'Дмитрий',
    userName: '@outrage_is_now',
    text: 'Надоела прошлая работа, надоела зп 80к, надоел потолок и отсутствие каких‑либо перспектив. Решаю уволиться. Изучаю менторов, пишу тем, кто приглянулся, общаюсь — выбираю Сашу Полынских. Начинаем сотрудничество — всё что нужно изучено, прочитано, отработано, по всем вопросам или сложностям всегда быстрый фидбэк и всегда по делу. Затем переходим к резюме и собеседования — снова все вопросы и моменты обозначены и решены, в общем, всё как в лучших домах Парижа и Лондона) Через 3 недели плотных походов на собеседования имею 3 хороших офера, выбираю лучший и кайфую на новой работе с прекрасным коллективом и понятной и интересной работой. p.s: терпение и труд всё перетрут) стремитесь, делайте и всё у вас получится.',
  },
  {
    id: 1,
    name: 'Дмитрий',
    userName: '@outrage_is_now',
    text: 'Надоела прошлая работа, надоела зп 80к, надоел потолок и отсутствие каких‑либо перспектив. Решаю уволиться. Изучаю менторов, пишу тем, кто приглянулся, общаюсь — выбираю Сашу Полынских. Начинаем сотрудничество — всё что нужно изучено, прочитано, отработано, по всем вопросам или сложностям всегда быстрый фидбэк и всегда по делу. Затем переходим к резюме и собеседования — снова все вопросы и моменты обозначены и решены, в общем, всё как в лучших домах Парижа и Лондона) Через 3 недели плотных походов на собеседования имею 3 хороших офера, выбираю лучший и кайфую на новой работе с прекрасным коллективом и понятной и интересной работой. p.s: терпение и труд всё перетрут) стремитесь, делайте и всё у вас получится.',
  },
  {
    id: 1,
    name: 'Дмитрий',
    userName: '@outrage_is_now',
    text: 'Надоела прошлая работа, надоела зп 80к, надоел потолок и отсутствие каких‑либо перспектив. Решаю уволиться. Изучаю менторов, пишу тем, кто приглянулся, общаюсь — выбираю Сашу Полынских. Начинаем сотрудничество — всё что нужно изучено, прочитано, отработано, по всем вопросам или сложностям всегда быстрый фидбэк и всегда по делу. Затем переходим к резюме и собеседования — снова все вопросы и моменты обозначены и решены, в общем, всё как в лучших домах Парижа и Лондона) Через 3 недели плотных походов на собеседования имею 3 хороших офера, выбираю лучший и кайфую на новой работе с прекрасным коллективом и понятной и интересной работой. p.s: терпение и труд всё перетрут) стремитесь, делайте и всё у вас получится.',
  },
];

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviewsTitle}>
        <h3>Отзывы</h3>
        <p>Ученики делятся впечатлениями: Истории достижений и роста</p>
      </div>
      <div className={styles.reviewsContent}>
        <div className={styles.reviewsContentTitle}>
          <div className={styles.pagination}></div>
          <div className={styles.navigationButtons}>
            <button className={styles.prevButton}>←</button>
            <button className={styles.nextButton}>→</button>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ type: 'fraction', el: `.${styles.pagination}` }}
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`,
          }}
          modules={[Navigation, Pagination]}
          className={styles.mySwiper}
        >
          {data.map((item) => (
            <SwiperSlide key={item.name}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  <p>
                    <img src={tg} alt="telegram" width="30px" height="30px" />
                    {item.userName}
                  </p>
                </div>
                <div className={styles.cardContent}>
                  <p>{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
