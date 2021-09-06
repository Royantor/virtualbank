import React, {useState}  from 'react'
import Video from  '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {HeroContainer,HeroBg,VideoBg,HeroBtnWrappper,HeroH1,HeroP,HeroContent,ArrowForward,ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover,setHover] = useState(false);
    
    const onHover = () =>{
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>virthual Banking easy made</HeroH1>
                <HeroP>what are you looking for i am here</HeroP>
                <HeroBtnWrappper>
                    <Button to='signup' onMouseEnter={onHover}
                     onMouseLeave={onHover} primary='true'dark='true'>
                        Get started  {hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrappper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
