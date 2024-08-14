import { Avatar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import { NavBarEn, NavBarTn } from './data';
import { useLocation, useNavigate } from 'react-router-dom';
// import Ellipse from "../../../assets/images/png/bac_ellipse.png";
import Perumal from "../../../assets/images/png/perumal.png";
import Logo from "../../../assets/images/png/thirumanlogo.png";
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import './index.css'
import './header.css'
import HomeContent from './list/homeContent';
import EventList from './list/eventlist/eventlist';
import MainContent from './list/maincontent/maincontent';
import TodayEvent from './list/todayevent/todayevent';
import MobileMaincontent from './list/maincontent/mobilemaincontent';

const Header = () => {

 const theme = useTheme()
 const { t, i18n } = useTranslation();
 const cur_lang = i18n.language;
 const navigate = useNavigate()
 const isResponsive = useMediaQuery(theme.breakpoints.down('768'))  
 const navContent = cur_lang == 'en' ? NavBarEn : NavBarTn
 const [isLanguage, setIsLanuage] = useState(false)
 const [isOpen, setIsOpen] = useState(false)
 const [isRight, setIsRight] = useState(false)
 const location = useLocation()
 const isMainContent = Boolean(location.pathname == '/home') || location.pathname == '/'

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
    <div className='header'>
     <div className='language_container'>
      {isResponsive ? <IconButton size="small" onClick={OnTaggleDrawer(true)}><MenuOutlinedIcon sx={{color:'white', fontSize:20}}/></IconButton> 
      : 
      <>
       <div onClick={OnChangeLanuage("ta", false)} className={isLanguage ? "lanugage_content" : "lanugage_content_active" }>
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
           <Typography variant='h5' fontWeight={isLanguage ? 400 : 600} pl={0.1}>தமிழ்</Typography>
        </div>
          
          <div onClick={OnChangeLanuage("en", true)} className={!isLanguage ? "lanugage_content" : "lanugage_content_active"}>
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
            <Typography variant='h5' pt={'2px'} fontWeight={isLanguage ? 600 : 400} pl={0.1}>English</Typography>
          </div>
           </>
       }
     </div>
     
     <Typography className={`text-white truncate`} pt={cur_lang == 'en' ? '3px' : 0} fontWeight={450} variant='h5'>{t("header.title")}</Typography>
     {/* <div>Live</div> */}
    </div>

    {isMainContent ? <div className="header_content">
     <div className="header-ellipsi"/>
     {isResponsive ? 
      <div style={{zIndex:'9'}}>
        <MobileMaincontent/>
        <div style={{background: 'linear-gradient(90deg, #E4B614 0%, #BD219B 100%), linear-gradient(180deg, #E6C44B 0%, #BE229B 98.61%)'}} className='absolute right-0 top-1/3 bg-gradient-p-s rounded-s-25' onClick={()=>setIsRight(true)}>
        <SvgIcon className='text-white  cursor-pointer m-4'><NavigateBeforeSharpIcon sx={{fontSize:'26px'}}/></SvgIcon>
       </div>
      </div> 
      : 
     <div className='flex justify-between h-full'>
      <EventList/>
      <MainContent/>
      <TodayEvent/>
     </div>}
    </div> : <div style={{marginBlockEnd:'44px'}}/>}

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

    <Drawer open={isRight} onClose={() => setIsRight(false)} anchor='right' sx={{'& .MuiDrawer-paper': {backgroundColor:'transparent'}}}>
     <Box className='bg-yellow-950 h-full rounded-s-25 box-contain p-10'>
      <div className='w-full h-full rounded-s-25 text-white p-10 overflow-y-scroll' style={{width:210, backgroundColor:'#20130E'}}>
       <HomeContent/> 
      </div>
     </Box>
    </Drawer>
   </>
  )
}

export default Header