import React from 'react'
import './Management.css'
import Zoom from 'react-reveal/Zoom';
export const Management = () => {
    return (
        <div className="management" >
        <Zoom left>
        <h1 className="mancolor">Management Services</h1>
        <p className="manage"><i class="fa fa-hand-o-right"></i>Incorporation of companies under the provisions of The Companies Act, 2013.</p>
        <p className="manage"><i class="fa fa-hand-o-right"></i>Registrations under the provisions of all local acts of Karnataka viz., 
        The Karnataka VAT Act, The Profession Tax Act, The Shops & Establishments Act.</p>
        <p className="manage"><i class="fa fa-hand-o-right"></i>Registration under the Central Government Acts, viz., Provident Fund Act, Employees State Insurance, 
        Service Tax Act, Central Excise, STPI registration, Customs Bonding, Micro, Small and medium Industries development Act</p>
        </Zoom>
        </div>
    )
}
