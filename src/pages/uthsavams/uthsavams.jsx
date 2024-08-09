import React from 'react'
import Background from '../../assets/images/png/uthvash/background.png'
import Border from '../../assets/images/png/border.png'
import { Avatar, styled, Typography } from '@mui/material'
import RightDesign from '../../assets/images/png/rside.png'
import LeftDesign from '../../assets/images/png/lside.png'

const Uthsavams = () => {

  const Header = styled(Typography)({
    background: 'linear-gradient(to right, #ffd601, #880e4f)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    fontSize:'2.6rem',
    fontWeight:'600',
    // WebkitTextStroke: '-3px #3e2723',
    // WebkitTextFillColor: 'transparent',
  });

  const ImageBorderDiv = styled('div')({
    borderBottom: `30px solid transparent`,
    borderImage: `url(${Border}) 40 round`,
    padding: '35px',
    textAlign: 'center',
    marginBlockEnd:'100px',
    zIndex:'99',
    marginBottom:'-20px'
  });

  return (
    <div>
     <div className='bg-cover w-full h-full p-10 flex justify-start items-end' style={{backgroundImage:`url(${Background})`, minHeight:'320px', maxHeight:'360px'}}>
      <div>
      <Header variant='h1'>தரிசன </Header>
      <Header variant='h1' ml={3}>சேவைகள்</Header>
      </div>
     </div> 
     
     <ImageBorderDiv className='bg-yellow-200 w-full h-auto'>
      <Typography variant='h6'>இறைவனை அவரது இரவு ஓய்விற்கு தயார்படுத்தும் ஒரு இரவு நேர சடங்கு செய்யப்படுகிறது, அதில் இறைவனுக்கு பால் மற்றும் முந்திரி சமர்ப்பணம் செய்யப்படுகிறது. போக ஸ்ரீனிவாச மூர்த்தி, அர்த்த மண்டபத்தில் (பக்தர்கள் இறைவனின் தரிசனத்திற்காக காத்திருக்கும் முன் அறை) நான்கு வெள்ளி சங்கிலிகளால் கூரையிலிருந்து தொங்கவிடப்பட்ட கட்டிலில் இறைவனின் சிறிய வெள்ளி உருவம் வைக்கப்பட்டுள்ளது. ஏகாந்த சேவையின் போது, ​​அன்னமாச்சார்யாவின் நேரடி வழித்தோன்றல் இறைவனை உறங்குமாறு பாடுகிறார். அந்த நேரத்தில், குங்குமத்துடன் சந்தனம் கலந்து ஆரஞ்சு வடிவில் ஒரு வெள்ளி கோப்பையில் வைக்கப்பட்டு, மறுநாள் காலை வரை இறைவன் பாதத்தில் வைக்கப்படுகிறது. சர்வதரிசனத்தின் போது இந்த கலவையில் ஒரு சிட்டிகை பக்தர்களுக்கு வழங்கப்படுகிறது.</Typography>
     </ImageBorderDiv>

     <div className='relative w-full h-screen p-10 '>
      <div className="absolute top-0 left-0">
        <Avatar 
          variant="square" 
          src={LeftDesign} 
          alt="left" 
          sx={{ width: '200px', height: 'auto' }}
        />
      </div>
      <div className="absolute top-0 right-0">
        <Avatar 
          variant="square" 
          src={RightDesign} 
          alt="right" 
          sx={{ width: '200px', height: 'auto' }}
        />
      </div>
      <p>Test screen</p>
      </div>

    </div>
  )
}

export default Uthsavams