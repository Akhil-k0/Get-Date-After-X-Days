const { addDays, format } = require("date-fns");

function calculateDateAfterDays(days) {
  const referenceDate = new Date(2020, 7, 22); // 22nd Aug 2020
  const calculatedDate = addDays(referenceDate, days);
  return format(calculatedDate, "dd-MM-yyyy");
}

module.exports = calculateDateAfterDays;
