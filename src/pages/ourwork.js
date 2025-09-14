import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete.jpg";
import shoot1 from "../img/shoot1.jpg";
import shoo2 from "../img/shoot2.jpg";
import { motion } from "framer-motion";
import {
  PageAnimation,
  fade,
  photoAnimation,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

const OurWork = () => {
  return (
    <OurWorkdes
      style={{ background: "#fff" }}
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athelete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link>
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={athlete}
              alt="athelete"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>The Photoshoot</motion.h2>
        <div className="line"></div>
        <Link>
          <motion.img variants={photoAnimation} src={shoot1} alt="photoshoot" />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Good times</motion.h2>
        <div className="line"></div>
        <Link>
          <motion.img variants={photoAnimation} src={shoo2} alt="goodtimes" />
        </Link>
      </Movie>
    </OurWorkdes>
  );
};

const OurWorkdes = styled(motion.div)`
  min-heigth: 100vh;
  overflow: hidden;
  color: black;
  padding: 5rem 10rem;
  background: white;
  h2 {
    padding: 1rem 0rem;
    color: black;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
