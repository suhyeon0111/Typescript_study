const fs = require("fs");
const path = require("path");

const schedules = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../db/data.json"), "utf-8")
);

exports.getScheduledDates = (req, res) => {
  const { month } = req.query;

  if (!month || !/^\d{4}-\d{2}$/.test(month)) {
    return res
      .status(400)
      .json({ error: "Invalid or missing month parameter" });
  }

  const datesWithSchedule = Object.keys(schedules).filter((date) =>
    date.startsWith(month)
  );

  res.json(datesWithSchedule);
};
