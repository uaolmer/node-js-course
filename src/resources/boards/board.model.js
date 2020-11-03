// const uuid = require('uuid');
const mongoose = require('mongoose');

const Column = new mongoose.Schema(
  {
    title: String,
    order: Number
  },
  { versionKey: false }
);

const boardSchema = new mongoose.Schema(
  {
    title: String,
    columns: [Column]
  },
  { versionKey: false }
);

boardSchema.statics.toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

module.exports = mongoose.model('Board', boardSchema);
