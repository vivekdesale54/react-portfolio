import styled from "styled-components";
import { motion } from "framer-motion";
import { PageAnimation, titleAnim } from "../animation";

const Contactus = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title variants={titleAnim}>
        <Hide>
          <motion.h2 style={{ color: "black" }}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2 style={{ color: "black" }}>Send us a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2 style={{ color: "black" }}>Send an Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2 style={{ color: "black" }}>Social media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
export default Contactus;
