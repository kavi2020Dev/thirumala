import React from 'react'
import Logo from '../../../../assets/images/png/thirumanlogo.png'
import MainPic from '../../../../assets/images/png/perumal.png'
import { useTranslation } from 'react-i18next'
import './index.css';

const Sec_content = () => {
 const {t, i18n} = useTranslation()  
 const Lanuage = i18n.language;

  return (
    <div className='flex flex-col items-center'>
     <img src={Logo} className='w-36 h-auto'/>  
     <h2 className='font-medium tracking-tighter mt-12 h-auto gradient-text'>{t('header.name')}</h2>
     <h2 className={`text-lg font-normal tracking-tighter text-white ${Lanuage == 'en' ? 'leading-0' : 'leading-3'}`}>{t('header.subtitle')}</h2>
     <img src={MainPic} alt='logo' style={{width:'62%'}} className='h-auto p-10'/>
    </div>
  )
}

export default Sec_content