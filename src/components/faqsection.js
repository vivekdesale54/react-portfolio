import styled from "styled-components";
import { About } from "../style";
import Toggle from "./toggle";
import { LayoutGroup } from "framer-motion";

const FaqSection = () => {
  return (
    <div>
      <Faq>
        <h2>
          Any Questions? <span>FAQ</span>
        </h2>
        <LayoutGroup>
          <Toggle title="How do I start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae.
              </p>
            </div>
          </Toggle>
        </LayoutGroup>
        <LayoutGroup>
          <Toggle title="Daily schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae.
              </p>
            </div>
          </Toggle>
        </LayoutGroup>
        <LayoutGroup>
          <Toggle title="Different payment methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae.
              </p>
            </div>
          </Toggle>
        </LayoutGroup>
        <LayoutGroup>
          <Toggle title="What products do you offer">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae.
              </p>
            </div>
          </Toggle>
        </LayoutGroup>
      </Faq>
    </div>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%auto;
  }
  .question {
    padding: 3rem 0rem;
    cursoe: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
