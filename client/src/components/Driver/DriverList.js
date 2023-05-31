import React, {useState, useEffect} from 'react';
import './Driver.css';

const DriverList = (props) => {
    const [driver, setDriver] = useState([]);

    const getDrivers = async () => {
      try{
        const response = await fetch('http://localhost:5000/drivers');
        const jsonData = await response.json();
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
        props.loadDriver(jsonData);
      } catch (err){
        console.log(err.message);
      }
    };

    useEffect(() => {
      getDrivers();
    }, []);
    return (      

          <div className="content-list-container">
            <table className="content-list-table">
              <thead className='content-list-table-head'>
              <tr>
                <th className='content-list-table-head-item'>Driver ID</th>
                <th className='content-list-table-head-item'>Driver Name</th>
              </tr>
              </thead>
              <tbody className="content-list-table-body">
              {driver.map( driver => (
                  <tr className="content-list-table-row" onClick={() => getDriver(driver.driverid)} key ={driver.driverid}>
                    <td className='content-list-table-row-item'> {driver.driverid}</td>
                    <td className='content-list-table-row-item'> {driver.first_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
    );
}

export default DriverList;