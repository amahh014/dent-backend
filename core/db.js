const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://armagedon14:zaza6800@dentaldb-irefi.mongodb.net/test?retryWrites=true&w=majority'

mongoose
  .connect('mongodb://localhost:27017/dental', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(function(err) {
    throw Error(err);
  });

module.exports = mongoose; 