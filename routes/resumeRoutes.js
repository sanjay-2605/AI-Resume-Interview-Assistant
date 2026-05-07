const express = require('express');
const router = express.Router();
const {
  generateFeedback,
  generateQuestions,
  evaluateAnswer,
} = require('../controllers/resumeController');

router.post('/feedback', generateFeedback);
router.post('/questions', generateQuestions);
router.post('/evaluate', evaluateAnswer);

module.exports = router;
