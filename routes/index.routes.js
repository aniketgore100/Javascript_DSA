const express = require('express');
const router = express.Router();
const employeeRoutes = require('./employe.routes');

router.use('/employees', employeeRoutes);
module.exports = router;