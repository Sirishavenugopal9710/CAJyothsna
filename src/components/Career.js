// import React, { useState } from 'react'
// import { Form, Input, Checkbox, Button, Select } from 'antd';
// import './Career.css'
// import ReactPlayer from 'react-player/youtube'
// import Footer from './Footer';

// export const Career = () => {

// function sendEmail(e) {
//     e.preventDefault();

// emailjs.sendForm('service_0547zct', 'template_lw62tlf', e.target, 'user_ykAOry3Bxfy589ecujcge')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
//     e.target.reset()
// }
//     const [form] = Form.useForm();
//     const [formLayout] = useState('vertical');

//     const formItemLayout =
//         formLayout === 'vertical'
//             ? {
//                 labelCol: {
//                     span: 4,
//                 },
//                 wrapperCol: {
//                     span: 14,
//                 },
//             }
//             : null;
//     const { Option } = Select;
//     function onChange(e) {

//     }
//     return (
//         <div className="form_div">

//         <h2 className="form">-Apply Here- </h2>
//         <p className="form_p">We nurture and cultivate a sense pride in the work and create team leaders. 
//         Your growth chart will be governed by well-defined transparent policies of the firm. 
//         Apply via the form given below and meet us for face to face interview.</p>
//             <Form
//                 {...formItemLayout}
//                 layout={formLayout}
//                 form={form}
//                 initialValues={{
//                     layout: formLayout,
// onSubmit={sendEmail}
//                 }} >

//                 <Form.Item className="chartered" >
//                     <Form.Item label="Firstname" required="*">

//                         <Input placeholder=" " />
//                     </Form.Item>

//                     <Form.Item label="Lastname" required="*">

//                         <Input placeholder="" required="" />
//                     </Form.Item></Form.Item>
//                 <Form.Item className="chartered" >
//                     <Form.Item label="email" required="*">

//                         <Input placeholder=" " type="input"/>
//                     </Form.Item>

//                     <Form.Item label="Phone Number" required="*">

//                         <Input type="phone number" required="" />
//                     </Form.Item></Form.Item>
//                 <Form.Item className="chartered" >
//                     <Form.Item label="Date Of Birth" required="*">

//                         <Input type="date" />
//                     </Form.Item>
//                     <Form.Item label="Gender" required="*">

//                     <Input type="select" />
//                 </Form.Item>

//                    </Form.Item>
//                 <Form.Item className="chartered" >
//                     <Form.Item label="Position you are applying for" required="*">

//                         <Input placeholder=" " />
//                     </Form.Item>

//                     <Form.Item label="Highest Qualification" required="*">

//                         <Input placeholder="" required="" />
//                     </Form.Item></Form.Item>
//                     <Form.Item className="chartered" >
//                     <Form.Item label="Portfolio website" required="*">

//                         <Input placeholder="http:// " />
//                     </Form.Item>

//                     <Form.Item label="Upload Resume *( Max size 1 mb ) " required="*">

//                         <Input placeholder="" type="file" required="" />
//                     </Form.Item></Form.Item>
//                     <Form.Item className="chartered" >
//                     <Form.Item label="Last company you worked for" required="*">

//                         <Input placeholder="" />
//                     </Form.Item>

//                     <Form.Item label="Years Of Experience" required="*">

//                     <Input placeholder="" />

//              </Form.Item></Form.Item>
//              <Form.Item className="reference" >
//              <Form.Item label="Reference / Comments / Questions" required="*">

//                  <Input placeholder="" className="ref"/>
//              </Form.Item></Form.Item>

//                 <Button className="button-type"><h1 className="submit">Send Application</h1></Button>
//             </Form>
//             <Footer/>
//         </div>
//     )
// }

// import React from 'react';
// import emailjs from 'emailjs-com';

// import './Career.css';

// export const Career = () => {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('gmail', 'template_lw62tlf', e.target, 'user_ykAOry3Bxfy589ecujcge')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset()
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="name" />
//       <label>Email</label>
//       <input type="email" name="email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }



import emailjs from "emailjs-com";
import React from 'react';
import './Career.css'

export const Career = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_0eoiuwy', 'template_34sm4d6', e.target, 'user_34dbdttV38QHqfdJkkBrc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="container">
                <h2 className="form">-Apply Here- </h2>
                <p className="form_p">We nurture and cultivate a sense pride in the work and create team leaders.
                Your growth chart will be governed by well-defined transparent policies of the firm.
         Apply via the form given below and meet us for face to face interview.</p>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <div className="div" >
                                <label className="lable">Name</label>
                                <input type="text" className="form-control" placeholder="Name" name="name" /></div>
                            <div className="div"> <label>LastName</label>
                                <input type="text" className="form-control" placeholder="LastName" name="lastname" /></div> </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <div className="div"><label>Email</label>
                                <input type="email" className="form-control" placeholder="Email Address" name="email" /></div>
                            <div className="div">   <label>Number</label>
                                <input type='phonenumber' className="form-control" placeholder="phone number" name="number" /></div>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <div className="div">  <label>date</label>
                                <input type="date" className="form-control" placeholder="date" name="date" /></div>
                            <div className="div">   <label>Gender</label>

                                <select className="form-control" name="gender">
                                    <option value="0">Select..</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select></div></div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <div className="div">  <label>Position you are applying for</label>
                                <input type="text" className="form-control" placeholder=" " name="position" /></div>
                            <div className="div">   <label>Highest Qualification</label>
                                <input type='text' className="form-control" placeholder=" " name="qualification" /></div>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <div className="div"> <label>Portfolio website</label>
                                <input type="text" className="form-control" placeholder=" http://" name="website" /></div>

                            <div className="div">  <label> Last company you worked for</label>
                                <input type='text' className="form-control" placeholder=" " name="file" /></div>
                        </div>
                        <div className="company">
                            {/*  <div className="career_com"  > <label>Resume</label>
    <input type="file" className="form-control" placeholder=" company name" name="company"/></div>*/}

                            <div className="career" >     <h3>years of experience</h3><label>years</label>
                                <select id="expyear" name="expyear" className="sel_month">
                                    <option value="-1">Select Year</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                </select></div>
                            <div className="month" > <label>months</label>
                                <select id="expmnth" name="expmonth" className="sel_month">
                                    <option value="-1">Select Month</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div></div>


                        <div className="reference">
                            <div className="div">      <label>Reference / Comments / Questions</label>
                                <textarea className="control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea></div>
                        </div>

                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="button" value="Send Application"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}





// import emailjs from "emailjs-com";
// import React from 'react';

// export const Career=()=> {

//     function sendEmail(e) {
//         e.preventDefault();

//     emailjs.sendForm('service_0547zct', 'template_65vb1ho', e.target, 'user_ykAOry3Bxfy589ecujcge')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//     }

//     return(
//         <div>
//             <div className="container">
//             <form onSubmit={sendEmail}>
//                     <div className="row pt-5 mx-auto">
//                         <div className="col-8 form-group mx-auto">
//                             <input type="text" className="form-control" placeholder="Name" name="name"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="file" className="form-control" placeholder="Resume" name="upload"/>
//                         </div>


//                         <div className="col-8 pt-3 mx-auto">
//                             <input type="submit" className="btn btn-info" value="Send Message"></input>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }