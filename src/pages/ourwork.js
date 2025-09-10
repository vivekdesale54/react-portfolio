import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete.jpg"
import shoot1 from "../img/shoot1.jpg"
import shoo2 from "../img/shoot2.jpg"


const OurWork = () => {
    return(
        <OurWorkdes> 
            <Movie>
                <h2>The Athelete</h2>
                <div className="line"></div>
                <Link>
                        <img  src={athlete} alt="athelete" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Photoshoot</h2>
                <div className="line"></div>
                <Link>
                    <img src={shoot1} alt="photoshoot" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good times</h2>
                <div className="line"></div>
                <Link>
                    <img src={shoo2} alt="goodtimes" />
                </Link>
            </Movie>
        </OurWorkdes>
    )
};

const OurWorkdes = styled.div`
    min-heigth: 100vh;
    overflow: hidden; 
    color: black;
    padding: 5rem 10rem;
    background: white;
    h2{
        padding: 1rem 0rem;
        color: black;
    }
        img{
            width: 100%;
            height: 100vh;
            object-fit: cover;
        }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
`
export default OurWork;