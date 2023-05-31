const express = require('express');
const cors = require('cors');

const knex = require('knex');

// remove this info on commit
const db = knex({
    client: 'pg',
    connection: {
        host: 'YOUR DB IP',
        user: 'YOUR DB USER',
        password: 'YOUR DB PASSWORD',
        database: 'YOUR DATABASE'
    }
});

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(cors());

// chatbot specific requests 

app.get('/drivers', (req, res) => {
    db.select('*').from('drivers')
        .then(data => {
            return res.json(data);
        })
        .catch(err => {
            err => res.status(404).json(console.log(err));
        });
    
})

app.get('/vehicles', (req, res) => {
    db.select('*').from('vehicles')
        .then(data => {
            return res.json(data);
        })
        .catch(err => {
            err => res.status(404).json(console.log(err));
        });
    
})

app.get('/drivers/:driverid', (req, res) => {
    const { driverid } = req.params;
    db.select('*').from('drivers').where({driverid})
        .then(driver => {
        if(driver.length){
            res.json(driver[0]);
        } else {
            res.status(400).json("Driver not found")
        }
    })
    .catch(err => res.status(400).json(console.log(err)));
});

app.get('/vehicles/:vehicleid', (req, res) => {
    const { vehicleid } = req.params;
    db.select('*').from('vehicles').where({vehicleid})
        .then(vehicle => {
        if(vehicle.length){
            res.json(vehicle[0]);
        } else {
            res.status(400).json("Vehicle not found")
        }
    })
    .catch(err => res.status(400).json(console.log(err)));
});

app.listen(5000, () => {
    console.log(`Database is running on port ${PORT}`);
});