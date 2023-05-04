const express = require('express');
const {getAllPatients, addPatient} = require('./patient.controller');

const patientsRouter = express.Router();

patientsRouter.get('/patient', getAllPatients);
patientsRouter.post('/patient', addPatient);

module.exports = {
  patientsRouter
}