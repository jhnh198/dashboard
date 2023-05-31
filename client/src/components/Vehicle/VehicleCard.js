import React from 'react';
import './Vehicle.css';

const VehicleCard = (props) => {
  return (
          <div className="vehicle-card-container">
              <p className="vehicle-card-detail-header"> Vehicle Detail </p>

            <div className="vehicle-card-section">
              <div className='vehicle-card-info-section'> 
                <label className="vehicle-card-label">Vehicle ID: </label>
                <span className="vehicle-card-item">{props.vehicle.vehicleid} </span>

                <label className="vehicle-card-label">Vehicle Name: </label>
                <span className="vehicle-card-item">{props.vehicle.vehicle_name} </span>
                
                <label className="vehicle-card-label">Odometer: </label>
                <span className="vehicle-card-item">{props.vehicle.odometer} </span>
            </div>

            <div className="vehicle-card-hardware-section">
              <label className="vehicle-card-label">DSN: </label>
              <span className="vehicle-card-item">{props.vehicle.dsn} </span>

              <label  className="vehicle-card-label">Display ID: </label>
              <span className="vehicle-card-item"> {props.vehicle.displayid} </span>

              <label className="vehicle-card-label">Last Call: </label>
              <span className="vehicle-card-item">{props.vehicle.last_call} </span>
            </div>

            <div className='vehicle-card-driver-section'>
              <label className="vehicle-card-label">Driver ID: </label>
              <span className="vehicle-card-item">{props.vehicle.driver_id} </span>

              <label className="vehicle-card-label">Trip Number: </label>
              <span className="vehicle-card-item">{props.vehicle.workflow} </span>

              <label className="vehicle-card-label">Location: </label>
              <span className="vehicle-card-item">{props.vehicle.location} </span>
            </div>

          </div>
        </div>
  );
}

export default VehicleCard;