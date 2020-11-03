const User = require('./user.model.js');
const Task = require('../tasks/task.model.js');

const getAll = async () => await User.find({});

const create = async user => {
  const newUser = await User.create(user);
  return read(newUser._id);
};

const read = async id => await User.findById(id);

const update = async (id, user) => {
  await User.updateOne({ _id: id }, user);
  return read(id);
};

const remove = async id => {
  await Task.updateMany({ userId: id }, { userId: null });
  return await User.deleteOne({ _id: id });
};

module.exports = { getAll, create, read, update, remove };
