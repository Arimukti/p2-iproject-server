const express = require('express');
const api3rdPartyController = require('../controllers/api3rdPartyController.js');

const router = express.Router();
router.get("/youtube", api3rdPartyController.getDataYoutube);
router.post("/xendit", api3rdPartyController.createInvoice);


module.exports = router;