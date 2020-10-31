const router = require('express').Router();
const Column = require('./column.model');
const columnsService = require('./column.service');

router.route('/').get(async (req, res) => {
  const columns = await columnsService.getAll();
  res.json(columns.map(Column.toResponse));
});

module.exports = router;
