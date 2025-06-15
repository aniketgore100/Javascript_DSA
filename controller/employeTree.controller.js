const Employee = require('../models/employee.model');
const mongoose = require('mongoose');

const CreateEmployee = async (req, res) => {
    try {
        const { name, managerId } = req.body;

        // Optional: Validate managerId format
        if (managerId && !mongoose.Types.ObjectId.isValid(managerId)) {
            return res.status(400).json({ message: 'Invalid managerId' });
        }

        const newEmployee = new Employee({ name, managerId });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        console.error(error);  
        res.status(500).json({ message: 'Error creating employee', error });
    }
}

const getallEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('managerId', 'name');
        if (!employees || employees.length === 0) {
            return res.status(404).json({ message: 'No employees found' });
        }
        TreeData(employees);
        res.status(200).json(employees);
    } catch (error) {
        console.error(error);  // <--- Add this to debug
        res.status(500).json({ message: 'Error fetching employees', error });
    }
}

class TreeNode {
  constructor(id, name) {
    this.id = id.toString();
    this.name = name;
    this.children = [];
  }
}
function buildEmployeeTree(employees) {
  const nodeMap = new Map();
  let root = null;

  for (const emp of employees) {
    nodeMap.set(emp._id.toString(), new TreeNode(emp._id, emp.name));
  }

  for (const emp of employees) {
    const node = nodeMap.get(emp._id.toString());
    if (emp.managerId && emp.managerId._id) {
      const managerNode = nodeMap.get(emp.managerId._id.toString());
      if (managerNode) {
        managerNode.children.push(node);
      }
    } else {
      root = node;
    }
  }

  return root;
}

const TreeData = (employees) => {
  const tree = buildEmployeeTree(employees);
  console.dir(tree, { depth: null });
}


module.exports = {
    CreateEmployee,
    getallEmployees
    // Add other controller methods as needed
};