const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
router.use(require("../auth-Middleware/isAuth"));
router.get("/todays-note", userController.getTodaysNote);

router.post("/todays-note", userController.postTodaysNote);

router.get("/old-diary", userController.getOldNotes);
router.get("/get-data", userController.getOldData);

module.exports = router;
