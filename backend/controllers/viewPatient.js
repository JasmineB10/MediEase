const Patient = require('../models/patientSchema'); 

module.exports = async (req, res) => {
  try {
    const patientId = req.params.id;
    //console.log('Fetching patient with ID:', patientId); 
    const patient = await Patient.findById(patientId);

    if (!patient) {
      //console.log('Patient not found'); 
      return res.status(404).json({ message: 'Patient not found' });
    }

    //console.log('Patient found:', patient);
    res.json(patient);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send('Server error');
  }
};
