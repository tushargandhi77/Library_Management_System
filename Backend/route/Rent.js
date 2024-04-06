const express = require('express');
const router = express.Router();

const RentDetails = require('../controllers/RentDetails.model')

router.post('/', RentDetails.addbookuser);
router.get('/', RentDetails.findbookuser);

module.exports = router;