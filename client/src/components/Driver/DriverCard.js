import React from 'react';
import './Driver.css';

const DriverCard = (props) => {
  console.log(props.driver);
  return (
          <div className="driver-card-container">
            <div className='driver-card-section-left'>
              <p className="driver-card-detail-header">Driver Detail</p>

              <div className="driver-id-section"> 
                <label className="driver-card-label">Vehicle:</label>
                <span className="driver-card-item">{props.driver.vehicleid} </span>

                <label className="driver-card-label" >Driver ID:</label>
                <span className="driver-card-item"> {props.driver.driverid} </span>
              </div>

              <div className="driver-info-section" >
                <label className="driver-card-label">Driver First Name:</label>
                <span className="driver-card-item">{props.driver.first_name} </span>

                <label className="driver-card-label">Driver Last Name:</label>
                <span className="driver-card-item">{props.driver.last_name} </span>
              </div>
            </div>

            {/*ruleset, status, status start, drive time, work shift, cycle, vid */}
            <div className="driver-ruleset-section"> 
              <label className="driver-card-item">Ruleset: {props.driver.ruleset} </label>

              <label className="driver-card-item">Status: {props.driver.status}</label>

              <label className="driver-card-item">Status Start: {props.driver.status_start}</label>

              <label className="driver-card-item">Drive Shift Available: {props.driver.drive_shift} </label>

              <label className="driver-card-item">Cycle Duty Available: {props.driver.cycle_duty} </label>
            </div>
          </div>
  );
}
export default DriverCard;