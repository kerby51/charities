const express = require('express');
const DonationController = require('../controllers/DonationController');

const router = express.Router();

router.get('/', DonationController.getAll);
router.post('/', DonationController.create);

module.exports = router;









