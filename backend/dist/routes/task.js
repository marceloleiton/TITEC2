"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task");

//express sirve para crear rutas
var router = (0, _express.Router)();
router.get('/tasks', _task.getTasks);
router.get('/tasks/count', _task.getTaskCount);
router.get('/tasks/:id', _task.getTask);
router.post('/tasks', _task.saveTask);
router["delete"]('/tasks', _task.deleteTask);
router.put('/tasks', _task.updateTask);
var _default = router;
exports["default"] = _default;