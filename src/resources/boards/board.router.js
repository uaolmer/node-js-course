const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.read(req.params.id);
  res.sendStatus(200).send(Board.toResponse(board));
});

router.route('/').post(async (req, res) => {
  const board = await Board.create(Board.fromRequest(req.body));
  res.sendStatus(200).send(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(Board.fromRequest(req.body));
  res.sendStatus(200).send(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  await boardsService.remove(req.params.id);
  res.sendStatus(200).send('Item removed');
});

module.exports = router;
