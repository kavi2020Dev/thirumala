
import React, { useEffect } from 'react'
import './index.css';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Box, styled, Typography } from '@mui/material';

const Condent = styled(Box)({ 
  borderRadius:'16px',
  padding: '8px',
  color:' black',
  width: '140px',
  height: '185px',
  color:'white',
  overflowY: "scroll"
 })

const Third_content = () => {
 const {t, i18n } = useTranslation()   
 const currentLanguage = i18n.language;
 

 return (
    <div className='flex flex-col mt-12'>
      <div className="box-container mb-4">
      <Condent className="bg-gray-500">
       <Typography className='text-yellow-500' variant='h5' fontWeight={500}>{currentLanguage == 'en' ? "Today" : "இன்று" }</Typography>
       <Typography className='text-white' mb={2} variant='h6' fontWeight={400}>{moment(new Date()).format('DD-MM-YYYY') } {currentLanguage == 'en' ? 'Aani 31 Monday Swati Kri. Pak. Navami' : 'ஆனி 31 திங்கள் ஸ்வாதி கி.ப. நவமி' }</Typography>
      </Condent>
     </div>   
    </div>
  )
}

export default Third_content