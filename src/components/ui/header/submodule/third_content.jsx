
import React, { useEffect } from 'react'
import './index.css';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const Third_content = () => {
 const {t, i18n } = useTranslation()   
 const currentLanguage = i18n.language;
 console.log(currentLanguage)
  return (
    <div className='flex flex-col mt-12'>
      <div className="box-container mb-4">
      <div className="box-content bg-gray-500">
       <p className='text-yellow-500 font-medium text-6 mt-2 text-center'>{currentLanguage == 'en' ? "Today" : "இன்று" }</p>
       <p className='font-normal text-6 px-12 mt-10'>{moment(new Date()).format('DD-MM-YYYY') } {currentLanguage == 'en' ? 'Aani 31 Monday Swati Kri. Pak. Navami' : 'ஆனி 31 திங்கள் ஸ்வாதி கி.ப. நவமி' }</p>
      </div>
     </div>   
    </div>
  )
}

export default Third_content