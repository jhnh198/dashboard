import React from 'react';
import './Driver.css';
import DriverList from './DriverList';
import DriverCard from './DriverCard';

{/* openDriver needs to pass the driver Id to the card, the getter will post to the db to pull the info */}
const Driver = ({ onRouteChange }) => {
    return (     
        <div>
        <DriverList />
        <DriverCard />
        </div> 
    );
}

export default Driver;