const express = require("express");
const router = express.Router();
const userC = require("../controllers/user.c");

// router.get("/login", userC.login);
router.get("/", userC.getAll);

router.post("/register", userC.Register);
router.post("/login", userC.Login);
router.get("/:id", userC.getOne);
router.delete("/:id", userC.DeleteOne);
router.patch("/:id", userC.UpdateOne);

//router.post("/login", userC.login);
// router.get("/signup", userC.signup);
//router.post("/signup", userC.signup);
// router.post("/profile", userC.profile);
// router.post("/logout", userC.logout);

module.exports = router;
