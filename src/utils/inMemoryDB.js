const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
const Column = require('../resources/columns/column.model');

const database = {};

const getAllEntities = async table => {};

const createEntity = async (table, entity) => {};

const readEntity = async (table, id) => {};

const updateEntity = async (table, entity) => {};

const removeEntity = async (table, id) => {};

module.exports = {
  getAllEntities,
  createEntity,
  readEntity,
  updateEntity,
  removeEntity
};
