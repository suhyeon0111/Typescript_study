const express = require("express");
const router = express.Router();
const { getScheduledDates } = require("../controllers/scheduleController");

router.get("/schedules", getScheduledDates);

module.exports = router;
