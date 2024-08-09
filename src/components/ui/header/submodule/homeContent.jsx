import { Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { useTranslation } from 'react-i18next'
import One from '../../../../assets/images/png/1.jfif'; 

const HomeContent = () => {
 const {t, i18n} = useTranslation()    
 const currentLanguage = i18n.language;
 const headerContent = t('header.content', { returnObjects: true }) || [];

  return (
    <div>
     <Typography className='text-yellow-500' variant='h5' fontWeight={500}>{currentLanguage == 'en' ? "Today" : "இன்று" }</Typography>
     <Typography className='text-white' mb={2} variant='h6' fontWeight={400}>{moment(new Date()).format('DD-MM-YYYY') } {currentLanguage == 'en' ? 'Aani 31 Monday Swati Kri. Pak. Navami' : 'ஆனி 31 திங்கள் ஸ்வாதி கி.ப. நவமி' }</Typography>

     {Array.isArray(headerContent) && headerContent.map((item, idx) => (
      <div className="mb-8" key={idx}>
       <img src={One} alt='logo' className='w-fit h-auto rounded-10 '/>
       <div className='p-5'>
       <Typography className='text-yellow-500' variant='h5' fontWeight={500}>{item?.title}</Typography>
       <Typography className='text-white' variant='h6' fontWeight={400}>{item?.content}</Typography> 
       </div>   
      </div> 
     ))}
    </div>
  )
}

export default HomeContent