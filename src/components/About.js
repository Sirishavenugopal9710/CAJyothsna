import React from 'react'

import './About.css'

import Image from './image/about.jpg'
export const About = () => {
    return (
       <div className="back" >
       <h1 className="about-h1">About Us</h1>
       <img src={Image} alt="about" className="zoom"/>
       <p className="about-p"><li>We, Jyothsna & Associates, Chartered Accountants, situated at Seegehalli near kadugodi, Bengaluru, Karnataka,</li>
       <li>Established by CA Jyothsna B, Fellow Chartered Accountant, a proprietary Concern, with an office in Bangalore who has more than 13 years of extensive experience in rendering comprehensive professional services in the areas of Accounting, Audit (Statutory, Tax Audit & Internal Audit), Consultancy in Direct & Indirect Taxation, Payroll (end to end Processing) and other Regulatory services in the nature of Statutory & Secretarial Compliance.
       </li> 
       <li>Experienced in handling accounting & audit of Companies, LLP’s, Trusts, Associations, Partnership firms, PSUs, Limited Companies including Listed and Private Limited Companies. 
       </li>
       <li>Experienced in handling Concurrent, Special & Statutory audits of various Banks.
       </li>

       </p>
      
       </div>
    )
}
