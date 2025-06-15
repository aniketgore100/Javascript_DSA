const express = require('express');
const router = express.Router();    

const { CreateEmployee,getallEmployees} = require('../controller/employeTree.controller');

router.post('/create_employee', CreateEmployee);
router.get('/get_all_employees', getallEmployees);

module.exports = router;
