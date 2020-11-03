const Task = require('./task.model.js');

const getAll = async id => await Task.find();

const create = async task => await Task.create(task);

const read = async (id, boardId) => await Task.findOne({ _id: id, boardId });

const update = async (id, task, boardId) => {
  await Task.updateOne({ _id: id, boardId }, task);
  return read(id, boardId);
};

const remove = async id => await Task.deleteOne({ _id: id });

module.exports = { getAll, create, read, update, remove };
