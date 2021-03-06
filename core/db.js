const mongoose = require('mongoose');
// const db = config.get('mongoURI');

const MONGODB_URI = ''


const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;

// mongoose
//   .connect('mongodb://localhost:27017/dental', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .catch(function(err) {
//     throw Error(err);
//   });

// module.exports = mongoose; 
