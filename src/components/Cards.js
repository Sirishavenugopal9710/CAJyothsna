import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image from './image/service.png'
import Image1 from './image/direct.jpg'
import Image2 from './image/indirect.jpg'
import Image3 from './image/accountant.png'
import Image4 from './image/payroll.png'
function Cards() {
  return (
    <div className='cards'>
      <h1 className="service-h1">Services We Offer</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
           label='Management Services'
              src={Image}
             
              text='Incorporation of companies under the provisions of The Companies Act, 2013.
              Registrations under the provisions of all local acts of Karnataka viz.'
           
            
            />
            <CardItem
            src={Image1}
            text='Effective tax planning is integral to business strategy. We not only work with clients in formulating tax strategies, 
            but also help in its implementation effectively and in a speedy manner.'
            label='Direct Tax Service'
            
          />
          <CardItem
          src={Image2}
          text='Assist in Registration of Service Tax, VAT, Professional Tax for all kinds of Assesses
          Compliance under the provisions of Service Tax Act. '
          label='Indirect Tax Service'
          
        /> <CardItem
        src={Image3}
        text='We undertake book keeping and record maintenance for our clients in accordance with statutory regulations, Indian GAAP and ensure the correct accounting conventions and methods are followed.'
        label='Accounting Services'
        
      />
      <CardItem
        src={Image4}
        text='Salary structuring of the employees and deduction of tax at source for the same as per the provisions of Income Tax Act, 1961.'
        label='Payroll'
        
      />
           
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;