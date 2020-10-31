const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const create = user => usersRepo.create(user);

const read = id => usersRepo.read(id);

const update = (id, user) => usersRepo.update(id, user);

const remove = id => usersRepo.remove(id);

module.exports = { getAll, create, read, update, remove };
