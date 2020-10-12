const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const create = () => tasksRepo.create(id);

const read = () => tasksRepo.read(id);

const update = () => tasksRepo.update(id);

const remove = () => tasksRepo.remove(id);

module.exports = { getAll, create, read, update, remove };
