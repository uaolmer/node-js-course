const { MONGO_CONNECTION_STRING, PORT } = require('./common/config');
const mongoose = require('mongoose');
const winston = require('./logger');
const app = require('./app');

app.listen(PORT, () => {
  winston.info('Application status:', {
    response: `✅ Running on http://localhost:${PORT}`
  });
});

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.on('error', () => {
  winston.error('Database status:', {
    response: '⛔ Database connection error'
  });
});

mongoose.connection.once('open', () => {
  winston.info('Database status:', { response: '✅ Database connected' });
});
