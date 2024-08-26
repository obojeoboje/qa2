import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import styles from './index.module.css';

import tg from '../../assets/images/telegram.svg';

const Format = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
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

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(event);
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.format}>
      <div className={styles.formatLeft}>
        <h3>Формат обучения</h3>
        <p>
          Начать обучение можно с полного нуля или пройденных
          <br /> курсов
        </p>

        {!mobile && (
          <div className={styles.formatBtn}>
            <button>
              <a href="https://t.me/Polynskih_channel" target="_blank">
                Мой канал в телеграм
                <img src={tg} alt="telegram" width="30" height="30" />{' '}
              </a>
            </button>
          </div>
        )}
      </div>
      <div className={styles.accordion}>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={
              expanded === 'panel1' ? (
                <RemoveIcon className={`${styles.icon} ${styles.removeIcon}`} />
              ) : (
                <AddIcon className={`${styles.icon} ${styles.addIcon}`} />
              )
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Оценка знаний
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            Проведем созвон чтобы оценить твой текущий статус. Если ты уже
            что-то проходил то составим тебе индивидуальный план обучения. Если
            ты с нуля то для этого есть готовый план.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={
              expanded === 'panel2' ? (
                <RemoveIcon className={`${styles.icon} ${styles.removeIcon}`} />
              ) : (
                <AddIcon className={`${styles.icon} ${styles.addIcon}`} />
              )
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Поддержка на испытательном сроке
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            В течение первых трех месяцев твоей работы я нахожусь на связи и
            поддерживаю тебя. Испыталку пройти проще, чем ты думаешь.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={
              expanded === 'panel3' ? (
                <RemoveIcon className={`${styles.icon} ${styles.removeIcon}`} />
              ) : (
                <AddIcon className={`${styles.icon} ${styles.addIcon}`} />
              )
            }
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Обучение
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            Необходимые материалы нужно будет изучить и сделать ДЗ. По итогам
            каждой темы есть срез теоретических вопросов. Если вдруг возникают
            вопросы - созваниваемся.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={
              expanded === 'panel4' ? (
                <RemoveIcon className={`${styles.icon} ${styles.removeIcon}`} />
              ) : (
                <AddIcon className={`${styles.icon} ${styles.addIcon}`} />
              )
            }
            aria-controls="panel4-content"
            id="panel4-header"
          >
            Подготовка резюме
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            Готовим тебя к выходу на рынок, продумываем каждую мелочь.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={
              expanded === 'panel5' ? (
                <RemoveIcon className={`${styles.icon} ${styles.removeIcon}`} />
              ) : (
                <AddIcon className={`${styles.icon} ${styles.addIcon}`} />
              )
            }
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Собеседования
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            Отклики и прохождение собеседований. Фидбек по собесам, созвоны с
            ответами на вопросы, доизучение материалов если нужно.
          </AccordionDetails>
        </Accordion>
      </div>
      {mobile && (
        <div className={styles.formatBtn}>
          <button>
            <a href="https://t.me/Polynskih_channel" target="_blank">
              Мой канал в телеграм
              <img src={tg} alt="telegram" width="30" height="30" />{' '}
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Format;
