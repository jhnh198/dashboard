import React, { Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import DriverList from './components/Driver/DriverList';
import VehicleList from './components/Vehicle/VehicleList';
import DriverCard from './components/Driver/DriverCard';
import VehicleCard from './components/Vehicle/VehicleCard';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      route: 'drivers',
      input: '',
      driver: {
        driverid: '',
        first_name: ''
      }, 
      vehicle: {
        vehicleid: '',
        vehicle_name: ''
      }
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route }, () => {
      console.log(this.state.route, 'Route: ');
    }); 
  };

  //todo: hooks update the components so setting the state here isn't entirely necessary
  loadDriver = (data) => {
    console.log(data);
    this.setState({driver: {
      driverid: data.driverid,
      first_name: data.first_name,
      last_name: data.last_name,
      ruleset: data.ruleset,
      vehicleid: data.vehicleid,
      status: data.status,
      status_start: data.status_start,
      drive_shift: data.drive_shift,
      cycle_duty: data.cycle_duty
    }})
    console.log(this.state.driver);
  }

  loadVehicle = (data) => {
    console.log(data);
    this.setState({vehicle: {
      vehicleid: data.vehicleid,
      vehicle_name: data.vehicle_name,
      odometer: data.odometer,
      dsn: data.dsn, 
      displayid: data.displayid,
      last_call: data.last_call,
      driver_id: data.driver_id,
      workflow: data.workflow,
      location: data.location
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // not used and likely event.target.value won't work
  onDriverIdChange = (event) => {
    try{
      const response = fetch(`http://localhost:5000/drivers/${event.target.value}`);
      const jsonData = response.json();
      console.log(jsonData);
    } catch (err){
      console.log(err.message);
    }
  }

  render() {
    const { route } = this.state;
    return (
      <div className=''>
          <Navigation onRouteChange={this.onRouteChange}/>
        <div className="app-container">
            <div className="">
            {route === 'drivers' 
            ?    <DriverList onRouteChange={this.onRouteChange} onDriverIdChange={this.onDriverIdChange} loadDriver={this.loadDriver}/>
            :    <VehicleList onRouteChange={this.onRouteChange} loadVehicle={this.loadVehicle}/>
            }
            </div>
            <div className='app-card-section'>
              <DriverCard driver={this.state.driver} />
              <VehicleCard vehicle={this.state.vehicle} onRouteChange={this.onRouteChange}/>
            </div>

        </div>
      </div>
    );
  };
}

export default App;