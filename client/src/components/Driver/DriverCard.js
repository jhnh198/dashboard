import React from 'react';
import './Driver.css';

const DriverCard = (props) => {
  return (
          <div className="row g-3 border-primary bg-secondary p-4 m-4 col-md-4">
            <div className="">Driver Detail</div>
            <br/>
            <div className="col-6">
              <label for="inputEmail4" className="form-label col-6" >Driver ID:</label>
              <span className="">{props.driver.driverid} </span>

            </div>
            <div className="col-6">
            <label for="" className="form-label col-6" >Driver First Name:</label>
              <span classNameName="">{props.driver.first_name} </span>

            </div>
            <div className="col-6">
            <label for="" className="form-label col-6" >Driver Last Name:</label>
              <span className="">{props.driver.last_name} </span>
            </div>

            <div className="col-6">
            {/*password for chatbot demo only, bad security practice to show pw */}
            <div className="col-6">
            <label for="" className="form-label col-6" >Password:</label>
              <span className="">{props.driver.password} </span>
            </div>
            <label for="" className="form-label col-6" >Vehicle:</label>
              <span className="">{props.driver.vehicleid} </span>
            </div>
            {/*ruleset, status, pw(for demo only) status start, drive time, work shift, cycle, vid */}
            <div className="">
            <label for="" className="form-label col-6" >Ruleset:</label>
              <span className="">{props.driver.ruleset} </span>
            </div>
            <div className="col-6">
            <label for="" className="form-label col-6" >Status:</label>
              <span className="">{props.driver.status} </span>
            </div>
            <div className="col-6">
            <label for="" className="form-label col-6" >Status Start:</label>
              <span className="">{props.driver.status_start} </span>
            </div>

            <div className="col-6">
            <label for="" className="form-label col-6" >Drive Shift Available:</label>
              <span className="">{props.driver.drive_shift} </span>
            </div>
            <div className="col-6">
            <label for="" className="form-label col-6" >Cycle Duty Available:</label>
              <span className="">{props.driver.cycle_duty} </span>
            </div>
          </div>
  );
}


export default DriverCard;

/*
<div className="card border-primary mb-3" style="max-width: 18rem;">
  <div className="card-header">Header</div>
  <div className="card-body text-primary">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
*/
//add elements from database schema
//needs form or modal to create and update driver info
//needs functions to pass info back to db
/*
className DriverCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            driverId: props.driverId,
            driverFirstName: props.firstName,
            driverLastName: props.lastName,
            driverRuleset: props.driverRuleset
        }
    }


    loadUser = (data) => {
      this.setState({driver: {
        driverId: data.driverId,
        driverFirstName: data.driverFirstName,
        driverLastName: data.driverLastName,
        driverRuleset: data.driverRuleset,
      }})


    //needs first and last separately
    onFirstNameChange = (event) => {
        this.setState({driverFirstName: event.target.value});
    }
    onLastNameChange = (event) => {
        this.setState({driverLastName: event.target.value});
    }
    
    onDriverIdChange = (event) => {
      this.setState({driverId: event.target.value});
      }
    
    onDriverRulesetChange = (event) => {
      this.setState({driverRuleset: event.target.value});
    }

    //this has to be edited to include correct state information. this will get the driver id and then refresh the component
    render() {
        return (
          
            <div className="driverCard">
              <p> Driver Card</p>
              <p>ID: </p>
              <p>First Name</p>
              <p>Last Name</p>


            {/*  <div>
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
                        /!confirm(
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
              </div>
               }
            </div>
          
          );   
    }


}
*/
