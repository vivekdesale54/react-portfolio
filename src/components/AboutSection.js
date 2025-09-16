import Heroimage from "../img/Heroimage.jpg";
import { About, Description, Hide, Image } from "../style";
// import styled from 'styled-components';
//Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnimation } from "../animation";
import Wave from "./wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={Heroimage}
          alt=""
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
