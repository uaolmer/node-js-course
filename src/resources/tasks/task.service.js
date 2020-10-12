const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const create = () => tasksRepo.createUser(id);

const read = () => tasksRepo.getUser(id);

const update = () => tasksRepo.updateUser(id);

const remove = () => tasksRepo.deleteUser(id);

module.exports = { getAll, create, read, update, remove };
