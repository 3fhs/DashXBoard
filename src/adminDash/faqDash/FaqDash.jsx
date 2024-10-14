import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Title from '../../componentes/title/Title';

export default function FaqDash() {

  const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Title tit="FAQ" des="This Are Some Question And Answering" />

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            ما الفائدة 
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}> بسالك عن الفائدة </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              شكلك عيل و مش عارف يعنى ايه فائدة يا جدع رد
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}> مش الفائدة دى بتاعت البنوك </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            فائدة بتاعت البوك حرام اصلا
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            حرام فى حلالات و حالات يا حبيبى عندك مثلا اللى ياخد علشان يعمل ملهى ليلى
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            ليلى ايه يكش تنشك فى معاميعك
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            ليلى دى تبقى قريبتك من ناحية جدتك
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            محدش جاب سيرة القروض و فوائدها
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}> انته بتسال غلط اصلا </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            يبنى انا بسالك فى العموم يكش نظرك يضعف
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
