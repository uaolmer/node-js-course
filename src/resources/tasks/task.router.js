const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.read(req.params.id);
  res.sendStatus(200).send(Task.toResponse(task));
});

router.route('/').post(async (req, res) => {
  const task = await Task.create(Task.fromRequest(req.body));
  res.sendStatus(200).send(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(Task.fromRequest(req.body));
  res.sendStatus(200).send(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.remove(req.params.id);
  res.sendStatus(200).send('Item removed');
});

module.exports = router;
