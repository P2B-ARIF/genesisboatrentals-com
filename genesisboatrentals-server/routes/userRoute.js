const router = require("express").Router();
const AuthControllers = require("../controllers/AuthControllers");
const { userAuthorize } = require("../middleware/userAuthorize");

router.get("/me", userAuthorize, AuthControllers.getMe);
router.post("/login", AuthControllers.login);
router.post("/register", AuthControllers.register);

module.exports = router;
