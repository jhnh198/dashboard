import React from 'react';
import './Vehicle.css';
import VehicleList from './VehicleList';
import VehicleCard from './VehicleCard';

{/* openDriver needs to pass the driver Id to the card, the getter will post to the db to pull the info */}
const Vehicle = ({ onRouteChange }) => {
    return (     
        <div>
        <VehicleList />
        <VehicleCard />
        </div> 
    );
}

export default Vehicle;