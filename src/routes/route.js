const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const userController=require('../controllers/userController')
const auth=require('../authentication/auth')

router.post('/users',userController.createUsers)
  
router.post('/login',userController.login)
 
router.get('/user/:userId',auth.authentication, userController.checkToken)
 
router.put('/user/:userId',auth.authentication, userController.updatedUser)

router.delete('/user/:userId',auth.authentication, userController.deletedUser)
module.exports = router;