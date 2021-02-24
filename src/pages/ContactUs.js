import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { pageAnimation, titleAnimation, lineAnim } from '../pages/animation'
import ScrollTop from '../components/ScrollTop'
const ContactUs = () => {
    return (
        <Title exit='exit' variants={pageAnimation} initial="hidden" animate="show" style={{ background: "#fff" }}>
            <Hide>
                <motion.h1 variants={titleAnimation}>Get in touch</motion.h1>
            </Hide>
            <motion.div variants={lineAnim} className='line'></motion.div>

            <Hide>
                <Social variants={titleAnimation}>
                    <Circle />
                    <h4>Email me</h4>
                </Social>
            </Hide>

            <Hide>
                <Social variants={titleAnimation}>
                    <Circle />
                    <h4>Facebook</h4>
                </Social>
            </Hide>

            <Hide>
                <Social variants={titleAnimation}>
                    <Circle />
                    <h4>Linked In</h4>
                </Social>
            </Hide>

            <Hide>
                <Social variants={titleAnimation}>
                    <Circle />
                    <h4>GitHub</h4>
                </Social>
            </Hide>

            <Hide>
                <Social variants={titleAnimation}>
                    <Circle />
                    <h4>Instagram</h4>
                </Social>
            </Hide>
            <ScrollTop />
        </Title>
    )
}

const Hide = styled.div`
    overflow:hidden;
`
const Title = styled(motion.div)`
    padding: 5rem 10rem;
    min-height:90vh;
    h1{
        margin-bottom:3rem;
        font-size:3rem;
    }
    .line{
        width:100%;
        height:.5vh;
        background:#23d997;
        margin-bottom:4rem;
    }
    @media(max-width:1500px){
        padding:2rem;
        font-size:1rem;
    }
`
const Circle = styled.div`
    width:4rem;
    height:4rem;
    border-radius:50%;
    border: 1px solid #23d997;
    background:#3333;
    margin:2rem;
`
const Social = styled(motion.div)`
    margin:0rem 3rem;
    color:black;
    display:flex;
    align-items:center;
`

export default ContactUs
