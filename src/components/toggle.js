import { useState } from "react";
import { motion, layout } from "framer-motion";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

const Togglepoint = styled.div`
  cursor: pointer;
`;
export default Toggle;
