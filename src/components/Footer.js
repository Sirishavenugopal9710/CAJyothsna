import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    <div className="usefullink" >
    <h4 className="footer">Useful Links</h4>
    <ul>
  <li className="color"><a  href="http://incometaxindia.gov.in/Pages/default.aspx"  className="links">Income Tax Dept.</a></li>
  <li className="color"><a  href="http://cbec.gov.in/"  className="links">Central Board of Excise &amp; Customs</a></li>
  <li className="color"><a  href="https://www.tin-nsdl.com/"  className="links">E-Tax Information Network</a></li>
  <li className="color"><a  href="http://mca.gov.in/"  className="links">Ministry of Corporate Affairs</a></li>
  <li className="color"><a  href="http://epfindia.com/site_en/"  className="links">Employees Provident Fund</a></li>
        </ul>
    
  </div>
  <div className="quicklinks">
            <h4>Quick Links</h4>
            <br></br>
            <ul>
              <li className="color"> <Link to="/" className="links">Home</Link></li>
               <li className="color"><Link to='/services' className="links">Services</Link></li>
              <li className="color"> <Link to="/about" className="links">About Us</Link></li>
              <li className="color"> <Link to="/career" className="links">Careers</Link></li>
              <li className="color"> <Link to="/contact" className="links">Contact Us</Link></li>
            </ul>
          </div>
  <div className="footer_address">
  <h2>Jyothsna & Associates</h2>
  <h4>Chartered Accountants</h4>
<p className="footer_p">Flat No-84/201,2nd Floor,Sri Ram Arcade, above Axis Bank
         Seegehalli near kadugodi, Krishnarajapura, Bengaluru, Karnataka 560067</p>
  </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Jyothsna & Associates
            
            </Link>
          </div>
          <small class='website-rights'>jyothsna © 2021</small>
      
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      <div class="ant-back-top"><div><div class="ant-fade-enter ant-fade-enter-active ant-fade" style={{opacity: '0.5', right: '10px', bottom: '10px', textAlign: 'center', marginLeft: '40px', marginTop: '40px', fontSize: '30px', color: 'rgb(250, 250, 250)'}}><span role="img" aria-label="up-circle" class="anticon anticon-up-circle"><svg viewBox="64 64 896 896" focusable="false" data-icon="up-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
      </path></svg></span></div></div></div>
      <p className="designed">Designed by <a href='http://rctechbox.com/' style={{color:'orange'}}>RC Techbox IT Service</a></p>
    </div>
  );
}

export default Footer;
