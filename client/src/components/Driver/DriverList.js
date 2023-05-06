import React, {useState, useEffect} from 'react';
import './Driver.css';

{/* openDriver needs to pass the driver Id to the card, the getter will post to the db to pull the info */}
const DriverList = (props) => {
    const [driver, setDriver] = useState([]);

    const getDrivers = async () => {
      try{
        const response = await fetch('http://localhost:5000/drivers');
        const jsonData = await response.json();
        //console.log(jsonData);
        setDriver(jsonData);
      } catch (err){
        console.log(err.message);
      }
    };

    const getDriver = async (event) => {
      try{
        const id = event;
        const response = await fetch(`http://localhost:5000/drivers/${id}`);
        const jsonData = await response.json();
        //console.log(jsonData);
        props.loadDriver(jsonData);
      } catch (err){
        console.log(err.message);
      }
    };

    useEffect(() => {
      getDrivers();
    }, []);

    {/* todo: change truck name to driver ID/ driver id is more useful and relevant*/}
    return (      

          <div className="container">
            <table className="table table-borderless p-4 m-4">
              <thead>
              <tr>
                <th>Driver ID</th>
                <th>Driver Name</th>
              </tr>
              </thead>
              <tbody className="">
              {driver.map( driver => (
                  <tr onClick={() => getDriver(driver.driverid)} key ={driver.driverid}>
                    <td> {driver.driverid}</td>
                    <td> {driver.first_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
    );
}

export default DriverList;