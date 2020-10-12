const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const create = () => usersRepo.createUser(id);

const read = () => usersRepo.getUser(id);

const update = () => usersRepo.updateUser(id);

const remove = () => usersRepo.deleteUser(id);

module.exports = { getAll, create, read, update, remove };
