const models = {
  Users: require('../resources/users/user.model'),
  Boards: require('../resources/boards/board.model'),
  Tasks: require('../resources/tasks/task.model'),
  Columns: require('../resources/columns/column.model')
};

const db = {
  Users: [],
  Boards: [],
  Tasks: [],
  Columns: []
};

const getAllEntities = async (model, id = '') =>
  model === 'Tasks'
    ? db[model].filter(elem => elem).filter(elem => elem.boardId === id)
    : db[model].filter(elem => elem);

const createEntity = async (model, entity) => {
  const newElem = new models[model](entity);
  db[model].push(newElem);
  return newElem;
};

const readEntity = async (model, id, boardId = '') =>
  model === 'Tasks'
    ? db[model].find(elem => elem.id === id && elem.boardId === boardId)
    : db[model].find(elem => elem.id === id);

const updateEntity = async (model, id, entity, boardId = '') => {
  model === 'Tasks'
    ? (db[model][
        db[model]
          .filter(elem => elem)
          .findIndex(elem => elem.id === id && elem.boardId === boardId)
      ] = { id, ...entity })
    : (db[model][
        db[model].filter(elem => elem).findIndex(elem => elem.id === id)
      ] = { id, ...entity });

  return readEntity(model, id, boardId);
};

const removeEntity = async (model, id) => {
  if (model === 'Users') {
    removeUsers(model, id);
  }

  if (model === 'Boards') {
    removeBoards(model, id);
  }

  if (model === 'Tasks') {
    removeTasks(model, id);
  }
};

const removeTasks = async (model, id) => {
  db[model] = db[model]
    .filter(task => task)
    .filter(task => task.id !== id);
};

const removeUsers = async (model, id) => {
  db[model]
    .filter(user => user)
    .forEach((user, index, arr) => {
      if (user.id === id) {
        arr.splice(index, 1);
      }
    });
  db.Tasks
    .filter(task => task)
    .forEach((task, index, arr) => {
      if (task.userId === id) {
        arr[index].userId = null;
      }
    });
};

const removeBoards = async (model, id) => {
  db.Tasks = db.Tasks
    .filter(task => task)
    .filter(task => task.boardId !== id);
  db[model] = db[model].filter(board => board).filter(board => board.id !== id);
};

module.exports = {
  getAllEntities,
  createEntity,
  readEntity,
  updateEntity,
  removeEntity,
  removeBoards,
  removeUsers,
  removeTasks
};
