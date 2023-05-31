import React, {useState, useEffect} from 'react';
import './Vehicle.css';
import '../Driver/Driver.css';

const VehicleList = (props) => {
  const [vehicle, setVehicle] = useState([]);

      const getVehicles = async () => {
      try{
        const response = await fetch('http://localhost:5000/vehicles');
        const jsonData = await response.json();
        console.log(jsonData);
        setVehicle(jsonData);
      } catch (err){
        console.log(err.message);
      }
    };

    const getVehicle =  async (event) => {
      try{
        const id = event;
        const response = await fetch(`http://localhost:5000/vehicles/${id}`);
        const jsonData = await response.json();
        console.log(jsonData);
        props.loadVehicle(jsonData);
      } catch (err){
        console.log(err.message);
      }
    };

    useEffect(() => {
      getVehicles();
    }, []);

    return (
        <div className="content-list-container">
            <table className="content-list-table">
              <thead className='content-list-table-head'>
                <tr>
                  <th className='content-list-table-head-item'>Truck Number</th>
                  <th className='content-list-table-head-item'>Truck Name</th>
                </tr>
              </thead>
              <tbody className="content-list-table-body">
              {vehicle.map( vehicle => (
                  <tr className="content-list-table-row" onClick={() => getVehicle(vehicle.vehicleid)} key ={vehicle.vehicleid}>
                    <td className='content-list-table-row-item'> {vehicle.vehicleid}  </td>
                    <td className='content-list-table-row-item'> {vehicle.vehicle_name}</td>
                  </tr>
                ))}
              </tbody>              
            </table>
        </div>
      );
}

export default VehicleList;