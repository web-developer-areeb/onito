const {patients} = require('../../model/patient.model');
const {getAllPatientsFromDB, addPatientToDB} = require('../../model/patient.model');

async function getAllPatients(req, res) {
  const allPatients = await getAllPatientsFromDB();
  if(allPatients) {
    return res.status(200).json(allPatients);
  } else {
    return res.status(422).json(allPatients);
  }
};


async function addPatient(req, res) {
  const response = await addPatientToDB(req.body);
  if(response) {
    return res.status(200).json({msg: "Patient is added."});
  } else {
    return res.status(422).json(response);
  }
};

module.exports = {getAllPatients, addPatient};