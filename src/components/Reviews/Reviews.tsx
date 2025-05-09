import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper as SwiperType } from 'swiper';

import tg from '../../assets/images/telegram.svg';

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

import styles from './index.module.css';
import { useEffect, useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Сергей',
    userName: 'Slayer69xx',
    text: 'В тестирование я решил податься из сферы строительства и производства, опыта в айти никакого не имел. Попытки самостоятельно обучение не давали должного результата, из чего сделал вывод о необходимости обратиться к ментору, и не прогадал. После личной беседы мы составили оптимальный план обучения, который бы позволил в кратчайшие сроки получить нужные навыки и знания для успешного трудоустройства. Само обучение вместе с трудоустройством заняло примерно два месяца. Эмоции от такого опыта категорически положительные, у ментора есть дружелюбное сообщество тестировщиков, где тебя всегда выслушают и помогут.',
  },
  {
    id: 2,
    name: 'Дмитрий',
    userName: 'outrage_is_now',
    text: 'Надоела прошлая работа, надоела зп 80к, надоел потолок и отсутствие каких‑либо перспектив. Решаю уволиться. Изучаю менторов, пишу тем, кто приглянулся, общаюсь — выбираю Сашу Полынских. Начинаем сотрудничество — всё что нужно изучено, прочитано, отработано, по всем вопросам или сложностям всегда быстрый фидбэк и всегда по делу. Затем переходим к резюме и собеседования — снова все вопросы и моменты обозначены и решены, в общем, всё как в лучших домах Парижа и Лондона) Через 3 недели плотных походов на собеседования имею 3 хороших офера, выбираю лучший и кайфую на новой работе с прекрасным коллективом и понятной и интересной работой. p.s: терпение и труд всё перетрут) стремитесь, делайте и всё у вас получится.',
  },
  {
    id: 3,
    name: 'Дарья',
    userName: 'malofeewaaa',
    text: 'После Яндекс практикума долго не могла найти работу, куча откликов без ответа, сотни переделок резюме, неудачные собеседования, каша в голове. Поняла, что знаний не хватает и нужно все расставить по полочкам. Решила отправиться на поиски ментора, нашла ментора в таблице и попала в яблочко. @Polynskih просто магистр гений какой-то За месяц навел порядок в моей голове, заполнил пробелы, помог поправить резюме и был моей постоянной поддержкой при поиске работы. Всегда был на связи, отвечал на вопросы(временами дурацкие), созванивался и давал фидбеки по собесам. С ним получилось очень быстро из горы беспорядочных знаний сложить уверенную базу и даже больше. Из 4 собесов на 4 был оффер в суперскую компанию! Благодарна безмерно, при поддержке Саши нашла работу буквально за месяц',
  },
  {
    id: 4,
    name: 'Евгений',
    userName: 'usup_rocky',
    text: 'Я очень благодарен ментору Александру за то, что он помог мне выучиться на профессию QA engineer с нуля в такие краткие сроки. Всего на обучение ушло 2 месяца. Он не только дал мне базу знаний клиент-серверной архитектуры, но и углубил мои знания в теории тестирования, рассказал о популярных инструментах для тестирования и научил их использовать. Он давал и проверял домашние задания, что помогло мне закрепить полученные знания на практике. Александр также помог мне составить качественное резюме и подготовил меня к этапу собеседований. Благодаря его поддержке и обучению я смог успешно пройти все этапы собеседования и получить работу QA engineer. Как итог было 5 технических собеседований, из которых 3 оффера! Еще раз огромное спасибо, всем удачи и успехов в начинаниях!',
  },
  {
    id: 5,
    name: 'Андрей',
    userName: 'zhiganovich',
    text: 'Мой путь в тестировании начался с онлайн курса, по окончанию которого понимал, что самостоятельно двигаться в этом направлении сложно; рынок переполнен Junior-тестировщиками после курсов и, по слухам, в 99% найти работу после курсов довольно сложно. После окончания курса начал мониторить менторов, которые могут помочь вкатиться в профессию. Обучение было супер-продуктивным: поскольку у меня была база, Александр помог структурировать знания, закрепить то, что уже знал и подготовиться к собеседованию. Все обучение заняло порядка месяца, прежде чем получил первый оффер на 200 гросс. Я остался крайне доволен нашим знакомством - Александр не просто выдавал материалы, которые нужно заучить, а также отвечал на разного рода вопросы по трудоустройству и процессам в тестировании. Ментора советую всем, кто хочет начать свой путь в тестировании - Александр позаботится о том, чтобы переход в новую профессию был максимально комфортным и уверенным',
  },
  {
    id: 6,
    name: 'Данил',
    userName: 'MoralUnderground',
    text: 'Работая с подросткового возраста в сфере общепита, я грезил мечтами о светлом будущем и смене профессии. Я начал изучать сферу IT и бороздить просторы интернета, поглощая тонны ненужной и не очень понятной информации. В один прекрасный день мне написал мой знакомый. Он поделился своими впечатлениями от обучения у Александра и рассказал о своей новой работе. Недолго думая, я побежал в телеграм, дабы записаться на обучение. Саша принял меня как родного, и мы приступили к учебе. В процессе обучения со стороны Саши была предоставлена нужная и понятная информация касательно моей будущей профессии. Саша был всегда на связи и помогал с трудными заданиями, давал регулярную обратную связь по проделанной работе и корректировал там, где это было нужно, был рядом не только в процессе обучения, но и на этапе прохождения собеседований. Итог: менее двух месяцев, две недели поиска работы и заветный оффер на 130 тысяч деревянных. Даже сейчас я могу обратиться к Саше с вопросом и делюсь с ним своими впечатлениями от своей новой работы.',
  },
  {
    id: 7,
    name: 'Илья',
    userName: 'ilia_mii',
    text: 'Ранее работал в банковской сфере, к айтишке отношения не имел. Было только общее представление - знал что такое бэк, фронт, бд. Для себя, в свободное время, проходил несколько курсов на юдеми по фронту и бэку. Нашел обучение от Саши, оно заняло чуть больше месяца - с середины апреля до конца мая. Если уделять учебе 4+ часа в день, можно уложиться и в месяц. Собесы заняли еще пару недель. Прошел 6 собесов, устроился на 182.000 + 12,5% премия. Обучение однозначно стоило того - есть структура, помощь и поддержка ментора + чат обучающихся и работающих ребят. Главное - не затягивайте с обучением, а идите на собесы и получайте свои оферы как можно раньше!)',
  },
  {
    id: 8,
    name: 'Дмитрий',
    userName: 'laz0rsky',
    text: 'Раньше работал в полиграфии, IT было как хобби. За это время появилось много разных курсов и из каждого утюга тебя приглашали пройти то, либо пройти это. Я сразу понял, что здесь не о курсах речь, а о их продвижении. Поэтому стал искать что-то вменяемое, созвонились, пообщались, он оценил мои знания и небольшой опыт и сказал, что с таким багажом обучение займёт не больше месяца и оно действительно заняло меньше месяца, мои знания были скорректированы, а пробелы в них восполнены. Прошёл около 13 собеседований, получил два оффера и выбрал для себя подходящий на 140 к. после вычета. С Сашей мы всегда на связи, у него есть поддержка на испыталке. Знаю, что он всегда на связи и в любой момент можно договориться о созвоне и обсудить то, что может быть непонятно на проекте. Видно, что Саша развивается и всё время вносит в свои методы обучения что-то новое, либо корректирует, отталкиваясь от того, какой опыт сам получает) Могу смело его рекомендовать. Ну и верьте в себя, прилагайте усилия и у вас всё получится)',
  },
  {
    id: 9,
    name: 'Данил',
    userName: 'DPNMRV',
    text: 'Долго работал менеджером по продажам и пытался достичь там каких-то высот, но в последний год работы понял, что РОПом мне не стать, хотя результаты работы были высоки. Хотелось иметь выше зп, больше возможностей и стал смотреть на мир IT. Во первых в 22 году этому все способствовало и + очень много рекламы курсов было на тот момент. Сказать честно я относился ко всему этому скептически, но пообщавшись со знакомым, который устроился фронтом после курсов, мы посовещались и я выбрал курс по фронту на  хекслет. Курс длится 10 месяцев, сам я проучился где-то 5 месяцев, я подвыгорел и на него забил, так не доучившись. После этого прошёл год, я снова решил попробовать залететь в IT, сейчас эра расцвета QA). После первого созвона Саша дал понять, что это возможно, не я первый, не я последний и мы начали обучение). Обучение заняло 2 месяца и плюс 1,5 недели на собесы. Офферы пошли сразу и мы выбрали подходящий мне по условиям. Саше благодарен за такой опыт, сейчас на этапе испытательного срока мы поддерживаем связь и он помогает по рабочим вопросам!',
  },
  {
    id: 10,
    name: 'Екатерина',
    userName: 'acsennn',
    text: 'Я пришла в тестирование из HR сферы. Было полное выгорание, хотела сменить сферу деятельности. Моя подруга, которая уже отучилась у Саши Полынских и устроилась на работу, настоятельно рекомендовала мне пройти его курс. Обучение я совмещала с работой (если кто-то переживает о нехватке времени- не бойтесь, совмещая с работой курс реально пройти за пару месяцев в спокойном ритме). Получила прекрасный оффер на 130 тысяч чистыми после 3-го собеседования! Саша всегда развернуто отвечает на вопросы и не дает сомневаться в успехе). Прекрасный ментор с крутым опытом и знаниями. То что нужно, что бы влиться в новую сферу)',
  },
  {
    id: 11,
    name: 'Андрей',
    userName: 'kekerboy',
    text: 'Изучал тестирование самостоятельно по видосам из интернета, но не было уверенности и полного понимания что как работает, для этого и решил найти себе ментора. Мы пообщались - показался мне приятным и надёжным человеком. Подтянули мне знания за 1-2 месяца, и я уже приступил к поиску работы и собеседованиям, и через месяц уже получил пару офферов на 160-170. Что мне понравилось в обучении: •Интерактивный подход с досками и продуманный план обучения. •Практически всё время Саша на связи, и готов отвечать на мои вопросы. •Очень много полезных ссылок (я в них немного терялся😅). •Можно пообщаться с другими ребятами, кто проходил обучение.',
  },
  {
    id: 12,
    name: 'Георгий',
    userName: 'g_097',
    text: 'Раньше работал в госорганах, отношения к айти-сфере никакого не было. Решил что пора менять работу - на госухе никакого развития и низкая зп уже порядком надоели). Решил искать себе ментора, таким образом попал на канал ОМ и выбрал Александра - его описание процесса менторства больше всего понравилось). Созвонились, рассказал свою ситуацию, накидали процесс дальнейших действий - все очень быстро, понятно и прозрачно. Далее начал проходить обучение согласно плану, заняло месяц, после уже выход на трудоустройство и получение заветных офферов). В общей сложности, за 2 недели активных собесов получил 4 предложения о работе.Выбрал наиболее интересный вариант для себя, по деньгам - 160к на руки. По поводу Александра - эмоции только положительные, план обучения описан емко и понятно; я получил сопровождение и помощь от и до на каждом этапе. Рекомендую его всем желающим вкатиться)',
  },
  {
    id: 13,
    name: 'Дмитрий',
    userName: 'Demardiroz',
    text: 'Всем привет! Пробовал себя в разных сферах, слышал про тестировку, но как стартовать не знал. В этом году услышал просто стаю и пообщавшись с разными менторами, решил начать свой путь с 0 именно с Сашей. Ранее никаких курсов не проходил и знаний было действительно на 0. С июня я начал познавать азы и уже в середине октября получил свой заветный офер. Считаю что план обучения и вката в профессию максимально проработан и структурирован. Ненужная информация отсутствовала, получал только то, что требуется при трудоустройстве, не менее важно что на каждом этапе и почти в любое время я мог обратиться с вопросом и быстро получить ответ. Также возможность наблюдать за тем, как ребята, которые прошли такое же обучение получают оферы прямо здесь и сейчас достаточно хорошо мотивирует. Всего у меня было где-то 5 технических и с них 1 офер на ~160к на руки, который я сразу принял. Результатом остался доволен)',
  },
  {
    id: 14,
    name: 'Анастасия',
    userName: 'Anastasiya_Burkot',
    text: 'До октября 2024 года я работала юристом в Сбербанке, проработала там 5 лет. АйТи казалось чем-то совсем из другой вселенной — максимум, что умела, это работать в Word. Но однажды я решила кардинально изменить свою жизнь и попробовать себя в новой сфере. Обучение я начала примерно 10 октября и занималась только в свободное от основной работы время — думаю, могла бы закончить всё и раньше, если бы не полная занятость. К концу декабря я уже полностью прошла обучение, начала откликаться на вакансии и в марте устроилась на новую работу. Я получила оффер с зарплатой 170 000 рублей — для меня это было очень приятным сюрпризом и подтверждением, что выбрала правильный путь. Хочу отдельно сказать про Сашу. Он невероятно отзывчивый, всегда на связи, подскажет, поможет, поддержит. Благодаря ему я смогла круто изменить свою жизнь — из «скучного юриста» превратилась в айтишника (сама до сих пор немного в шоке, но в хорошем смысле). У Саши уже собралась большая классная комьюнити — очень много интересных, открытых людей. Всегда можно обратиться за помощью, за советом или просто за моральной поддержкой.'
  },
];

const Reviews = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiper) {
      const checkButtons = () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      };

      swiper.on('slideChange', checkButtons);
      checkButtons();

      return () => {
        swiper.off('slideChange', checkButtons);
      };
    }
  }, [swiper]);

  return (
    <div className={styles.reviews} id="reviews">
      <div className={styles.reviewsTitle}>
        <h3>Отзывы</h3>
        <p>Ученики делятся впечатлениями: Истории достижений и роста</p>
      </div>
      <div className={styles.reviewsContent}>
        <div className={styles.reviewsContentTitle}>
          <div className={styles.pagination}></div>
          <div className={styles.navigationButtons}>
            <button
              className={`${styles.prevButton} ${
                !isBeginning ? styles.active : ''
              }`}
            >
              <WestIcon />
            </button>
            <button
              className={`${styles.nextButton} ${!isEnd ? styles.active : ''}`}
            >
              <EastIcon />
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
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
            <SwiperSlide key={item.id}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  <p>
                    <a href={`https://t.me/${item.userName}`} target="_blank">
                      <img src={tg} alt="telegram" width="30px" height="30px" />
                      @{item.userName}
                    </a>
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
