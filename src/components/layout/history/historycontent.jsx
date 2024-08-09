import { Icon, IconButton, SvgIcon, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Test from '../../../assets/images/png/001.mp3'

const HistoryContent = ({data}) => {
 const [isAudio, setIsAudio] = useState(false)
 const [isCondentIndex, setCondentIndex] = useState(0)
 const sliderRef = useRef(null);
 const audioRef = useRef(null);

  const settings = {
    dots: false,
    infinite:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    afterChange: (current) => setCondentIndex(current),
   };  

   const onAudioPlay = () => {
    const audio = audioRef.current;
    if (isAudio) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsAudio(!isAudio)
   }

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className='relative w-full h-56 slider-container'>
       <audio ref={audioRef}>
         <source src={Test} type="audio/mpeg" />
        </audio>
     <Slider ref={sliderRef} {...settings}>
      {data.map((item, idx) => (
       <div key={idx}>       
        <Typography variant='h6' className='text-white' fontWeight={400}>{item.name}</Typography>
       </div> 
      ))}
     </Slider>
     <div className='flex justify-between items-center'>
      <div>
       {data?.map((item, idx) => (
        <SvgIcon key={idx} fontSize='10px'>{isCondentIndex == idx ? <FiberManualRecordIcon sx={{color:'white'}}/> : <FiberManualRecordOutlinedIcon sx={{color:'white'}}/>}</SvgIcon>
       ))} 
      </div>
      <div className='flex items-center flex-row-reverse mr-10'>
       <div className='flex'>
        <IconButton size='small' className='text-white' onClick={next} disabled={isCondentIndex == data.length-1}><SkipNextRoundedIcon sx={{color:isCondentIndex == data.length-1 ? '#131f3e':'white'}}/></IconButton>
        <IconButton size='small' className='text-white' onClick={previous} disabled={isCondentIndex == 0}><SkipPreviousRoundedIcon  sx={{color:isCondentIndex == 0 ? '#131f3e' : 'white'}}/></IconButton>
       </div>

       <div className={`flex items-center rounded-25 px-6 w-fit pt-3 cursor-pointer ${isAudio && 'bg-yellow-500'}`} style={{border:isAudio ? '1.4px solid #ffd601' : '1.4px solid white'}} onClick={onAudioPlay}>
        <Typography variant='h5' fontWeight={500} className={isAudio ?'text-black':'text-white'} mr={0.5}>கேட்க</Typography>
        <VolumeUpRoundedIcon sx={{fontSize:21, color:isAudio ? 'black' : 'white'}}/>
       </div>  
      </div>
     </div>
    </div>
  )
}

export default HistoryContent