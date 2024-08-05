import { Avatar, Grid, IconButton, styled, Typography } from '@mui/material'
import React from 'react'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import One from '../../../assets/images/png/home/1.jfif';
import Two from '../../../assets/images/png/home/2.jfif';
import Three from '../../../assets/images/png/home/3.jfif';
import Four from '../../../assets/images/png/home/4.jfif';
import Five from '../../../assets/images/png/home/5.jfif';

const Slider = () => {
 const swipperData = [
  {slide: One},   
  {slide: Two},   
  {slide: Three},   
  {slide: Four},   
  {slide: Five},
  {slide: One},   
  {slide: Two},   
  {slide: Three},   
  {slide: Four},   
  {slide: Five}     
 ]    
 
 const Container = styled(Grid)({
  position: "relative",
  padding:"2.5px",
  borderRadius:"8px",
  background: 'linear-gradient(to right, #ec407a, #ffee58)',
  width: 'fit-content'
 })

 const Content = styled(Grid)({
  borderRadius:"10px", 
  width:"215px",
  height:"145px",
  color:"white",
 })

  return (
  <div className='relative p-12 px-14'>
   <div className='w-full flex overflow-x-scroll'>
     {swipperData.map((item, idx) => (
      <Container className='mx-6'>
       <Content> 
        <Avatar variant='square' src={item?.slide} style={{width:'215px', height:'145px', borderRadius:'6px'}} alt='re'/>   
       </Content>    
      </Container> 
     ))} 
   </div>  
   <IconButton size='small' className='absolute left-0 z-1 top-0'><ArrowCircleLeftRoundedIcon sx={{fontSize:'24px', color:'#ec407a'}}/></IconButton>

  </div>  
)
}
// <div className='relative p-5'>
 {/* <IconButton size='small' className='absolute left-1 top-24'><ArrowCircleLeftRoundedIcon sx={{fontSize:'24px', color:'#ec407a'}}/></IconButton>       */}
//   <div className='flex px-12 mx-10 w-full bg-red-200'>
//   
//    <Typography>ksdsdksdks</Typography>
//   </div>
//  {/* <IconButton size='small'><ArrowCircleRightRoundedIcon sx={{fontSize:'24px', color:'#ec407a'}}/></IconButton>       */}
// </div>

export default Slider