const express = require('express');
const authorController= require('../controllers/authorController')
const blogController= require('../controllers/blogsController')
const loginController= require('../controllers/loginController');
const { authentication, authorisation } = require('../middleware/middleware');



const router = express.Router();



// router.post('/createAuthor',authorController.createAuthor);
// router.post('/login', loginController.login);
// router.post('/createBlog', blogController.createBlog);
// router.get('/getblogs', blogController.getBlogs);
// router.put('/blogs/:blogId' , blogController.updateBlogs);
// router.delete('/deleteBlogById/:blogId', blogController.deleteBlog);
// router.delete('/deleteBlogByQuerCondition', blogController.deleteByQuery);



router.post('/createAuthor',authorController.createAuthor);
router.post('/login', loginController.login);
router.post('/createBlog',authentication, blogController.createBlog);
router.get('/getblogs',authentication, blogController.getBlogs);
router.put('/blogs/:blogId' ,authentication,authorisation,blogController.updateBlogs);
router.delete('/deleteBlogById/:blogId', authentication,authorisation,blogController.deleteBlogByid);
router.delete('/deleteBlogByQuerCondition',authentication,authorisation, blogController.deleteBlogByQuerCondition);

module.exports = router;