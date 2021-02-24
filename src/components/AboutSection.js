import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'
import { About, Description, Hide, Image } from '../styles'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../pages/animation";
import Wave from './Wave'
const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className='title'>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>I work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>Contact me for any web design/ developing ideas that you have. I'll make it professional with my amazing skills </motion.p>
                <motion.button variants={fade}><Link to='/contact'>Contact Me</Link></motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt='guy with a camera' />
            </Image>
            <Wave />
        </About>
    )
}


export default AboutSection;
