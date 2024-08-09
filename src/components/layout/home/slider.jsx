import React from 'react';
import Slider from 'react-slick';
import { Avatar, Grid, IconButton, styled } from '@mui/material';
import One from '../../../assets/images/png/home/1.jfif';
import Two from '../../../assets/images/png/home/2.jfif';
import Three from '../../../assets/images/png/home/3.jfif';
import Four from '../../../assets/images/png/home/4.jfif';
import Five from '../../../assets/images/png/home/5.jfif';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

// Import slick-carousel css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const swipperData = [
  { slide: One },
  { slide: Two },
  { slide: Three },
  { slide: Two },
  { slide: Five },
  { slide: One },
  { slide: Two },
  { slide: Three },
  { slide: Two },
  { slide: Five }
];

const Container = styled(Grid)({
  position: "relative",
  padding: "3px", 
});

const Content = styled(Grid)({
  borderRadius: "8px",
  background: 'linear-gradient(to right, #ec407a, #ffee58)',
});

const CustomArrow = ({ className, style, onClick, icon }) => (
  <IconButton
    onClick={onClick}
    className={className}
    style={{
      ...style,
      display: 'block',
      color: '#ec407a',
      position: 'absolute',
      top: '15%',
      transform: 'translateY(-40%)',
      transform: 'translateX(-40%)',
      zIndex: 1,
    }}
  >
    {icon}
  </IconButton>
);

const CustomizeSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 2200,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <CustomArrow icon={<ArrowCircleRightRoundedIcon sx={{ fontSize: '24px' }} />} />,
    prevArrow: <CustomArrow icon={<ArrowCircleLeftRoundedIcon sx={{ fontSize: '24px' }} />} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
      <div className="slider-container relative px-14 cursor-pointer">
        <Slider {...settings}>
          {swipperData.map((item, idx) => (
            <div key={idx} className='px-3'>
              <Content>
                <Container>
                <Avatar variant='square' src={item?.slide} style={{ width: '100%', height: 'auto', borderRadius: '6px' }} alt='slide' />
                </Container> 
              </Content>
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default CustomizeSlider;
