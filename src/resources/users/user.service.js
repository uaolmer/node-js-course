const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const create = () => usersRepo.create(id);

const read = () => usersRepo.read(id);

const update = () => usersRepo.update(id);

const remove = () => usersRepo.remove(id);

module.exports = { getAll, create, read, update, remove };
