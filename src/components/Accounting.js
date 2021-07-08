import React from 'react'
import './Management.css'
import Zoom from 'react-reveal/Zoom';
export const Accounting = () => {
    return (
        <div className="management">
        <Zoom left>
        <h1 className="mancolor">Accounting Services</h1>
        <p className="manage"><i class="fa fa-hand-o-right"></i>We undertake book keeping and record maintenance for our clients in accordance with statutory regulations, Indian GAAP and ensure the correct accounting conventions and methods are followed.</p>
        <p className="manage"><i class="fa fa-hand-o-right"></i>Preparation and implementation of internal control policies for our clients to prevent revenue leakage.</p>
        <p className="manage"><i class="fa fa-hand-o-right"></i>Providing exhaustive MIS data to the client on a timely basis which will guide the client in his business.</p>
        <p className="manage"><i class="fa fa-hand-o-right"></i>Integration of accounts and Inventory in a computerised setup.</p>
       </Zoom> </div>
    )
}
