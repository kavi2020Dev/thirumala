import { Avatar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import { NavBarEn, NavBarTn } from './data';
import { useNavigate } from 'react-router-dom';
import Background from "../../../assets/images/png/background.png";
import Logo from "../../../assets/images/png/thirumanlogo.png";

const Header = () => {

 const theme = useTheme()
 const { t, i18n } = useTranslation();
 const cur_lang = i18n.language;
 const navigate = useNavigate()
 const isResponsive = useMediaQuery(theme.breakpoints.down('768'))  
 const navContent = cur_lang == 'en' ? NavBarEn : NavBarTn
 const [isLanguage, setIsLanuage] = useState(false)
 const [isOpen, setIsOpen] = useState(false)

 const OnTaggleDrawer = (drawer) => ()  => {
  setIsOpen(drawer)
 }
 
  const OnNavigate  = (path) => () => {
   navigate(path)
   setIsOpen(false)
   console.log(path)
  }
  
  const OnChangeLanuage = (lang, status) => () => {
   setIsLanuage(status)
   i18n.changeLanguage(lang)
  }
  
 
  return (
   <>
    <div className='relative bg-primary flex items-center cursor-pointer'>
     <div className='bg-gradient-p-s w-fit flex items-center opacity-95 py-5'>
      {isResponsive ? <IconButton size="small" onClick={OnTaggleDrawer(true)}><MenuOutlinedIcon sx={{color:'white', fontSize:24}}/></IconButton> 
      : 
      <>
            <motion.div
            onClick={OnChangeLanuage("ta", false)}
            whileHover={{scale:1.1}}
            whileTap={{ scale:1.0}}
            className={
              isLanguage
                ? "p-2 rounded-25 px-10 ml-12 items-center text-white cursor-pointer"
                : "bg-yellow-500 p-3 rounded-25 px-10 items-center flex cursor-pointer"
             }
            >
            {!isLanguage && (
              <svg
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.34198 7.93735L3.06801 5.45318L2.95256 5.42839C1.60898 5.13984 0.404251 6.31104 0.65477 7.66222L4.34408 11.6926C5.04115 12.4541 6.27657 12.3221 6.79704 11.4305L12.5522 1.57193C13.0274 0.757915 11.8983 -0.0287562 11.2993 0.699021L5.34198 7.93735Z'
                  fill='#158219'
                />
              </svg>
            )}
            <p className={`text-5 ${isLanguage ? "font-normal" : "font-bold"}`}>
              தமிழ்
            </p>
          </motion.div>
          
          <motion.div
            onClick={OnChangeLanuage("en", true)}
            animate={{x:5}}
            whileHover={{scale:1.1}}
            whileTap={{ scale:1.0}}
            className={
              !isLanguage
                ? "p-2 rounded-25 px-10 ml-12 items-center text-white cursor-pointer"
                : "bg-yellow-500 p-3 rounded-25 px-10 items-center align-middle flex cursor-pointer"
             }
            >
            {isLanguage && (
              <svg
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.34198 7.93735L3.06801 5.45318L2.95256 5.42839C1.60898 5.13984 0.404251 6.31104 0.65477 7.66222L4.34408 11.6926C5.04115 12.4541 6.27657 12.3221 6.79704 11.4305L12.5522 1.57193C13.0274 0.757915 11.8983 -0.0287562 11.2993 0.699021L5.34198 7.93735Z'
                  fill='#158219'
                />
              </svg>
            )}
            <p className={`text-5 ${!isLanguage ? "font-normal" : "font-bold"} pt-2`}>
              English
            </p>
          </motion.div>
           </>
       }
     </div>
     <Typography className={`text-white truncate ${isResponsive ? 'pl-0' : 'pl-12 pt-3'}`} variant='h5'>{t("header.title")}</Typography>
     {/* <div>Live</div> */}
    </div>

    <div className='relative w-screen bg-center bg-cover h-screen' style={{backgroundImage:`url(${Background})`, minHeight:'480px', maxHeight:'100vh'}}>
     {isResponsive ? 
     <div className='p-5 w-full flex flex-col justify-center'>
      <img src={Logo} alt='logo' variant='square' className='w-28 h-auto m-auto'/> 
     </div> 
     : 
     <di>Tests</di>}  
    </div>

    <Drawer open={isOpen} onClose={OnTaggleDrawer(false)}>
     <Box sx={{width:'210px', padding:'10px'}}>
      
      <List >
       {navContent.map((nav, idx) => (
        <ListItem key={idx} disablePadding className='cursor-pointer' onClick={OnNavigate(nav.path)}>
         <Typography variant='h5' py={1}>{nav.name}</Typography>
        </ListItem> 
       ))}  
      </List>
     </Box>
    </Drawer>
   </>
  )
}

export default Header