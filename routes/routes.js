const express = require('express');
const users = require('./controllers/users');

const router = express.Router();

router.get('/users', users.getUsers);
router.get('/users/:userId', users.getSingleUser);
router.post('/users', users.addUser);
router.put('/users/:userId', users.updateUser);
router.delete('/users/:userId', users.deleteUser);

module.exports = router;
