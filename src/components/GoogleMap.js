// import React, { Component } from 'react';
// import GoogleMapReact from 'google-maps-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 12.9969763,
//       lng: 77.5344483
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyABE3QJ9Be_p9QC8JEnWViXhP1Ler98FVU' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={12.9969763}
//             lng={77.5344483}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
//  export default SimpleMap;


import React from 'react'
import './ContactUs.css'
import Iframe from 'react-iframe'
function googlemaps() {
  return (
    <div className="google" >
    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62197.830679732666!2d77.72749826091146!3d13.012450133812804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x732e8977d09970f3!2sJyothsna%20%26%20Associates%2C%20Chartered%20Accountants!5e0!3m2!1sen!2sin!4v1621340577645!5m2!1sen!2sin" 
   className="googlemap"  allowfullscreen="" loading="lazy"></Iframe>
    </div>
  )
}

export default googlemaps