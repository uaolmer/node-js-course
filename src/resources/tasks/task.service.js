const tasksRepo = require('./task.db.repository');

const getAll = id => tasksRepo.getAll(id);

const create = task => tasksRepo.create(task);

const read = (id, boardId) => tasksRepo.read(id, boardId);

const update = (id, task, boardId) => tasksRepo.update(id, task, boardId);

const remove = id => tasksRepo.remove(id);

module.exports = { getAll, create, read, update, remove };
