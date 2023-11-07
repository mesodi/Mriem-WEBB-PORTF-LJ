import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import webdeveloper from '../../assets/web.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="bg">
                <img src={bg} alt="Profile" />
            </div>
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Mariem</span>
                    <br /> AWS Cloud Developer
                </span>
                <p className="introPara">
                    I am a dedicated AWS Cloud Developer with a strong passion for creating efficient and scalable <br /> cloud solutions. 
                    My experience in designing and implementing cloud-based systems allows me <br />to craft reliable and high-performance applications.
                </p>

            </div>
        </section>
    );
}

export default Intro;
