const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTrasaction,
} = require('../controllers/transactionsController');

router.route('/').get(getTransactions).post(addTransactions);

router.route('/:id').delete(deleteTrasaction);

module.exports = router;
