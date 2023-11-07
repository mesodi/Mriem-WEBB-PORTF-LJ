import React from "react";
import './skills.css';
import clouddeveloper from '../../assets/cloud.png';
import webdeveloper from '../../assets/web.png';




const skills = () => {
    return (
        <section id = 'skills'>
          <span className= "skillTitle">
          My task is to locate her </span>
            <span className="skillDesc"> I manage cloud-based applications and infrastructure on Amazon Web Services (AWS), ensuring their scalability and reliability.<br/>I specialize in designing and building websites and web applications using HTML, JavaScript, CSS, and React.</span>
<div className="skillBars">
    <img src = {clouddeveloper} alt= "clouddeveloper" className= "skillBarsImg"/>
    <h2>AWS Clouddeveloper</h2>
    <p>An AWS Cloud Developer manages cloud-based applications and infrastructure on AWS.</p>

</div>
<div className="skillBars">
    <img src = {webdeveloper} alt= "webdeveloper" className= "skillBarsImg"/>
    <h2>Web Developer</h2>
    <p>Web Developer designs and builds websites and web applications.</p>
    
</div>
            </section>
    );
}
export default skills;