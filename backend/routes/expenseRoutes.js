const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const { authMiddleware } = require('../middlewares/auth');
const { checkRole } = require('../middlewares/role');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files

// POST /api/expenses (create single expense)
router.post('/', authMiddleware, expenseController.createExpense);

// POST /api/expenses/upload (bulk upload CSV)
router.post('/upload', authMiddleware, upload.single('file'), expenseController.uploadExpensesCSV);

// GET /api/expenses (read expenses with filters)
router.get('/', authMiddleware, expenseController.getExpenses);

// PATCH /api/expenses/:id (update expense)
router.patch('/:id', authMiddleware, expenseController.updateExpense);

// DELETE /api/expenses (bulk delete expenses)
router.delete('/', authMiddleware, expenseController.deleteExpenses);

// GET /api/expenses/stats (get expense statistics)
router.get('/stats', authMiddleware, expenseController.getExpenseStatistics);

module.exports = router;
