const winston = require('winston');

const { combine, timestamp, prettyPrint, colorize, printf } = winston.format;

const loggerFormat = printf(({ level, message, timestamp, ...metadata }) => {
  let msg = `${timestamp} ${level}: ${message}`;
  if (metadata.response) {
    msg += ` ${metadata.response}`;
  }
  return msg;
});

const logger = winston.createLogger({
  format: combine(
    colorize(),
    prettyPrint(),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    loggerFormat
  ),
  exitOnError: false,
  handleExceptions: true,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
