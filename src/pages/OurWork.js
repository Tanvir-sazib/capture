import React from 'react'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from 'framer-motion'
import { sliderContainer, slider, lineAnim, pageAnimation, fade, photoAnimation } from '../pages/animation'
import { useScroll } from "../components/UseScroll";
import ScrollTop from '../components/ScrollTop'
const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work exit='exit' variants={pageAnimation} initial="hidden" animate="show" style={{ background: "#fff" }}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Post>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <Hide>
                        <motion.img variants={photoAnimation} src={athlete} alt="" />
                    </Hide>
                </Link>
            </Post>

            <Post variants={fade} ref={element} animate={controls} initial="hidden" >
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <Hide>
                        <motion.img variants={photoAnimation} src={theracer} alt="" />
                    </Hide>
                </Link>
            </Post>

            <Post variants={fade} ref={element2} animate={controls2} initial="hidden" >
                <motion.h2 variants={fade}>Good time never ends</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/good-times'>
                    <Hide>
                        <motion.img variants={photoAnimation} src={goodtimes} alt="" />
                    </Hide>
                </Link>
            </Post>
            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    padding: 5rem 10rem;
    @media(max-width:1300px){
        padding:2rem 2rem;
    }
`
const Post = styled(motion.div)`
    padding-bottom:10rem;

    .line{
        width:100%;
        height:.5vh;
        background:#23d997;
        margin-bottom:3rem;
    }
    h2{
        padding:1rem 0rem;
    }
    img{
        width:100%;
        height:70vh;
        object-fit:cover;
    }
`
const Hide = styled.div`
    width:100%;
    overflow:hidden;
`
//fRAME Animation

const Frame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top:10%;
    width:100%;
    height:100vh;
    background: #fffebf;
    z-index:2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`
export default OurWork
