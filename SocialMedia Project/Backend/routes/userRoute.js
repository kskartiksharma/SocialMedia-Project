const express = require('express');

const userController = require('../controllers/user-controller');
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();

router.post("/Signup", userController.userSignup);
router.post("/Login", userController.userLogin);

router.use(checkAuth);

router.get("/getUser", userController.userInfo);
router.post("/createPost", userController.createPost);
// router.get("/getPost", userController.getPost);
// router.delete("/deletePost", userController.user);


module.exports = router;