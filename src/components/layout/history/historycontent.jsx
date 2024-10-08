import {
  Avatar,
  Icon,
  IconButton,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Test from "../../../assets/images/png/001.mp3";
import { useTranslation } from "react-i18next";
import forwardArrow from "../../../assets/images/svg/btn-forward.svg";
import backwardArrow from "../../../assets/images/svg/btn-backword.svg";

const HistoryContent = ({ data }) => {
  const { i18n } = useTranslation();
  const lanuage = i18n.language;
  const theme = useTheme();
  const [isAudio, setIsAudio] = useState(false);
  const [isCondentIndex, setCondentIndex] = useState(0);
  const isRes = useMediaQuery(theme.breakpoints.down(520));
  const sliderRef = useRef(null);
  const audioRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setCondentIndex(current),
  };

  const onAudioPlay = () => {
    const updateAudio = data[isCondentIndex].name;
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(updateAudio);
      setIsAudio(true);
      const voices = window.speechSynthesis.getVoices();
      const tamilVoice = voices.find((voice) => voice.lang === "ta-IN");
      speech.voice = tamilVoice;
      speech.lang = "ta-IN";
      speech.rate = 1; // lanuage == 'en' ? 'en-IN' :
      speech.pitch = 1; // Pitch (0 to 2)
      speech.volume = 1; // Volume (0 to 1)
      speech.onend = () => {
        setIsAudio(false);
      };
      window.speechSynthesis.speak(speech);
    } else {
      console.log("wrrr");
    }
    console.log(lanuage);
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div
      className="relative w-full h-56 slider-container"
      style={{ paddingInlineStart: "10px", paddingInlineEnd: "10px" }}
    >
      <audio ref={audioRef}>
        <source src={Test} type="audio/mpeg" />
      </audio>
      <Slider ref={sliderRef} {...settings}>
        {Array.isArray(data) &&
          data.map((item, idx) => (
            <div key={idx}>
              <Typography variant="h6" className="text-white" fontWeight={400}>
                {item.name}
              </Typography>
            </div>
          ))}
      </Slider>
      <div className="flex justify-between items-center">
        <div>
          {isRes ? (
            <div />
          ) : (
            Array.isArray(data) &&
            data.map((item, idx) => (
              <SvgIcon key={idx} fontSize="10px">
                {isCondentIndex == idx ? (
                  <FiberManualRecordIcon sx={{ color: "white" }} />
                ) : (
                  <FiberManualRecordOutlinedIcon sx={{ color: "white" }} />
                )}
              </SvgIcon>
            ))
          )}
        </div>
        <div className="flex items-center flex-row-reverse mr-10">
          <div className="flex">
            <Avatar
              variant="square"
              src={backwardArrow}
              onClick={previous}
              sx={{ width: "32px", height: "25px", cursor: "pointer" }}
              disabled={isCondentIndex == data.length - 1}
            />
            <Avatar
              variant="square"
              src={forwardArrow}
              onClick={next}
              sx={{ width: "32px", height: "25px", cursor: "pointer", ml: 0.5 }}
              disabled={isCondentIndex == 0}
            />
            {/* <IconButton size='small' className='text-white' onClick={next} disabled={isCondentIndex == data.length-1}> <forwardArrow /> </IconButton> */}
            {/* <IconButton size='small' className='text-white' onClick={previous} disabled={isCondentIndex == 0}><SkipPreviousRoundedIcon  sx={{color:isCondentIndex == 0 ? '#131f3e' : 'white'}}/></IconButton> */}
          </div>

          {/* <div className={`flex items-center rounded-25 px-6 w-fit pt-3 cursor-pointer ${isAudio && 'bg-yellow-500'}`} style={{border:isAudio ? '1.4px solid #ffd601' : '1.4px solid white'}} onClick={()=>onAudioPlay()}>
        <Typography variant='h5' fontWeight={500} className={isAudio ?'text-black':'text-white'} mr={0.5}>கேட்க</Typography>
        <VolumeUpRoundedIcon sx={{fontSize:21, color:isAudio ? 'black' : 'white'}}/>
       </div>   */}
        </div>
      </div>
    </div>
  );
};

export default HistoryContent;
