const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.read(req.params.id, req.params.boardId);
  res.status(200).send(Task.toResponse(task));
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create({...req.body, boardId: req.params.boardId});
  res.status(200).send(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(req.params.id, req.body, req.params.boardId);
  res.status(200).send(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.remove(req.params.id, req.params.boardId);
  res.sendStatus(204);
});

module.exports = router;
