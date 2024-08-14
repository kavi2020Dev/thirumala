import React from 'react'
import './todayevent.css'
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import moment from 'moment';

const TodayEvent = () => {
 const {t, i18n } = useTranslation()   
 const currentLanguage = i18n.language;
        
  return (
   <div className='flex flex-col mt-12'>
    <div className='todayList'>
     <div className='todayList-content '>
      <Typography className='text-yellow-500' variant='h5' fontWeight={500}>{currentLanguage == 'en' ? "Today" : "இன்று" }</Typography>
      <Typography className='text-white w-20' mb={1.4} variant='h6' fontWeight={400}>{moment(new Date()).format('DD-MM-YYYY') } {currentLanguage == 'en' ? 'Aani 31' : 'ஆனி 31' }</Typography>
      <Typography className='text-white w-20' mb={2} variant='h6' fontWeight={400}>{currentLanguage == 'en' ? 'Monday Swati Kri. Pak. Navami' : 'திங்கள் ஸ்வாதி கி.ப. நவமி' }</Typography>
     </div>
    </div>
   </div> 
  )
}

export default TodayEvent