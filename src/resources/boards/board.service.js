const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const create = () => boardsRepo.create(id);

const read = () => boardsRepo.read(id);

const update = () => boardsRepo.update(id);

const remove = () => boardsRepo.remove(id);

module.exports = { getAll, create, read, update, remove };
