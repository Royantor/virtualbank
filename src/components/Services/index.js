import React from 'react'
import Icon1 from '../../images/2.svg';
import Icon2 from '../../images/3.svg';
import Icon3 from '../../images/4.svg';
import {
    ServicesContainer,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesWrapper,
    ServicesP
} from './ServicesElements'
const Services = () => {
    return (

        <ServicesContainer id="services">
            <ServicesH1>
                our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>we help reduce your fees and increase your overfall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>virtual officess</ServicesH2>
                    <ServicesP>you can access our platform online anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>premium</ServicesH2>
                    <ServicesP>unlock our special membership returns 5% cash back</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
