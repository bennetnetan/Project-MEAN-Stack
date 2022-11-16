const express = require('express');
var router = express.Router();

//Request statement for the employee model
var { Employee } = require('../models/employee');

//Function to get the employees data from db @ localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieving Employees : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in employee save : ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;