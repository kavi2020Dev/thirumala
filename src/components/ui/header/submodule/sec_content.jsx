import React from 'react'
import Logo from '../../../../assets/images/png/thirumanlogo.png'
import MainPic from '../../../../assets/images/png/perumal.png'
import { useTranslation } from 'react-i18next'
import './index.css';
import { Avatar, styled, Typography, useMediaQuery, useTheme} from '@mui/material';
import ThiruMala from '../../../../assets/images/png/thirumanlogo.png'


const Sec_content = () => {
 const {t, i18n} = useTranslation()  
 const Lanuage = i18n.language;
 const theme = useTheme()
 const isRes = useMediaQuery(theme.breakpoints.down('1024'))  
 

  return (
    <div className='flex flex-col items-center'>
     <Avatar variant='square' src={ThiruMala} sx={{width:'150px', height:'auto', mb:5}}/> 
     {/* <Typography className='bg-logo_english_big' mt={2.5}/> */}
     <Typography className={Lanuage == 'en' ? 'bg-logo_english_big' :'bg-logo_tamil_big'} mt={isRes ? 5 :2.5}/>
     <img src={MainPic} alt='logo' variant='square' className='absolute bottom-0 h-auto m-auto left-0 right-0' style={{width:'30%'}}/>  
    </div>
  )
}

export default Sec_content