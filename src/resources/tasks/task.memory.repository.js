const DB = require('../../utils/inMemoryDB');
const model = 'Tasks';

const getAll = async id => await DB.getAllEntities(model, id);

const create = async task => await DB.createEntity(model, task);

const read = async (id, boardId) => await DB.readEntity(model, id, boardId);

const update = async (id, task, boardId) =>
  await DB.updateEntity(model, id, task, boardId);

const remove = async (id, boardId) => await DB.removeEntity(model, id, boardId);

module.exports = { getAll, create, read, update, remove };
