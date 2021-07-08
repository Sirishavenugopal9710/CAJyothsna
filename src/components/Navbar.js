import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './image/logo.png'
import './Navbar.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import { CaretDownOutlined } from "@ant-design/icons";
import {Dropdown} from 'react-bootstrap'

function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  
  

  return (
    <>
      <nav className='navbar '>
        <div className='navbar-container'>
        <Fade left>
        <div class="col-md-6 col-xs-7 top-nav-lft wow slideInLeft" style={{visibility: "visible", animationName: "slideInLeft"}}>
        <ul class="">
            <p className="nav_list"><i class="fa fa-phone"></i>+91 8884100990</p>
            
        </ul>
        <ul>
        <p className="nav_lists"><i class="fa fa-envelope"></i> cajyothsna@gmail.com</p>
        </ul>
    </div></Fade>
    <Zoom>
           <img src={Logo} alt="nav" className="nav-logo" />
           <h1 className="ca"> Jyothsna & Associates Chartered Accountants</h1></Zoom>
           
  
  
  <div className='menu-icon' onClick={handleClick}>
  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
</div> <Flip top>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>

<li className='nav-item'>
  <Link to='/' className='nav-links' onClick={closeMobileMenu}> HOME</Link>
</li>

<li className='nav-item'>
<Dropdown>
<Dropdown.Toggle>
SERVICES<CaretDownOutlined />
</Dropdown.Toggle>
<Dropdown.Menu>
  <Dropdown.Item ><Link to="/management" className="tax" > Management Services</Link></Dropdown.Item>
  <Dropdown.Item ><Link to="/direct" className="tax" >Direct Tax Service</Link></Dropdown.Item>
  <Dropdown.Item ><Link to="/indirect" className="tax" >Indirect Tax Service</Link></Dropdown.Item>
  
  <Dropdown.Item ><Link to="/account" className="tax" >Accounting Services</Link></Dropdown.Item>
  <Dropdown.Item ><Link to="/pay" className="tax" >Payroll</Link></Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>

</li>
<li className='nav-item'>
<Link to='/about' className="nav-links" onClick={closeMobileMenu}>ABOUT US</Link>
</li>
<li className='nav-item'>
<Link to='/why' className="nav-links" onClick={closeMobileMenu}>WHY US</Link>
</li>


<li>
<Link to='/testimonials' className="nav-links" onClick={closeMobileMenu}>TESTIMONIALS</Link>
</li>
<li>
<Link to='/contact' className="nav-links" onClick={closeMobileMenu}>CONTACT US</Link>
</li>
<li>
<Link to='/career' className="nav-links" onClick={closeMobileMenu}>CAREERS</Link>
</li>
</ul></Flip>

</div>
</nav>
</>
);
}

export default Navbar;