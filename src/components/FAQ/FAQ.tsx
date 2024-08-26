import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import styles from './index.module.css';

import tg from '../../assets/images/telegram.svg';

const Faq = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 480);
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
        <h3>FAQ</h3>

        {!mobile && (
          <div className={styles.formatBtn}>
            <button>
              <a href=" https://t.me/Polynskih" target="_blank">
                Связаться со мной
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
            Сколько длится обучение?
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            С нуля - 2-3 месяца После курса - 1-2 месяца Повышение грейда - до
            месяца Зависит от вашего свободного времени и усилий. Чем их больше
            - тем ближе оффер.
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
            Устроюсь на работу, что дальше?
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            Испытательный срок длится первые 3 месяца. На протяжении этого срока
            я буду на связи и помогу вам освоиться и пройти испытательный срок.
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
            На какую зарплату устроюсь?
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            В среднем 150 000₽, диапазон зарплат учеников от 100 000₽ до 220
            000₽.
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
            Какой уровень знаний нужен для начала обучения?
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            Обучение можно начинать с нуля. Если у вас уже есть какая-то база
            знаний то обучение займет меньше времени.
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
            Есть ли рассрочка?
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            Рассрочка есть. Необходимо нажать на кнопку "Купить тариф" в выборе
            тарифа, у вас откроется окно оплаты с возможностью оформить
            рассрочку.
          </AccordionDetails>
        </Accordion>
      </div>

      {mobile && (
        <div className={styles.formatBtn}>
          <button>
            <a href=" https://t.me/Polynskih" target="_blank">
              Связаться со мной
              <img src={tg} alt="telegram" width="30" height="30" />{' '}
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Faq;
