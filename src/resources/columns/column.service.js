const columnsRepo = require('./column.memory.repository');

const getAll = () => columnsRepo.getAll();

const create = () => columnsRepo.createUser(id);

const read = () => columnsRepo.getUser(id);

const update = () => columnsRepo.updateUser(id);

const remove = () => columnsRepo.deleteUser(id);

module.exports = { getAll, create, read, update, remove };
