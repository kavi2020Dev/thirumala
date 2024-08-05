import React, { useEffect, useRef, useState } from 'react'
import './index.css';
import One from '../../../../assets/images/png/1.jfif'; 
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const First_Content = () => {
 const {t} = useTranslation()   
 const headerContent = t('header.content', { returnObjects: true }) || [];
 const [isHover, setIsHover] = useState(false)

  return (
    <div className='flex flex-col justify-end items-end'>
       {Array.isArray(headerContent) && headerContent.map((item, idx) => (
      <motion.div whileHover={{scaleX:1.1, animationDelay:10}} className="box-container mb-8" key={idx}>
      <div className="box-content bg-gray-500 cursor-pointer" onMouseLeave={()=>setIsHover(false)} onMouseEnter={()=>setIsHover(true)}>
       <img src={One} alt='logo' className='w-fit h-auto rounded-10 '/>
       <div className='p-5'>
       <p className='text-yellow-500 font-bold text-6 my-3'>{item?.title}</p>
       <p className='font-normal text-5 leading-tight'>{item?.content}</p> 
       </div>
       </div>   
      </motion.div> 
     ))}
    </div>
  )
}

export default First_Content