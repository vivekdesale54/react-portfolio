import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/servicessection";
import FaqSection from "../components/faqsection";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const Aboutus = () => {
  return (
    <motion.div
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default Aboutus;
