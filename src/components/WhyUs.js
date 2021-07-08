// import React from 'react'
// import './Why.css'
// import Image from '../Image/clock.webp'
// import Image1 from '../Image/coin.webp'
// import Image2 from '../Image/lock.webp'
// import Image3 from '../Image/people.webp'
// export const Why = () => {
//     return (
//         <div>
//            <h1 className="why-h1">Why Us</h1>

//             <img  src={Image} alt="time" className="why-img"/>
//             <h3 className="why-h3">Save Your Time</h3>
//             <img  src={Image1} alt="time" className="why-img1"/>
//             <h3 className="why-h3">No hidden charges *T&C</h3>

//             <img  src={Image2} alt="time" className="why-img2"/>
//             <h3 className="why-h3">Client confidentiality</h3>
//             <img  src={Image3} alt="time" className="why-img3"/>
//     <h3 className="why-h3">Highly professional team</h3>

//         </div>
//     )
// }


// import React from 'react'
// import './WhyUs.css'
// import Image from './image/timerwhy.png'

// import Image2 from './image/lockwhy.png'
// import Image3 from './image/peopleswhy.png'

// export const WhyUs = () => {
//     return (
//         <div className="whyus">

//             <h1 className="whyus_h1">Why Us?</h1>
//             <div className="three" >
//                 <div>
//                     <img src={Image} alt="web" className="why_image" />
//                     <h1 className="table_h1">Save Your Time</h1>
//                 </div>
//                 <div>
//                     <img src={Image2} alt="web" className="why_image1" />
//                     <h1 className="table_h2">Client confidentiality</h1>
//                 </div>
//                 <div>
//                     <img src={Image3} alt="web" className="why_image2" />
//                     <h1 className="table_h3">Highly professional team</h1>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React from 'react'
import './WhyUs.css'
import Image from './image/timerwhy.png'
import Image2 from './image/lockwhy.png'
import Image3 from './image/peopleswhy.png'
export const WhyUs = () => {
    return (
        <div className="whyus">
        <h1 className="whyus_h1">Why Us?</h1>
        <div className="class_why">
        <div className="square_why"> <img src={Image} alt="web" className="why_image" />
        <h1 className="table_h1">Save Your Time</h1>
        </div>
        <div className="square_why"> <img src={Image2} alt="web" className="why_image1" />
        <h1 className="table_h2">Client confidentiality</h1></div>
        <div className="square_why">  <img src={Image3} alt="web" className="why_image2" />
        <h1 className="table_h3">Highly professional team</h1></div>
        </div>
        </div>
    )
}
