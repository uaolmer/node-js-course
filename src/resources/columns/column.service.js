const usersRepo = require('./column.memory.repository');

const getAll = () => usersRepo.getAll();

module.exports = { getAll };
