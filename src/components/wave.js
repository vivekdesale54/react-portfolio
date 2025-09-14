import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1450 674"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d="M4.99609 390.998C4.99609 390.998 126.5 10.9983 303.5 5.49825C480.5 -0.00174548 608.5 220.499 885 543.498C1161.5 866.498 1418.51 470.763 1445 390.998"
        stroke="#FFC9FC"
        stroke-opacity="0.1"
        stroke-width="10"
        stroke-linecap="round"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;

export default Wave;
