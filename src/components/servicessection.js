import React from 'react';
import Clock from '../img/clock.png';
import money from '../img/money.png';
import capture from '../img/capture.png';
import team from '../img/team.png';
import home2 from '../img/home2.jpg'
import {About, Description, Image} from '../style'
import styled from 'styled-components';

const ServicesSection = () => {
  return (
    <About>
      <Description>
        <h2>
          High <span>quality </span>services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={Clock} alt="" />
              <h3>Efficitent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={capture} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={team} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <ServicesImage>
            <img style={{width: "600px"}} src={home2} alt="" />
        </ServicesImage>
      </Description>
    </About>
  );
};

const ServicesImage = styled(Image)`
  width: 800px;
  height: 80vh
`

export default ServicesSection;
