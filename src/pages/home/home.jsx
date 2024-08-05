import { Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import History from '../../components/layout/home/history'
import Slider from '../../components/layout/home/slider'

const Home = () => {
 const {t} = useTranslation()  
  return (
    <>
     <div className='relative w-full'>
      <History/>
      <Slider/>
     </div>
    </>
  )
}

export default Home