const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ENDPOINT || 'mongodb://127.0.0.1:27017/googlebooksDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
