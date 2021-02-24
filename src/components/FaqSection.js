import React from 'react'
import { About } from '../styles'
import styled from 'styled-components'
import Toggle from "./Toggle";
import { motion } from "framer-motion";
import { fade, scrollEffect } from "../pages/animation";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./UseScroll";

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollEffect} ref={element} animate={controls} initial="hidden">
            <h2>Any questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>

                    <motion.div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto?</p>
                    </motion.div>

                </Toggle>

                <Toggle title='Daily Schedule'>

                    <motion.div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem tt ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto?</p>
                    </motion.div>

                </Toggle>

                <Toggle title='Different Payment Method'>

                    <motion.div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem tt ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto?</p>
                    </motion.div>

                </Toggle>

                <Toggle title='What products do you offer.'>

                    <motion.div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem tt ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto?</p>
                    </motion.div>

                </Toggle>
            </AnimateSharedLayout>
        </Faq>


    )
}
const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background:#cccccc;
        height:0.2rem;
        margin: 2rem 0rem;
        width:100%;
    }

    .question{
        padding:3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding:2rem 0rem;
        p{
            padding:1rem 0rem
        }
    }
`;
export default FaqSection
