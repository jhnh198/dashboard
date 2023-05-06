import React from 'react';
import './Navigation.css';


const Navigation = ({ onRouteChange }) => {
    return (
        <ul className="nav p-4">
            <li className="nav-item">
          <a className="nav-link" aria-current="page" onClick={() => onRouteChange('drivers')}> Driver List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => onRouteChange('vehicles')}> Vehicle List</a>
        </li>
      </ul>
    );
}

export default Navigation;