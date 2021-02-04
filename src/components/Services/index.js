import React from 'react'
import Icon1 from '../../images/img-4.jpg'
import Icon2 from '../../images/img-5.jpg'
import Icon3 from '../../images/img-6.jpg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Permanent Staffing</ServicesH2>
                    <ServicesP>We can make your permanent recruitment process easier and smoother by sourcing, screening and selecting candidates who best fits your positions</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Temporary Staffing</ServicesH2>
                    <ServicesP>We serve your temporary staffing needs with quick turn around. We are committed to finding the right candidate for your recruitment needs. We offer an informed professional open approach and efficient service.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Recruitment Process Outsourcing</ServicesH2>
                    <ServicesP>Whether it's an end-to-end program, our recruiter-on-demand offering or selective RPO - Velan Consulting has the perfect solution for your hiring challenges.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
