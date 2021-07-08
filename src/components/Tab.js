import React from 'react';
import './Tab.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Management } from './Management';
import { Direct } from './Direct';
import { Indirect } from './Indirect';
import { Accounting } from './Accounting';
import { Payroll } from './Payroll';
export const Tabca = () => {
  return <div className="tabservice">
  <h1 className="our_srv">Our Service</h1>
  <Tabs>
  <TabList className="tabs"><Tab><i class="fa fa-hand-o-right"></i>Management Services</Tab>
  <Tab><i class="fa fa-hand-o-right"></i>Direct Tax Service</Tab>
  <Tab><i class="fa fa-hand-o-right"></i>Indirect Tax Service</Tab>
  <Tab><i class="fa fa-hand-o-right"></i>Accounting Services</Tab>
  <Tab><i class="fa fa-hand-o-right"></i>Payroll</Tab></TabList>
  <TabPanel><Management/></TabPanel>
  <TabPanel><Direct/></TabPanel>
  <TabPanel><Indirect/></TabPanel>
  <TabPanel><Accounting/></TabPanel>
  <TabPanel><Payroll/></TabPanel>
  </Tabs>
  </div>

}


