const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./core/db');

connectDB();
dotenv.config();

const PORT = process.env.PORT || 6666;
const { patientValidation, appointmentValidation } = require('./utils/validations');
const { PatientCtrl, AppointmentCtrl } = require('./controllers');

const app = express();
app.use(express.json());
app.use(cors()); 

// @TODO: Попробовать сделать push-уведомления для стоматолога.

app.get('/patients', PatientCtrl.all);
app.post('/patients', patientValidation.create, PatientCtrl.create);
app.delete('/patients/:id', PatientCtrl.remove);
app.patch('/patients/:id', patientValidation.create, PatientCtrl.update);
app.get('/patients/:id', PatientCtrl.show);

app.get('/appointments', AppointmentCtrl.all);
app.post('/appointments', appointmentValidation.create, AppointmentCtrl.create);
app.delete('/appointments/:id', AppointmentCtrl.remove);
app.patch('/appointments/:id', appointmentValidation.update, AppointmentCtrl.update);

app.listen(PORT, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Server runned!');
});