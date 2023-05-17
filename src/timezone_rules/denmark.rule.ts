/**
Returns the last Sunday in a given month and year.
@param {number} year - The year.
@param {number} month - The month (0-based index).
@returns {Date} The date representing the last Sunday in the specified month and year.
*/
const getLastSundayInMonth = (year: number, month: number): Date => {
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const lastDayOfWeek = lastDayOfMonth.getDay();
  return new Date(year, month, lastDayOfMonth.getDate() - lastDayOfWeek);
}

/**
Determines if a given date falls within the Daylight Saving Time (DST) period in Denmark.
@param {number} year - The year.
@param {Date} date - The date to check.
@returns {boolean} true if the date is within the DST period; otherwise, false.
*/
const isSummerTime = (year: number, date: Date): boolean => {
  // Daylight Saving Time in Denmark starts on the last Sunday in March and ends on the last Sunday in October
  const dstStart = getLastSundayInMonth(year, 2); // March (0-based index)
  const dstEnd = getLastSundayInMonth(year, 9); // October (0-based index)
  return date >= dstStart && date < dstEnd;
}

/**
Converts a Danish local time string to UTC time string.
@param {string} inputString - The input string representing the Danish local time.
@returns {string} The UTC time string converted from the Danish local time.
*/
export const convertDanishTimeToUtc = (inputString: string): string => {
  const inputDate = new Date(inputString);
  const year = inputDate.getFullYear();

  // Check if it's Danish summer or wintertime
  const isDanishSummerTime = isSummerTime(year, inputDate);

  // Adjust the time based on Danish summer or wintertime
  if (isDanishSummerTime) {
    inputDate.setHours(inputDate.getHours() - 2);
  } else {
    inputDate.setHours(inputDate.getHours() - 1);
  }

  // Convert the adjusted date to UTC time string
  const utcTimeString = inputDate.toISOString();

  return utcTimeString;
}
