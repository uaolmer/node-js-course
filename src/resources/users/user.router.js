const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.read(req.params.id);
  res.sendStatus(200).send(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(User.fromRequest(req.body));
  res.sendStatus(200).send(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update(User.fromRequest(req.body));
  res.sendStatus(200).send(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  await usersService.remove(req.params.id);
  res.sendStatus(200).send('Item removed');
});

module.exports = router;
