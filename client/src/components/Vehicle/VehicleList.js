import React, {useState, useEffect} from 'react';
import './Vehicle.css';

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
        <div className="container">
            <table className="table table-borderless p-4 m-4">
              <thead>
                <tr>
                  <th>Truck Number</th>
                  <th>Truck Name</th>
                </tr>
              </thead>
              <tbody>
              {vehicle.map( vehicle => (
                  <tr onClick={() => getVehicle(vehicle.vehicleid)} key ={vehicle.vehicleid}>
                    <td> {vehicle.vehicleid}  </td>
                    <td> {vehicle.vehicle_name}</td>
                  </tr>
                ))}
              </tbody>              
            </table>
        </div>
      );
}

export default VehicleList;