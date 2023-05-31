import React from 'react';
import './Vehicle.css';
import VehicleList from './VehicleList';
import VehicleCard from './VehicleCard';

const Vehicle = ({ onRouteChange }) => {
    return (     
        <div>
        <VehicleList />
        <VehicleCard />
        </div> 
    );
}

export default Vehicle;