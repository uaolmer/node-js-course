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

const getByProps = async props => await User.find(user => {
  const matches = Object.entries(props).map(elem => {
      const [prop, value] = elem;
      return user[prop] === value;
  });
  return matches.every(elem => elem === true);
});

module.exports = { getAll, create, read, update, remove, getByProps };
