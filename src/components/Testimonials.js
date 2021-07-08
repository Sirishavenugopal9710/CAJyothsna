import React from 'react'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import Image from './image/test.png'
 import Image1 from './image/test1.png'
import './Testimonials.css'
import styled from 'styled-components';


const CarouselUI = ({ children }) => <Container>{children}</Container>;

const Carousel = makeCarousel(CarouselUI);
const Container = styled.div`

position: relative;
overflow: hidden;
width: 100%;
height:500px;
margin-top: 6.5%

.image{
  width:1550px;
  height:700px;
}
.test_img {
  width: 8%;
  opacity: 1;
  margin-top: 1%;
  margin-left: 46%;
}
.test-h3 {
  font-family: auto;
  font-size: x-large;
  display: flex;
  justify-content: center;
}
.test-h4 {
  font-family: auto;
  margin-left: 48%;
  margin-top: 2%;
  font-size: x-large;
}
.test_h1 {
  color: rgb(51,51,51);
  min-height: auto;
  font-family: sans-serif;
  line-height: 1.5;
  border-color: rgb(51,51,51);
  border-style: none;
  border-width: 0px;
  border-radius: 0px;
  -webkit-letter-spacing: 0px;
  -moz-letter-spacing: 0px;
  -ms-letter-spacing: 0px;
  letter-spacing: 0px;
  background-color: rgba(0,0,0,0);
  margin-top: 2%;
  text-align: center;
}
.test_p {
  padding-left: 17px;
  padding-right: 17px;
  width: 100%;
  margin-left: 0%;
  margin-top: 4%;
  font-family: 'Roboto',sans-serif;
  text-align: center;
 
  font-size: 150%;
  font-weight: 500;
}
@media only screen and (min-width:360px) and (max-width:740px){
  position: relative;
  overflow: hidden;
  width: 100%;
  height:650px;
  margin-top: 6.5%
  
  .cDlLeU .test_img {
    width: 8%;
    opacity: 1;
    margin-top: 1%;
    margin-left: 46%;
}
.test_img {
  width: 37%;
  opacity: 1;
  margin-top: 1%;
  margin-left: 31%;
}
.test_p {
  width: 104%;
  margin-left: -2%;
  font-size: x-large;
  margin-top: 4%;
  font-family: ui-monospace;
  text-align: center;
  font-style: italic;
}
.test-h4 {
  font-family: auto;
  margin-left: 37%;
  margin-top: 2%;
  font-size: x-large;
}
.test-h3 {
  font-family: auto;
  display: flex;
  justify-content: center;
  font-size: x-large;
}

}

@media only screen and (min-width:360px) and (max-width:740px) and (orientation : landscape){
.test_img {
  width: 23%;
  opacity: 1;
  margin-top: 1%;
  margin-left: 39%;
}
.test-h4 {
  font-family: auto;
  margin-left: 46%;
  margin-top: 2%;
  font-size: x-large;
}

  position: relative;
  overflow: hidden;
  width: 100%;
  height: 550px;

}

@media only screen and (min-width:768px) and (max-width:1024px){
  .test_img {
    width: 19%;
    opacity: 1;
    margin-top: 1%;
    margin-left: 42%;
}
.test-h4 {
  font-family: auto;
  margin-left: 46%;
  margin-top: 2%;
  font-size: x-large;
}
position: relative;
overflow: hidden;
width: 100%;
height: 607px;
}
@media only screen and (min-width:768px) and (max-width:1024px) and (orientation : landscape) {
  .test_img {
    width: 19%;
    opacity: 1;
    margin-top: 1%;
    margin-left: 41%;
}
.test-h3 {
  font-family: auto;
  display: flex;
  justify-content: center;
  font-size: x-large;
}
}


`;

export const Testimonials = () => {
    return (
        
        <div className="testi" >
    
        <Carousel defaultWait={5000} /*wait for 1000 milliseconds*/ >
          
    <Slide right>
            <div  >
            <h1 className="test_h1">Testimonials</h1>
            <img src={Image} alt="glass" className="test_img"  ></img>
              <p className="test_p">"CA Jyothsna is having vast knowledge in her field. & she is prompt in taking decisions. 
              I am very happy with her suggestion & the services she had provided to me to get out of the IT notice. 
              I recommend her to you all  for any IT related issues"</p>
              <h3 className="test-h4">Geetha</h3>
                    
            </div>
  </Slide>
     <Slide right>
            <div  >
            <h1 className="test_h1">Testimonials</h1>
            <img src={Image1} alt="glass" className="test_img"  ></img>
              <p className="test_p">"Excellent service provided by them in filing IT returns and Compliance matters.
               Very highly professional,Customer friendly, dedicated& had a great experience using their services. 
               A very good CA.& gives good guidance to our work."</p>
               <h3 className="test-h3">Rajesh Narayanan</h3>
                     
            </div>
       </Slide>
          
        <Slide right>
          <div  >
          <h1 className="test_h1">Testimonials</h1>
          <img src={Image1} alt="glass" className="test_img"  ></img>
            <p className="test_p">"Excellent and timely service with very nominal fee. She had helped me file last year Income Tax return. Throughout, she was always available to answer my query and give sound advice. She is very professional and thorough to ensure no gap left behind. Always recommend her. :)"</p>
             <h3 className="test-h3">Saurabh Kaushik</h3>
                   
          </div>
 </Slide>
        <Slide right>
        <div  >
        <h1 className="test_h1">Testimonials</h1>
        <img src={Image1} alt="glass" className="test_img"  ></img>
          <p className="test_p">"Hello all,
          She has been a one step suggestion provider in all regards to tax & savings. She has been a great help in calculating & filing my tax returns. She has suggested me the relevant things I need to do for my tax saving & for better savings for personal. Has through knowledge how to do things in ease regards to tax.
          Suggest people who live in & around Kadugodi & need support with regards to tax to contact her for solution. A very versatile consultant."</p>
           <h3 className="test-h3">Sanjeev Kumar</h3>
                 
        </div>
      </Slide>
      <Slide right>
        <div  >
        <h1 className="test_h1">Testimonials</h1>
        <img src={Image1} alt="glass" className="test_img"  ></img>
          <p className="test_p">"With her suggestions able to resolve issues of Foreign Tax Credit (FTC) which was pending from a year, in the same time she closed some legacy issues of incorrect PAN, which were 8 year old, she was able to resolve the issues in short time.
          I recommend for Income Tax related issues and for IT filing."</p>
           <h3 className="test-h3">Aravind Palika</h3>
                 
        </div>
      </Slide>
      
        </Carousel>
        
        </div>
       
    )
}

