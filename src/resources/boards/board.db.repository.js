const Board = require('./board.model.js');
const Task = require('../tasks/task.model.js');

const getAll = async id => await Board.find({ id });

const create = async board => await Board.create(board);

const read = async id => await Board.findOne({ _id: id });

const update = async (id, board) => {
  await Board.updateOne({ _id: id }, board);
  return read(id);
};

const remove = async id => {
  await Task.deleteMany({ boardId: id });
  return await Board.deleteOne({ _id: id });
};

module.exports = { getAll, create, read, update, remove };
