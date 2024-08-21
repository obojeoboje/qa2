import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import styles from './index.module.css';

import tg from '../../assets/images/telegram.webp';

const Faq = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(event);
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.format}>
      <div className={styles.formatLeft}>
        <h3>FAQ</h3>

        <div className={styles.formatBtn}>
          <button>
            Связаться со мной
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
            Есть ли поддержка после завершения обучения?
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
