import React, { useEffect } from 'react'
import './index.css';
import One from '../../../../assets/images/png/one.png'; 
import { useTranslation } from 'react-i18next';

const First_Content = () => {
 const {t} = useTranslation()   
 const headerContent = t('header.content', { returnObjects: true }) || [];

  return (
    <div className='flex flex-col justify-end items-end'>
       {Array.isArray(headerContent) && headerContent.map((item, idx) => (
      <div className="box-container mb-4" key={idx}>
      <div className="box-content bg-gray-500">
       <img src={One} alt='logo' className='w-fit h-auto'/>
       <p className='text-yellow-500 font-medium text-6 mt-2'>{item?.title}</p>
       <p className='font-normal text-6'>{item?.content}</p>
      </div>
     </div>   
     ))}
    </div>
  )
}

export default First_Content