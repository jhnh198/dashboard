import React from 'react';
import './Vehicle.css';

//add elements from database schema
//needs form or modal to create and update vehicle info
//needs functions to pass info back to db

const VehicleCard = (props) => {
  return (
          <div className="row g-3 col-md-4 border-primary bg-secondary p-4 m-4">
            <div className=""> Vehicle Detail</div>
            <br/>
  
            <div className="col-6">
              <label for="" className="form-label col-6">Vehicle ID: </label>
              <span className="">{props.vehicle.vehicleid} </span>
            </div>

             {/* driver id,location, workflow, ignition, last call, odometer, dsn, display id */}
            <div className="col-6">
              <label for="" className="form-label col-6">Vehicle Name: </label>
              <span className="">{props.vehicle.vehicle_name} </span>
            </div>

            {/* todo: driver id on vehicle differs from driver table, make correction */}
            <div className="col-6">
              <label for="" className="form-label col-6">Driver ID: </label>
              <span className="">{props.vehicle.driver_id} </span>
            </div>
            <div className="col-6">
              <label for="" className="form-label col-6">Location: </label>
              <span className="">{props.vehicle.location} </span>
            </div>
            <div className="col-6">
              <label for="" className="form-label col-6">Workflow/Trip Number: </label>
              <span className="">{props.vehicle.workflow} </span>
            </div>
            <div className="col-6">
              <label for="" className="form-label col-6">Last Call: </label>
              <span className="">{props.vehicle.last_call} </span>
            </div>
            <div className="col-6">
              <label for="" className="form-label col-6">Odometer: </label>
              <span className="">{props.vehicle.odometer} </span>
            </div>

            <div className="col-6">
              <label for="" className="form-label col-6">DSN: </label>
              <span className="">{props.vehicle.dsn} </span>
            </div>
            <div className="col-6">
              <label for="" className="form-label col-6">Display ID: </label>
              <span className="">{props.vehicle.displayid} </span>
            </div>
          </div>
  );
}

export default VehicleCard;

/*
class VehicleCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vehicleId: '',
            vehicleName: '',
            vehicleDSN: '',
            vehicleIgnition: false,
            vehicleResetFlag: false
        }
    }

    //needs first and last separately
    onVehicleIDChange = (event) => {
        this.setState({driverFirstName: event.target.value})
    }
    onVehicleNameChange = (event) => {
        this.setState({driverLastName: event.target.value})
    }
    
    onVehicleDSN = (event) => {
        this.setState({driverId: event.target.value})
    }
    
    onVehicleIgnitionChange = (event) => {
        this.setState({driverRuleset: event.target.value})
    }

    //this has to be edited to include correct state informatio
    render() {
        return (
            <div className="vehicleCard">
              <p>Vehicle Card</p>
              <p>Truck Number</p>
              <p>Driver ID</p>
              <p>Driver Name</p>
               {/*
              <div>
               <img
                  key={vehicle.vehicle_location}
                  src={vehicle.vehicle_location|| null}
          /> 
              </div>
        
              <div>
                <h1>
                  {vehicle.number || vehicle.driver_id ? (
                    <>
                      {vehicle.number} {vehicle.driver_id}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  <Favorite vehicle={vehicle} />
                </h1>
        
                {vehicle.driver_name && (
                  <p>
                    <a
                      target="_blank"
                      href={`{vehicle.driver_id}`}
                    >
                      {vehicle.driver_name}
                    </a>
                  </p>
                )}
        
                {vehicle.notes && <p>{vehicle.notes}</p>}
        
                <div>
                  <Form action="edit">
                    <button type="submit">Edit</button>
                  </Form>
                  <Form
                    method="post"
                    action="destroy"
                    onSubmit={(event) => {
                      if (
                        confirm(
                          "Please confirm you want to delete this record."
                        )
                      ) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <button type="submit">Delete</button>
                  </Form>
                </div>
              </div> }
            </div>
          );
        
    }
}
*/

