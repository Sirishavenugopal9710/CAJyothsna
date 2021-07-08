import React from 'react'
import Image from './image/locationcont.png'
import Image1 from './image/messagecont.png'
import Image2 from './image/callcont.png'
 import Image3 from './image/clockcont.png'

 
import './ContactUs.css'
import  GoogleMap  from './GoogleMap'

export const ContactUs = () => {
    return (
        <div>
            <h1 className="contact-h1">Contact Us</h1>
          
            <img src={Image} alt="contact" className="location"/>
            <h2 className="contact-h2">Our Office Address</h2>
            <p className="contact-p">Flat No-84/201,2nd Floor,Sri Ram Arcade, above Axis Bank</p>
            <p className="contact-p">Seegehalli near kadugodi, Krishnarajapura, Bengaluru, Karnataka 560067</p>
        
            <img src={Image1} alt="contact" className="message"/>
            <h2 className="contact-h21">General Enquiries</h2>
            <p className="contact-p1">jyothsna@cajyothsna.in</p>
            
         
          
           <img src={Image3} alt="contact" className="time"/>
            <h2 className="contact-h2-time">Our Timing</h2>
            <p className="contact-p-time">Mon - Sat : 10:00 AM - 06:00 PM</p>
                 <img src={Image2} alt="contact" className="calls"/>
            <h2 className="contact-h2-call">Call Us</h2>
            <p className="contact-p-call">+91-8884100990</p>
   <GoogleMap/>
         
        </div>
    )
}
