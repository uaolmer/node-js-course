const Board = require('./board.model.js');

const getAll = async () => await DB.getAllEntities(model);

const create = async board => await DB.createEntity(model, board);

const read = async id => await DB.readEntity(model, id);

const update = async (id, board) => await DB.updateEntity(model, id, board);

const remove = async id => await DB.removeEntity(model, id);

module.exports = { getAll, create, read, update, remove };
