import React from 'react'
import './Card.css'
import Zoom from 'react-reveal/Zoom';
export const Card = () => {
    return (
      <Zoom> 
      <div className="ca_card">
      <div class="textBox">
      <span>
      <i class="fa fa-bullhorn"></i>
      <h1>What's New</h1>
      <br></br>
     <p className="p"> Our editors select a small number of the most important updates and share them with you via What's new.</p></span></div>
      <div class="textBox"><span>
      <i class="fa fa-calendar"></i>
      <h1>Event Calendar</h1>
      <br></br>
     <p className="p"> Summary Return cum Payment of Tax for Aug by taxpayer with turnover upto 5 cr.in Chhattisgarh, Madhya Pradesh..</p></span></div>
      <div class="textBox"><span>
      <i class="fa fa-suitcase"></i>
      <h1> Career</h1>
      <br></br>
     <p className="p"> We nurture and cultivate a sense pride in the work and create team leaders. Your growth chart will be..</p></span></div>
     
      </div></Zoom>
    )
}


