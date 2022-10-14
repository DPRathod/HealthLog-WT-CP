import React from 'react'
import './home.css'
import {  Link } from 'rebass';
// Import UI components from material-ui-next.
// Importing icons/images
import report from '../../assets/images/medical_report.png';
import journal from '../../assets/images/journal.png';
import appointment from '../../assets/images/appointment.png';
import prescription from '../../assets/images/prescription.png';
import doctor from '../../assets/images/doctor.png';
import chart from '../../assets/images/chart2.png';

import NavBar from '../../components/navbar/Navbar';


export default function Home() {
  // const { classes } = this.props;
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <div className="headline">
          <h2>HealthLog options</h2>
        </div>
        <div className="homeOptions">
          <div className="homeOptionsTop">
            
            <div className="homeOptionsItem">
              <div className="homeOptionsItemHeadline">
                My health log
              </div>
              <Link href='/log'>
                <div className="homeOptionsImg">
                  <img src={report} alt="clipboard" />
                </div>
              </Link>
            </div>

            <div className="homeOptionsItem">
              <div className="homeOptionsItemHeadline">
                My Symptom Journal
              </div>
              <Link href='/symptoms'>
                <div className="homeOptionsImg">
                  <img src={journal} alt="health journal" />
                </div>
              </Link>
            </div>

            <div className="homeOptionsItem">
              <div className="homeOptionsItemHeadline">
                Appointments
              </div>
              <Link href='/symptoms'>
                <div className="homeOptionsImg">
                  <img src={appointment} alt="calender" />
                </div>
              </Link>
            </div>

            
            
            
          </div>
          <div className="homeOptionsBottom">

            <div className="homeOptionsItem">
              <div className="homeOptionsItemHeadline">
                My Prescriptions
              </div>
              <Link href='/prescriptions'>
                <div className="homeOptionsImg">
                  <img src={prescription} alt="prescription card" />
                </div>
              </Link>
            </div>

            <div className="homeOptionsItem">
              <div className="homeOptionsItemHeadline">
                Doctors and clinics
              </div>
              <Link href='/doctors'>
                <div className="homeOptionsImg">
                  <img src={doctor} alt="doctor" />
                </div>
              </Link>
            </div>

            <div className="homeOptionsItem">
              <div className="homeOptionsItemHeadline">
                Charts
              </div>
              <Link href='/charts'>
                <div className="homeOptionsImg">
                  <img src={chart} alt="line graph" />
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
