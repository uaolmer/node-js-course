const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const columnRouter = require('./resources/columns/column.router');
const authRouter = require('./resources/login/login.router');
const winston = require('./logger');
const morgan = require('morgan');
const checkToken = require('./utils/token');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

morgan.token('body', req => `body: ${JSON.stringify(req.body)}`);
morgan.token('params', req => `request: ${JSON.stringify(req.params)}`);

app.use(
  morgan(':method :url :params :body :status :response-time ms', {
    stream: winston.stream
  })
);

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/login', authRouter);
app.use('/users', checkToken, userRouter);
app.use('/boards', checkToken, boardRouter);
boardRouter.use('/:boardId/tasks', checkToken, taskRouter);

process.on('uncaughtException', err => {
  winston.error('uncaughtException', { response: err.message });
  process.exit(1);
});

process.on('unhandledRejection', err => {
  winston.error('unhandledRejection', { response: err.message });
  process.exit(1);
});

module.exports = app;
