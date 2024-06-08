/**
 * Date and Time Object definition
 * @typedef {Object} DateAndTimeObject
 * @property {string} month - Month.
 * @property {string} date - Date of the month.
 * @property {string} time - Time in HH:mm format.
 * @property {string} meridiem - Meridiem (AM/PM).
 */

/**
 * Extract month, date, time, and meridiem from date-time string.
 * @param {string} dateTimeString - Date-time string. It should be a valid datetime string.
 * @returns {DateAndTimeObject}
 */
export const toDateAndTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);

  // Extract month and date.
  const month = dateTime.toLocaleString('en-US', { month: 'short' });
  const dateNumber = dateTime.getDate();
  const date = dateNumber > 9 ? dateNumber.toString() : `0${dateNumber}`;

  // Extract time and meridiem.
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC', // Display in UTC timezone
  };
  const timeMeridiem = dateTime.toLocaleString('en-US', options);
  const [hours, minutes] = timeMeridiem.split(':');
  const time = `${hours.padStart(2, '0')}:${minutes}`.slice(0, 5);
  const meridiem = timeMeridiem.split(' ')[1];

  return {
    month,
    date,
    time,
    meridiem,
  };
};
