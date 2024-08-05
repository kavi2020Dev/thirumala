import React from 'react'
import Background from '../../../assets/images/png/footer.png'
import Youtube from '../../../assets/images/png/yt.png'
import Fb from '../../../assets/images/png/fb.png'
import Insta from '../../../assets/images/png/insta.png'
import X from '../../../assets/images/png/x.png'
import { useTranslation } from 'react-i18next'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import './footer.css';
import { motion } from "framer-motion";

const Footer = () => {
 const { t , i18n } = useTranslation()
 const theme = useTheme()
 const isResponsive = useMediaQuery(theme.breakpoints.down('768')) 
 const cur_lang = i18n.language

  return (
    <div className='relative w-full'>     
      <div className={`bg-gradient-p-s h-auto p-10 ${isResponsive ? '' :'flex justify-between'}`}>
       <div className={isResponsive ? 'w-3/4' : 'ml-48'} style={{minWidth:!isResponsive && '145px', maxWidth:!isResponsive &&'375px'}}>
       <Typography variant='h5' color={theme.palette.common.white} fontWeight={350}>{t('footer.subtitle')}</Typography>
        <div className='mt-10'>
         <Typography variant='h5' className='text-yellow-500' fontWeight={400}>Devastanam P.R.O</Typography>  
         <Typography variant='h5' className='text-yellow-500' fontWeight={400}>Phone: +91 4254 304 300</Typography>  
         <Typography variant='h5' className='text-yellow-500' fontWeight={400}>Mobile: 98422 67776</Typography>  
         <Typography variant='h5' className='text-yellow-500' fontWeight={400}>Fax : +91 4254 304 400</Typography>  
        </div>
       </div>
       
       <div className={isResponsive ? 'flex justify-end' : 'mt-1'}>
        <div className={isResponsive ? 'w-36 text-right' : 'w-72'}> 
        <Typography variant='h5' className='text-yellow-500' fontWeight={500}>தென் திருமலை, </Typography>  
        <Typography variant='h5' className='text-white' fontWeight={350}>சிறுமுகை ரோடு, மேட்டுப்பாளையம், கோயம்புத்தூர், தமிழ் நாடு, இந்தியா.</Typography>  
        </div>

        {isResponsive ? null : <motion.div className='box-container mt-8'>
         <div className='mt-1 box-content'>  
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.4859377585963!2d76.98550277334138!3d11.299149249338027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ef6b24e8df69%3A0x358d0da9196ed11f!2sThen%20Tirupati%20Tirumala%20Srivari%20Ananda%20Nilayam!5e0!3m2!1sen!2sin!4v1722834088863!5m2!1sen!2sin" width="100%" style={{borderRadius:'14px'}} height="145" loading="lazy"></iframe>
         </div>
        </motion.div>}

       </div>

       </div> 

     <div className={`bg-primary w-full p-10 ${isResponsive ? 'pl-28' : 'pl-56'} items-center flex`}>
      <img src={Youtube} className='w-7 h-7 cursor-pointer mx-8'/>  
      <img src={Fb} className='w-7 h-7 cursor-pointer mx-8'/>  
      <img src={Insta} className='w-7 h-7 cursor-pointer mx-8'/>  
      <img src={X} className='w-7 h-7 cursor-pointer mx-8'/>  
      {isResponsive ? null : <Typography variant='h5' className='text-white ml-5 pt-2'>{t('footer.name')}</Typography>}
     </div>     

     <img src={Background} alt='templ' className={`${isResponsive ? ' w-24' : 'w-52 mr-52'} h-auto z-1 absolute bottom-0 left-2`}/>
    </div>
    )
}

export default Footer