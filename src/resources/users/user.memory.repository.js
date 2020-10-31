const DB = require('../../utils/inMemoryDB');
const model = 'Users';

const getAll = async () => await DB.getAllEntities(model);

const create = async user => await DB.createEntity(model, user);

const read = async id => await DB.readEntity(model, id);

const update = async (id, user) => await DB.updateEntity(model, id, user);

const remove = async id => await DB.removeEntity(model, id);

module.exports = { getAll, create, read, update, remove };
