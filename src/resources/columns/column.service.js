const columnsRepo = require('./column.memory.repository');

const getAll = () => columnsRepo.getAll();

const create = () => columnsRepo.create(id);

const read = () => columnsRepo.read(id);

const update = () => columnsRepo.update(id);

const remove = () => columnsRepo.remove(id);

module.exports = { getAll, create, read, update, remove };
