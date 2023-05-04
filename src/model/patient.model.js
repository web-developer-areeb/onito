const patients = require('./patient.mongo');

async function getAllPatientsFromDB() {
  try{
    return await patients.find();
  } catch (err) {
    console.error(`Could not get patient from the database ${err}`);
    return err;
  }
}

async function addPatientToDB(patient) {
  console.log("Areeb", patient);
  try{
    const res = await patients.create(patient);
    if(res) {
      return true;
    } else {
      throw new Error();
    }
  } catch (err) {
    console.error(`Could not add patient to database ${err}`);
    return err;
  }
}

module.exports = {
  getAllPatientsFromDB,
  addPatientToDB,
};