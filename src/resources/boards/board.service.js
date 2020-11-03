const boardsRepo = require('./board.db.repository');

const getAll = () => boardsRepo.getAll();

const create = board => boardsRepo.create(board);

const read = id => boardsRepo.read(id);

const update = (id, board) => boardsRepo.update(id, board);

const remove = id => boardsRepo.remove(id);

module.exports = { getAll, create, read, update, remove };
