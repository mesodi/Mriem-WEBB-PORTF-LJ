import React, { useRef } from "react";
import './contact.css';
import Facebook from  '../../assets/facebook.png';
import  Email from '../../assets/email.png';
import Instgram  from '../../assets/instagram.png';
import GitHub  from '../../assets/GitHub.png';
import emailjs from '@emailjs/browser';


const Contact = ( ) => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pvx9lek', 'template_hmep2ul', form.current, 'rTRojSGa5GkMmpxm1')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email sent!');
      }, (error) => {
        console.log(error.text);
      });
    
    };

return(
<section className="contactpage">

    .<div id = " contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <samp p className="contactDesc">Kindly complete the form provided.</samp>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name="your_name"/>
            <input type="email" className="email" placeholder="Your Email" name=" your_email"/>
            <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
            <button type="submit" value="send" className="submitBtn">Submit</button>
            <div className="links">


            <a href="https://m.facebook.com/profile.php/?id=100001276742617" target="_blank" rel="noopener noreferrer"> 
                <img src={Facebook } alt=" Facebook" className="link"/>
                </a>    
                <a href="mailto:mariem.saleh@hotmail.com" target="_blank" rel="noopener noreferrer">
                     <img src={Email} alt=" Email" className="link" />
                </a>

                <a href="https://www.instagram.com/merumi_07" target="_blank" rel="noopener noreferrer">
                <img src={Instgram} alt="Instgram" className="link"/>
                </a>
                
                <a href="https://github.com/mesodi" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" className="link" />
</a>

              

            </div>


        </form>

    </div>

</section>
)
}

export default Contact 