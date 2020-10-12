const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const create = () => boardsRepo.createUser(id);

const read = () => boardsRepo.getUser(id);

const update = () => boardsRepo.updateUser(id);

const remove = () => boardsRepo.deleteUser(id);

module.exports = { getAll, create, read, update, remove };
