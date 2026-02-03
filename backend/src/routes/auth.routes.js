const router = require("express").Router();
const controller = require("../controllers/auth.controller");
const auth = require("../middleware/auth.middleware");

router.post("/signup", controller.signup);
router.post("/verify-otp", controller.verifyOtp);
router.post("/login", controller.login);

router.get("/me", auth, async (req, res) => {
  const user = await require("../models/User").findById(req.user.id);
  res.json(user);
});

module.exports = router;
