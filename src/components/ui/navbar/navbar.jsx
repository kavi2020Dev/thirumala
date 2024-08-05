import React from 'react'
import Header from '../header/header'
import { useLocation, useNavigate } from 'react-router-dom'
import background from '../../../assets/images/png/navbarbg.png'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import { Typography, useMediaQuery, useTheme } from '@mui/material'

const NavbarContent = () => {
 const navbarData = [
  {
   name:'Home',
   path : '/home' 
  },
  {
   name :'Temple History',
   path : '/templehistroy'  
  },
  {
   name :'Uthsavams',
   path : '/uthsams'   
  },
  {
    name :'Panchangam',
    path : '/panchangam'     
  },
  {
    name :'Others',
    path : '/other'  
  }    
 ]    
 const navbarTwo = [
    {
     name:'முகப்பு',
     path : '/home' 
    },
    {
     name :'திருக்கோவில் சரிதம்',
     path : '/templehistroy'  
    },
    {
     name :'உத்ஸவங்கள்',
     path : '/uthsams'   
    },
    {
      name :'பஞ்சாங்கம்',
      path : '/panchangam'     
    },
    {
      name :'மற்றவை',
      path : '/other'  
    }    
   ]    
 const theme = useTheme()  
 const navigate = useNavigate()
 const location = useLocation()
 const {i18n} = useTranslation()
 const isResponsive = useMediaQuery(theme.breakpoints.down('768')) 
 const lanuage = i18n.language;
 const data = lanuage == 'en' ? navbarData : navbarTwo;

  return (
   <>
   <Header/>
    <div style={{backgroundImage:`url(${background})`}} className='bg-yellow-500 w-full mb-10 flex justify-center items-center p-6'>
    {isResponsive ? <div className='p-5'/> : data?.map((nav, idx) => (
     <motion.div
      key={idx}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: idx * 0.1 }}
      whileHover={{scale:0.9}}
      className={(location.pathname === '/' ? '/home' : location.pathname) === nav.path ? 
       'bg-black text-white flex mx-6 cursor-pointer py-3 items-center rounded-15' : 
       'flex mx-6 cursor-pointer py-3 items-center rounded-15'
     }
     onClick={() => navigate(`${nav.path}`)}
   >
      <Typography variant='h5' className='px-12 pt-1'>{nav.name}</Typography>  
     </motion.div>   
    ))}
    </div>
   </>
  )
}

export default NavbarContent