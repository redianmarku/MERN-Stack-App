const express = require("express");
const router = express.Router();
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").post(createGoal).get(getGoals);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
