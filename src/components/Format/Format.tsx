import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import styles from './index.module.css';

import tg from '../../assets/images/telegram.png';

const Format = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

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

        <div className={styles.formatBtn}>
          <button>
            Мой канал в телеграм{' '}
            <img src={tg} alt="telegram" width="30" height="30" />{' '}
          </button>
        </div>
      </div>
      <div className={styles.accordion}>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={expanded === 'panel1' ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Оценка знаний
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Поддержка на испытательном сроке
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Обучение
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={expanded === 'panel4' ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            Подготовка легенды и резюме
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.customAccordion}
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            className={styles.customAccordionSummary}
            expandIcon={expanded === 'panel5' ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Собеседования
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Format;
