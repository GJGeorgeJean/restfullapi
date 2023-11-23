const express = require('express');
const router = express.Router();
const {create_user, getAll_users, update_user, delete_user, single_user} = require('../controller/userController');

//post users, C -- for create
router.post('/api/user',create_user)

//get users, R -- for read
router.get('/api/user',getAll_users)

// update Update, U for update
router.patch('/api/user/:id', update_user)

// delete, D for delete
router.delete('/api/user/:id',delete_user)

// single user
router.get('/api/user/:id',single_user)

module.exports = router