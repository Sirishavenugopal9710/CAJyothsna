import React from 'react'
import './Header.css'
import Image from './image/WhatsApp.svg.png'
export const Header = () => {
    return (
        <div className="header">
              <h2>Welcome to</h2>
            <h1 className="header-h1">Jyothsna & Associates</h1>
            <h2>Chartered Accountants</h2>
           
            <div className="carousel_title2 p">
        <ul >
        <a
        href="https://wa.me/+918884100990"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Image} alt="cajyothsna"  className="header-whatsapp" />
      </a>
         
        </ul>
      </div>
      <div className="carousel_title2">
      <ul className="title2">
        <h1><p>+918884100990</p></h1>
        
        
      </ul>
    </div>
   
        </div>
    )
}

