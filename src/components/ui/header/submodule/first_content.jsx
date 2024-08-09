import React, { useEffect, useRef, useState } from 'react'
import './index.css';
import One from '../../../../assets/images/png/1.jfif'; 
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Box, styled, Typography } from '@mui/material';

const First_Content = () => {
 const {t} = useTranslation()   
 const headerContent = t('header.content', { returnObjects: true }) || [];
 const [isHover, setIsHover] = useState(false)

 const Condent = styled(Box)({ 
  borderRadius:'16px',
  padding: '4px',
  color:' black',
  width: '140px',
  height: '185px',
  color:'white',
  overflowY: "scroll"
 })

  return (
    <div className='flex flex-col justify-end items-end'>
       {Array.isArray(headerContent) && headerContent.map((item, idx) => (
       <motion.div whileHover={{scaleX:1.1, animationDelay:10}} className="box-container mb-8" key={idx}>
        <Condent className="cursor-pointer bg-gray-500" onMouseLeave={()=>setIsHover(false)} onMouseEnter={()=>setIsHover(true)}>
        <img src={One} alt='logo' className='w-fit h-auto rounded-10 '/>
        <div className='p-5'>
        <Typography className='text-yellow-500' variant='h5' fontWeight={500}>{item?.title}</Typography>
        <Typography className='text-white' variant='h6' fontWeight={400}>{item?.content}</Typography>   
        </div>
        </Condent>   
      </motion.div> 
     ))}
    </div>
  )
}

export default First_Content